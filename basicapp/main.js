'use strict';
import React, { Component } from 'react';

 import Login from './Login.js';
  import SignIn from './SignIn.js';
import Home from './Home.js'
import {
  StyleSheet,

  Navigator,
} from 'react-native';




class App extends Component {

  renderScene(route,navigator)
  {

    if(route.name=='Login')
    {

      return (<Login navigator={navigator}/>);
    }
    if(route.name=='SignIn')
    {
      return (<SignIn navigator={navigator} />);
    }
    if(route.name=='Home')
    {
      return (<Home navigator={navigator} />);
    }
  }

  render() {


    return (
      <Navigator
          initialRoute={{name:'Login'}}
           renderScene={this.renderScene.bind(this)}

         />

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
