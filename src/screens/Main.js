import React, { Component } from 'react';
import { StyleSheet, View,  Button, Pressable } from 'react-native';
import firebase from '../database/firebaseDb';
import { BottomNavigation, Text } from "react-native-paper";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './HomeScreen';
import FitnessScreen from './FitnessScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();


export default class Main extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  
  
  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
        <Tab.Navigator initialRouteName="HomeScreen" labeled={false}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Profile" component={ProfileScreen} navigation={this.props.navigation}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("Profile", {uid: firebase.auth().currentUser.uid})
                    }})}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Fitness" component={FitnessScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="google-fit" color={color} size={26} />
                    ),
                }} />
        
        </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});