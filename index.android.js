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
  Linking,
  Navigator
} from 'react-native';
import Button from 'react-native-button';

import CarList from './CarList';
import Root from './root';

export default class mobileLab extends Component {

  renderScene(route, navigator) {
      console.log(route);
      if(route.name == 'root') {
        return <Root navigator={navigator} />
      }
      if(route.name == 'carlist') {
        return <CarList navigator={navigator} />
      }
    }

  render() {
      return (
        <View style={styles.container}>
          <Navigator
            initialRoute={{name: 'root'}}
            renderScene={this.renderScene.bind(this)}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('mobileLab', () => mobileLab);
