// components/signup.js

import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import firebase from '../database/firebaseDb';
import Logo from '../components/Logo'
import { TextInput, Button } from 'react-native-paper';



export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <KeyboardAvoidingView style={styles.container}> 
        <Logo style={styles.logo}/> 
        <View style={styles.form}>
          <TextInput
            style={styles.inputStyle}
            label="Name"
            type="outlined"
            value={this.state.displayName}
            onChangeText={(val) => this.updateInputVal(val, 'displayName')}
          />      
          <TextInput
            style={styles.inputStyle}
            label="Email"
            type="outlined"
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
          />
          <TextInput
            style={styles.inputStyle}
            label="Password"
            type="outlined"
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            maxLength={15}
            secureTextEntry={true}
          />   
          <Button 
            color="#3740FE"
            icon="account-plus" 
            mode="contained"
            onPress={() => this.registerUser()}
          >Sign Up</Button>
          <TouchableOpacity
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{color: '#3740FE'}}>Already Registered? Click here to login</Text>  
          </TouchableOpacity>
            
        </View>                      
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: '#fff'
  },
  logo:{
    
    flex: 1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  form:{
    flex: 2,
    justifyContent:'center',
    alignItems:'center'
  },
  inputStyle: {
    width:"100%",
    marginBottom: 10,
    paddingBottom: 8,
    alignSelf: "center",
    borderColor: "#ccc",
    backgroundColor:"#f4f2f5"
    
  },
  loginText: {
    color: '#3740FE',
    marginTop: 18,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});