import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import LoginStack from './src/Router';

export default class App extends Component<{}> {
  render() {
    return (
      <LoginStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a2d9e0',
  }
});
