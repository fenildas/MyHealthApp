import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image,Text, Button, Pressable, TouchableOpacity } from 'react-native';
import firebase from '../database/firebaseDb';
//import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
//import { BottomNavigation, Text } from "react-native-paper";

import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from 'react-native-reanimated';

export default class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  
  //<Button
  //color="#3740FE"
  //title="Logout"
  //onPress={() => this.signOut()}/>   {this.state.displayName}


  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View >
        <ScrollView>
          <View style={{padding:20, alignItems:'center'}}>
            <Image source={require('../image/coder.png')} style={{width:140,height:140, borderRadius:100}}></Image>
          </View>
          <View style={{ alignItems:'center'}}>
            <Text style={{fontSize:35, fontWeight:'bold',borderBottomWidth:2}}>{this.state.displayName}</Text>
          </View>
          <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'center',
            backgroundColor:'#fff',
            width:'90%' ,
            padding:20,
            paddingBottom:22,
            borderRadius:10,
            shadowOpacity:80,
            elevation:15,
            marginTop:20
          }}>
            <Icon name="human" size={25} />
            <Text style={{fontSize:18, marginLeft:7}}>Age : 22</Text>         
          </View>
          <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'center',
            backgroundColor:'#fff',
            width:'90%' ,
            padding:20,
            paddingBottom:22,
            borderRadius:10,
            shadowOpacity:80,
            elevation:15,
            marginTop:20
          }}>
            <Icon name="map-marker-radius" size={25} />
            <Text style={{fontSize:18, marginLeft:7}}>Location: Ahmedabad</Text>         
          </View>
          <TouchableOpacity style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'center',
            backgroundColor:'#fff',
            width:'90%' ,
            padding:20,
            paddingBottom:22,
            borderRadius:10,
            shadowOpacity:80,
            elevation:15,
            marginTop:20,            
          }} >
            <Icon name="account-edit" size={25} />
            <Text style={{fontSize:18, marginLeft:7}}>Edit Profile</Text>         
          </TouchableOpacity>
          <TouchableOpacity style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'center',
            backgroundColor:'#fff',
            width:'90%' ,
            padding:20,
            paddingBottom:22,
            borderRadius:10,
            shadowOpacity:80,
            elevation:15,
            marginTop:20,
            marginBottom:40,
            backgroundColor:"#000"
          }} onPress={() => this.signOut()}>
            <Icon name="logout" color="#fff" size={24} />
            <Text style={{fontSize:18, marginLeft:7, color:"#fff"}}>LOG OUT</Text>         
          </TouchableOpacity>
          

        </ScrollView>
        
        
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