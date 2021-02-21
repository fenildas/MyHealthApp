//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const Logo = () => {
  return (
    <View style={styles.container}>
      
      <Image style={{width:150, height:150, alignSelf:'center'}} source={require('../image/logo4.png')}/>
      
      
  </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container:{
    
  }
});
export default Logo;
//make this component available to the app
