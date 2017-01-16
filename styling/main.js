import Exponent from 'exponent';
import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
         <View style={{flex: 2, backgroundColor: 'skyblue'}} />
         <View style={{flex: 3, backgroundColor: 'steelblue'}} />
           <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
        </View>
      </View>
    );

    /*
    Use flex in a component's style to have the component expand and shrink dynamically based on available space.
    Normally you will use flex: 1, which tells a component to fill all available space, shared evenly amongst each other component with the same parent.
    The larger the flex given, the higher the ratio of space a component will take compared to its siblings.
    */


    /*
    Adding flexDirection to a component's style determines the primary axis of its layout.
     Should the children be organized horizontally (row) or vertically (column)? The default is column.
     */
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

Exponent.registerRootComponent(App);
