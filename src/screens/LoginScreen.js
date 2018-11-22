import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Alert,
  StatusBar
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default class LoginScreen extends Component<{}> {

  registerFunction = () =>{  
    this.props.navigation.navigate('Register')
  };
  
	 render() {
	 	return (
	 		<View style={styles.container}>
       <StatusBar backgroundColor="#5EAEEF" />
  	 		<Logo/>
        <Form/>
        <View style={styles.signupTextCont}>
          <Text style = {styles.signupText}>Don't Have an Account yet?</Text>
          <TouchableOpacity onPress={this.registerFunction}>
            <Text style={styles.registerText}> Register</Text>
          </TouchableOpacity>
        </View>
	 		</View>
	 	)
	 }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5EAEEF',
  },
  signupTextCont: {
  	flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
  	color: 'rgba(255, 255, 255, 0.6)',
  	fontSize: 16,
  },
  registerText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '500'
  }
});