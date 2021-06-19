import { AsyncStorage, Alert } from 'react-native';
import Api from '../../constants/api';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';

export const setDidTryAL = () => {
    return { type: SET_DID_TRY_AL };
};

export const authenticate = (userId) => {
    return dispatch => {
        dispatch({ type: AUTHENTICATE, userId: userId });
    };
};

export const login = (username, password) => {
    if (username === '' || password === '') {
        Alert.alert('Please enter all manadatory feilds');
    } else {
        return async dispatch => {
            dispatch(authenticate("1", username));
            saveDataToStorage("1", username);
            //below code use to login using server database
            // const response = await fetch(Api.mainUrl+Api.login,
            //     {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({
            //             LoginType: '1',
            //             EmailID: username,
            //             Password: password,
            //             FirstName: '',
            //             LastName: '',
            //             Country: '',
            //             State: ''
            //         })
            //     }
            // );
            
            // const responseData = await response.json();
            // if (responseData.message === 'Fail') {
            //     const errorId = responseData.DisplayMsg;
            //     console.log('message', errorId);
            //     let message = 'Something went wrong!';
            //     if (errorId === 'EMAIL_NOT_FOUND') {
            //         message = 'This email could not be found!';
            //     } else if (errorId === 'INVALID_PASSWORD') {
            //         message = 'This password is not valid!';
            //     } else if (errorId === 'Login Failed') {
            //         message = 'Username or Password is incorrect';
            //     }
            //     throw new Error(message);
            // }
            // console.log(responseData);
            // dispatch(authenticate(responseData.id, responseData.EmailID));
            // saveDataToStorage(responseData.id, responseData.EmailID);
        };
    }
};

export const logout = () => {
    AsyncStorage.removeItem('userData');
    return { type: LOGOUT };
};

const saveDataToStorage = (id, EmailID) => {
    AsyncStorage.setItem(
        'userData',
        JSON.stringify({
            userId: id,
            emailID: EmailID
        })
    );
};
