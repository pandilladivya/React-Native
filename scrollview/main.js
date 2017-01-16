import Exponent from 'exponent';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
   Image,
} from 'react-native';

class App extends React.Component {

  render() {
    let pic = {
      uri: 'http://react-etc.net/files/2016-07/logo-578x270.png'
    };
    return (
      <ScrollView>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
           <Image source={pic} style={{width: 250, height: 110}}/>
            <Image source={pic} style={{width: 250, height: 110}}/>

          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
           <Image source={pic} style={{width: 250, height: 110}}/>
            <Image source={pic} style={{width: 250, height: 110}}/>

          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
           <Image source={pic} style={{width: 250, height: 110}}/>
            <Image source={pic} style={{width: 250, height: 110}}/>

          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
          <Image source={pic} style={{width: 250, height: 110}}/>
           <Image source={pic} style={{width: 250, height: 110}}/>
            <Image source={pic} style={{width: 250, height: 110}}/>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
