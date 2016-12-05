'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View,
  BackAndroid
} from 'react-native';

import Button from 'react-native-button';
import { Pie } from 'react-native-pathjs-charts'

class EditCar extends Component {

  constructor(props) {
    super(props);
    this.state = {
        carModel: props.car.model,
        carMark: props.car.mark
    }
  }

  navigate(routeName) {
      this.props.navigator.push({
        name: routeName
      });
    }

  edit() {
    this.props.callback(this.state.carMark, this.state.carModel, this.props.carIndex);
    this.props.navigator.pop();
  }

  render() {

    var sampleData = {
        pie: {
            data: [{
                "name": "Diesel",
                "population": 1962903
            }, {
                "name": "Petrol",
                "population": 2805387
            }],
            options: {
                margin: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                width: 300,
                height: 300,
                color: '#2980B9',
                r: 75,
                R: 150,
                legendPosition: 'topLeft',
                animate: {
                    type: 'oneByOne',
                    duration: 200,
                    fillTransition: 3
                },
                label: {
                    fontFamily: 'Arial',
                    fontSize: 14,
                    fontWeight: true,
                    color: '#ECF0F1'
                }
            }
        }
    };
    return (
      <View style={styles.container}>
        <TextInput
          style={{width: 150,height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({carModel: text})}
          value={this.state.carModel}
        />
        <TextInput
          style={{width: 150,height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({carMark: text})}
          value={this.state.carMark}
        />

        <Button onPress={ this.edit.bind(this) }>Save</Button>

          <Pie
              data={sampleData.pie.data}
              options={sampleData.pie.options}
              accessorKey="population" />
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

export default EditCar