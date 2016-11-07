'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View,
  Linking,
  TextInput
} from 'react-native';

import Button from 'react-native-button';

class Root extends Component {

  constructor() {
      super();
      this.state = {
          text: ''
      }
    }

    handleButtonPress() {
      Linking.openURL('mailto:someemail@gmail.com?subject=Lab3&body=' + this.state.text);
    }

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>

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

        <TouchableHighlight onPress={ this.navigate.bind(this, 'carlist') } style={styles.button}>
          <Text style={styles.buttonText}>Car List</Text>
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
    paddingTop: 180
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  title: {
    fontSize: 25,
    marginBottom: 15
  }
});


export default Root