import Exponent from 'exponent';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
    render() {
      return (
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            {this.state.text}
          </Text>
        </View>
      );
    }
}



Exponent.registerRootComponent(App);
