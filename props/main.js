import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Good Evening {this.props.name}</Text>
      </View>
    );
    //Using name as a prop lets us customize the Greeting component, so we can reuse that component for each of our greetings.
  }
}

class WishPeople extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Divya' />
        <Greeting name='Santosh' />
        <Greeting name='Ray' />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },
});


Exponent.registerRootComponent(WishPeople);
