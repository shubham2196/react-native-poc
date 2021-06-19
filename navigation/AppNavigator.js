import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { HomeNavigator, LoginNavigator } from './HomeNavigator';
import StartupScreen from '../screens/StartupScreen';

const AppNavigator = props => {
    const isLogin = useSelector(state => !!state.auth.userId);
    const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);
    console.log('isLogin', isLogin);
    console.log('didTryAutoLogin', didTryAutoLogin);

    return (
        <NavigationContainer>
            {isLogin && <HomeNavigator />}
            {!isLogin && didTryAutoLogin && <LoginNavigator />}
            {!isLogin && !didTryAutoLogin && <StartupScreen />}
        </NavigationContainer>
    )
}

export default AppNavigator;