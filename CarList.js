'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View
} from 'react-native';

import Button from 'react-native-button';

class CarList extends Component {
  constructor(){
    super();
    this.state = {
        cars: [
          {
            mark: 'Audi',
            model: 'A4'
          },
          {
            mark: 'Mazda',
            model: '2'
          },
          {
            mark: 'Skoda',
            model: 'Octavia'
          }
        ]
    }
  }

  navigate(routeName) {
      this.props.navigator.push({
        name: routeName
      });
    }

  redirect(routeName, accessToken){
    this.props.navigator.push({
      name: routeName
    });
  }

  render() {

    const lapsList = this.state.cars.map((data, index) => {
        return (
          <View key={index}><Button onPress={ this.navigate.bind(this, 'carlist') }>{data.model + ' ' + data.mark}</Button></View>
        )
      })


    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Car list:
        </Text>
        {lapsList}
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
  heading: {
    fontSize: 30,
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  success: {
    color: 'green',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

export default CarList