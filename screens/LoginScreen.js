import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useState, useEffect, useReducer, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, AsyncStorage, ActivityIndicator, KeyboardAvoidingView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import Input from '../components/UI/Input';
import * as authActions from '../store/actions/auth';
import Colors from '../constants/colors';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const LoginScreen = props => {
    const dispatch = useDispatch();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            username: '',
            password: ''
        },
        inputValidities: {
            username: false,
            password: false
        },
        formIsValid: false
    });

    const authHandler = async () => {
        let action = authActions.login(
            formState.inputValues.username,
            formState.inputValues.password
        );

        setError(null);
        setIsLoading(true);
        try {
            await dispatch(action);
            //props.navigation.navigate('Home');
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            });
        },
        [dispatchFormState]
    );

    useEffect(() => {
        if (error) {
            Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
        }
    }, [error]);

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.screen}
        >
            <View style={styles.authContainer}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo_demo.png')} />
                </View>

                <Input
                    id="username"
                    label="Username"
                    keyboardType="email-address"
                    required='true'
                    email
                    autoCapitalize="none"
                    errorText="Please enter a valid email address."
                    onInputChange={inputChangeHandler}
                    initialValue=""
                />

                <Input
                    id="password"
                    label="Password"
                    keyboardType="default"
                    secureTextEntry
                    required='true'
                    minLength={5}
                    autoCapitalize="none"
                    errorText="Please enter a valid password."
                    onInputChange={inputChangeHandler}
                    initialValue=""
                />
                <TouchableOpacity style={styles.appButtonContainer}
                    onPress={authHandler}>
                    {isLoading ? (
                        <ActivityIndicator size="small" color={Colors.accent} />
                    ) : (
                        <Text style={styles.appButtonText}>Login</Text>
                    )}
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    authContainer: {
        flex: 1,
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    logo: {
        width: 200,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    textInput: {
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        marginTop: 10,
        height: 40,
        borderColor: '#0d0d0d',
        borderWidth: 1
    },
});

export default LoginScreen;