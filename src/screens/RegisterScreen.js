import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
  Alert
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import fullNameImage from '../images/fullname-icon.png';
import EmailImage from '../images/email-icon.png';
import ConfirmPassImage from '../images/confirmpass-icon.png';
import userNameImage from '../images/username-icon.png';
import passwordImage from '../images/password-icon.png';
import ShowPassImage from '../images/showpass-icon.png';
import HidePassImage from '../images/hidepass-icon.png';

export default class RegisterScreen extends Component<{}> {

  constructor(props){
    super(props)
    this.state = {
      showPass: true,
      pressPass: false,
      showConfirmPass: true,
      pressConfirmPass: false
    }
  };

  showPass = () => {
    if (this.state.pressPass == false) {
      this.setState({showPass: false, pressPass: true})
    } else {
      this.setState({showPass: true, pressPass: false})
    }
  };

  showConfirmPass = () => {
    if (this.state.pressConfirmPass == false) {
      this.setState({showConfirmPass: false, pressConfirmPass: true})
    } else {
      this.setState({showConfirmPass: true, pressConfirmPass: false})
    }
  };

  LoginFunction = () => {
    this.props.navigation.navigate('Login')
  };
  registerFunction = () => {
    if (true) {
      Alert.alert(
      "Note",
      "Register success! Please check email to active account. thank you!",
      [
        {text: 'OK', onPress: () => this.props.navigation.navigate('Login')},
      ],
        { cancelable: false }
      )
    } else {

    }
  }

   render() {
    return (
      
      <View style={{backgroundColor: "#5EAEEF", flex: 1}}>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar backgroundColor="#5EAEEF" />
            <View style={{alignItems: 'center', marginTop: 5}}>
              <Image
                style={{width: 110, height: 110}}
                source={require('../images/register-logo.png')}
              />
              <Text style={styles.logoText}>Account Register</Text>
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={fullNameImage}/>
              <TextInput style={styles.inputBox}
                  placeholder="Full name"
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholderTextColor="#ffffff"
              />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={userNameImage}/>
              <TextInput style={styles.inputBox}
                  placeholder="Username"
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholderTextColor="#ffffff"
              />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={EmailImage}/>
              <TextInput style={styles.inputBox}
                  placeholder="Email"
                  keyboardType="email-address"
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholderTextColor="#ffffff"
              />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={passwordImage}/>
              <TextInput style={styles.inputBox}
                  placeholder="Password"
                  secureTextEntry={this.state.showPass}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholderTextColor="#ffffff"
              />

              <TouchableOpacity onPress={this.showPass.bind(this)}>
                <Image style={styles.inputIconShow} source={this.state.pressPass == false ? ShowPassImage : HidePassImage}/>
              </TouchableOpacity>

            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={ConfirmPassImage}/>
              <TextInput style={styles.inputBox}
                  placeholder="Confirm Password"
                  secureTextEntry={this.state.showConfirmPass}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholderTextColor="#ffffff"
              />

              <TouchableOpacity onPress={this.showConfirmPass.bind(this)}>
                <Image style={styles.inputIconShow} source={this.state.pressConfirmPass == false ? ShowPassImage : HidePassImage}/>
              </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.button} onPress={this.registerFunction}  >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <View style={styles.signInTextCont}>
              <Text style = {styles.signInText}>Already Have an Account?</Text>
                <TouchableOpacity onPress={this.LoginFunction}>
                  <Text style={styles.loginText}> Login</Text>
                </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5EAEEF',
  },
  logoText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 15
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius:30,
    width:300,
    marginBottom:15,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  inputBox: {
    marginLeft:10,
    marginRight: 15,
    color: '#ffffff',
    fontSize: 16,
    flex:1,
  },
  button:{
    backgroundColor: '#2b84d2',
    borderRadius: 20,
    width:300,
    marginVertical: 5,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  signInTextCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    flexDirection: 'row'
  },
  signInText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '500'
  },
  inputIconShow:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  }
});