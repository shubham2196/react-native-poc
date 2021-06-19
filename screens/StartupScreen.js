import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import {
    View,
    ActivityIndicator,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Colors from '../constants/colors';
import * as authActions from '../store/actions/auth'

const StartupScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if (!userData) {
                dispatch(authActions.setDidTryAL());
                return;
            }

            const transformedData = JSON.parse(userData);
            console.log('loginData', transformedData);
            const { userId, emailID } = transformedData;
        
            if (!userId || !emailID) {
                dispatch(authActions.setDidTryAL());
                return;
            }

            dispatch(authActions.authenticate(userId));
        }

        tryLogin();
    }, [dispatch])

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default StartupScreen;