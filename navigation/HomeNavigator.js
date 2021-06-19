import 'react-native-gesture-handler';
import React from 'react';
import { Platform, View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen, { screenOptions as dashboardScreenOptions } from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AddLeadsScreen, { screenOptions as addLeadsScrrenOptions } from '../screens/AddLeadsSceen';
import MyFollowupsScreen, { screenOptions as myFollowupsScreenOptions } from '../screens/MyFollowupsScreen';
import MyLeadsScreen, { screenOptions as myLeadsScreenOptions } from '../screens/MyLeadsScreen';
import Colors from '../constants/colors';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontSize: 18,
        //fontFamily: 'open-sans-bold'
    },
    // headerBackTitleStyle: {
    //     fontFamily: 'open-sans'
    // },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const DashboardStackNavigator = createStackNavigator();

export const DashboardNavigator = () => {
    return (
        <DashboardStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <DashboardStackNavigator.Screen
                name="Dashboard"
                component={HomeScreen}
                options={dashboardScreenOptions}
            />
        </DashboardStackNavigator.Navigator>
    );
};

const AddleadsStackNavigator = createStackNavigator();

export const AddLeadsNavigator = () => {
    return (
        <AddleadsStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <AddleadsStackNavigator.Screen
                name="addLeads"
                component={AddLeadsScreen}
                options={addLeadsScrrenOptions}
            />
        </AddleadsStackNavigator.Navigator>
    );
};

const MyLeadsStackNavigator = createStackNavigator();

export const MyLeadsNavigator = () => {
    return (
        <MyLeadsStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <MyLeadsStackNavigator.Screen
                name="myLeads"
                component={MyLeadsScreen}
                options={myLeadsScreenOptions}
            />
        </MyLeadsStackNavigator.Navigator>
    );
};

const MyFollowupsStackNavigator = createStackNavigator();
export const MyFollowupsNavigator = () => {
    return (
        <MyFollowupsStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <MyFollowupsStackNavigator.Screen
                name="myFollowups"
                component={MyFollowupsScreen}
                options={myFollowupsScreenOptions}
            />
        </MyFollowupsStackNavigator.Navigator>
    );
};

const HomeDrawerNavigator = createDrawerNavigator();
export const HomeNavigator = () => {
    const dispatch = useDispatch()
    return (
        <HomeDrawerNavigator.Navigator drawerContent={props => {
            return (<View style={{ flex: 1, paddingTop: 20 }}>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <DrawerItemList {...props} />
                    <DrawerItem
                        icon={() =>
                            <Ionicons
                                name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'}
                                size={23}
                                color={props.color}
                            />
                        }
                        label="Logout"
                        onPress={() => { dispatch(authActions.logout()) }}
                    />
                </SafeAreaView>
            </View>);
        }}>
            <HomeDrawerNavigator.Screen
                name="DashboardNav"
                component={DashboardNavigator}
                options={{
                    drawerIcon: props => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                            size={23}
                            color={props.color}
                        />
                    )
                }}
            />
            <HomeDrawerNavigator.Screen
                name="AddLeadsNav"
                component={AddLeadsNavigator}
                options={{
                    drawerIcon: props => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                            size={23}
                            color={props.color}
                        />
                    )
                }}
            />
            <HomeDrawerNavigator.Screen
                name="MyLeadsNav"
                component={MyLeadsNavigator}
                options={{
                    drawerIcon: props => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-stats' : 'ios-stats'}
                            size={23}
                            color={props.color}
                        />
                    )
                }}
            />
            <HomeDrawerNavigator.Screen
                name="MyFollowups"
                component={MyFollowupsNavigator}
                options={{
                    drawerIcon: props => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-calendar' : 'ios-calendar'}
                            size={23}
                            color={props.color}
                        />
                    )
                }}
            />
        </HomeDrawerNavigator.Navigator>
    );
};

const loginNavOptions = {
    headerShown: false
};

const LoginStackNavigator = createStackNavigator();
export const LoginNavigator = () => {
    return (
        <LoginStackNavigator.Navigator screenOptions={loginNavOptions}>
            <LoginStackNavigator.Screen
                name="login"
                component={LoginScreen}
            />
        </LoginStackNavigator.Navigator>
    );
};