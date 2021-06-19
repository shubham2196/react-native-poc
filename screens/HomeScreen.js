import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import Card from '../components/UI/Card';
import Colors from '../constants/colors';
const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <View style={styles.horizontalView}>
                <Card style={styles.card1Style}>
                    <View >
                        <Text style={styles.textStyle}>Add Leads</Text>
                    </View>
                </Card>
                <Card style={styles.card2Style}>
                    <View >
                        <Text style={styles.textStyle}>My Leads</Text>
                    </View>
                </Card>
            </View>
            <View style={styles.horizontalView}>
                <Card style={styles.card3Style}>
                    <View >
                        <Text style={styles.textStyle}>My Followups</Text>
                    </View>
                </Card>
                <Card style={styles.card4Style}>
                    <View >
                        <Text style={styles.textStyle} style={styles.textStyle}>Attendance</Text>
                    </View>
                </Card>
            </View>
            <View style={styles.horizontalView}>
                <Card style={styles.card5Style}>
                    <View >
                        <Text style={styles.textStyle}>Summery</Text>
                    </View>
                </Card>
                <Card style={styles.card6Style}>
                    <View >
                        <Text style={styles.textStyle}>Users</Text>
                    </View>
                </Card>
            </View>
        </View>
    );
};

export const screenOptions = navData => {
    return {
        headerTitle: 'Dashboard',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    };
}

const styles = StyleSheet.create({
    cardItem: {
        maxWidth: '40%',
        height: 130,
        width: 150,
        margin: 20,
        padding: 10,
        alignItems: 'center',
    },
    card1Style: {
        maxWidth: '40%',
        height: 130,
        width: 150,
        margin: 20,
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.card1
    },
    card2Style: {
        maxWidth: '40%',
        height: 130,
        width: 150,
        margin: 20,
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.card2
    },
    card3Style: {
        maxWidth: '40%',
        height: 130,
        width: 150,
        margin: 20,
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.card3
    },
    card4Style: {
        maxWidth: '40%',
        height: 130,
        width: 150,
        margin: 20,
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.card4
    },
    card5Style: {
        maxWidth: '40%',
        height: 130,
        width: 150,
        margin: 20,
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.card5
    },
    card6Style: {
        maxWidth: '40%',
        height: 130,
        width: 150,
        margin: 20,
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.card6
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white'
    },
    horizontalView: {
        flexDirection: 'row'
    }

});

export default HomeScreen;