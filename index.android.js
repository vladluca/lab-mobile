/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Linking
} from 'react-native';
import Button from 'react-native-button';

export default class mobileLab extends Component {
  constructor() {
    super();
    this.state = {
        text: ''
    }
  }

  handleButtonPress() {
    Linking.openURL('mailto:someemail@gmail.com?subject=Lab3&body=' + this.state.text);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{width: 150,height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={() => this.handleButtonPress()}>
            Press Me!
        </Button>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mobileLab', () => mobileLab);
