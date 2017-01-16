import Exponent from 'exponent';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';




class App extends React.Component {
  render() {
    let pic = {
      uri: 'http://react-etc.net/files/2016-07/logo-578x270.png'
    };



    return (
      <View style={styles.container}>

        <Text>HelloWorld!!</Text>
        <Text>My First App in React Native!!</Text>
        <Image source={pic} style={{width: 250, height: 110}}/>
      </View>
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

Exponent.registerRootComponent(App); // The AppRegistry just tells React Native which component is the root one for the whole application.
