import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} 
from 'react-native';

export default class Logo extends Component<{}>{
	render(){
		return(
			<View style={styles.container}>
				<Image
          	style={{width: 100, height: 100}}
          	source={require('../images/login-logo.png')}
        />
        <Text style={styles.logoText}>Welcome login BarcodeScanner </Text>
      </View>
		)
	}
} 

const styles = StyleSheet.create({
  container : {
  	flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText : {
  	fontSize: 18,
  	color: '#ffffff',
  	marginVertical: 15,
    fontWeight: 'bold'
  }
});