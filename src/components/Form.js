import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TextInput, 
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import { createStackNavigator, withNavigation } from 'react-navigation';
import userNameImage from '../images/username-icon.png';
import passwordImage from '../images/password-icon.png';
import ShowPassImage from '../images/showpass-icon.png';
import HidePassImage from '../images/hidepass-icon.png';

class Form extends Component<{}>{

  constructor(props){
    super(props)
    this.state = {
      showPass: true,
      press: false,
      email: "",
      password: "",
      isActive: false
    }
  };


  showPass = () => {
    if (this.state.press == false) {
      this.setState({showPass: false, press: true})
    } else {
      this.setState({showPass: true, press: false})
    }
  };

  loginFunction = () =>{
    if (this.state.email == "abc" && this.state.password == "123" && this.state.isActive == true) {
      this.props.navigation.navigate('Home')
    } else {
      var error = "";
      if(this.state.email == "" || this.state.password == ""){
        error = "Email or Password is not empty !"
      } else if (this.state.isActive == false) {
          error = "Your account is not activated, please check email to activated account !"
      } else {
        error = "Email or password incorrect !"
      }
      
      Alert.alert(
      'Note',
      error,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
        { cancelable: false }
      ) 
    }   
  };


  render(){
    return(
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={userNameImage}/>
          <TextInput style={styles.inputBox}
              placeholder="Username or Email"
              keyboardType="email-address"
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholderTextColor="#ffffff"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={passwordImage}/>
          <TextInput style={styles.inputBox}
              placeholder="Password"
              secureTextEntry={this.state.showPass}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholderTextColor="#ffffff"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
          />

          <TouchableOpacity onPress={this.showPass.bind(this)}>
            <Image style={styles.inputIconShow} source={this.state.press == false ? ShowPassImage : HidePassImage}/>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.button} onPress={this.loginFunction}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}

export default withNavigation(Form);

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius:30,
    width:300,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
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
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  inputIconShow:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  }
});