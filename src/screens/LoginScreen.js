import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import firebase from '../database/firebaseDb';
import Logo from '../components/Logo'
import { TextInput, Button } from 'react-native-paper';

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
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

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Main')
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
      <View style={styles.container}> 
        <Logo style={styles.logo}/> 
        <View style={styles.form}>
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
            icon="account" 
            mode="contained"
            onPress={() => this.userLogin()}
            >Log In</Button>   
          <TouchableOpacity
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={{color: '#3740FE'}}>Don't have account? Click here to signup</Text>
          </TouchableOpacity>
        
        </View>
                                  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    backgroundColor: '#f4f2f5'
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
    backgroundColor:"#fff"
  },
  loginText: {
  
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