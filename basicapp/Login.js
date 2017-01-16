import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  mail:'',
                  pwd:'',

                };
  }
  OnLoginPressed() {
  if(this.state.mail=="Divya" && this.state.pwd=="Divya")
  {
    this.navigate(this,'Home');
  }
 }
 navigate(routeName) {
  this.props.navigator.push({
    name:routeName
  })
}
    render() {

      return (
        <View style={styles.container}>

          <TextInput style={styles.input}
            placeholder="Enter Mail"
            onChangeText={(mail) => this.setState({mail})}
          />
          <TextInput style={styles.input}
            placeholder="Enter Password"
            onChangeText={(pwd) => this.setState({pwd})}
            secureTextEntry={true}
          />


        <TouchableHighlight style={styles.button} onPress={this.OnLoginPressed.bind(this)}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navigate.bind(this,'SignIn')}>
          <Text>Not a Registered User. Click here to SignUp</Text>
        </TouchableHighlight>


        </View>
      );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },

});

export default Login;
