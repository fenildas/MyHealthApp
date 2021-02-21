import React, { Component } from 'react';
import { StyleSheet, View,  Button, Pressable } from 'react-native';
import firebase from '../database/firebaseDb';
import { BottomNavigation, Text } from "react-native-paper";

export default class HomeScreen extends Component {
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
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>

        
      </View>
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