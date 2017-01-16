import React, { Component } from 'react';
import Exponent from 'exponent';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import first from './first.js'
import second from './second.js'
import third from './third.js'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/MaterialIcons';

 class Home extends Component {
  render() {
    return (
      <View style={{ flex:1 }}>
        <View style ={styles.topBit}>
          <Text style={styles.logo}>WhatsApp</Text>
          <View style={styles.row}>
            <Icon name="search" color='#fff' size={23} style={{ padding:5 }} />
            <Icon name="chat" color='#fff' size={23} style={{ padding:5 }} />
            <Icon name="more-vert" color='#fff' size={23} style={{ padding:5 }} />
          </View>
        </View>
        <ScrollableTabView
          tabBarUnderlineColor="#fff"
          tabBarBackgroundColor ='#075e54'
          tabBarActiveTextColor="#fff"
          tabBarInactiveTextColor="#88b0ac"
        >
          <first tabLabel="first" />
          <second tabLabel="second"  />
          <third tabLabel="third" />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logo:{
    color:'#fff',
    fontSize:23,
    margin:10,
    marginLeft:20,
    fontWeight:'500',
  },
  row:{
    flexDirection:'row'
  },
  topBit:{
    flexDirection:'row',
    alignItems:'center',
    paddingTop:15,
    backgroundColor:'#075e54',
    justifyContent:'space-between'
  },
});

Exponent.registerRootComponent(Home);
