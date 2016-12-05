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
    this.edit = this.edit.bind(this);
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
        ],
      newCar: ''
    }
  }

  delete(index) {
    var carlist = this.state.cars;
    delete carlist[index];
    this.setState({cars: carlist});
  }

  saveCar() {
    var carlist = this.state.cars;
    var newCar = this.state.newCar.split(" ");
    carlist.push({mark: newCar[0], model: newCar[1]});
    this.setState({cars: carlist});
  }

  navigate(routeName, data, index) {
      this.props.navigator.push({
        name: routeName,
        data: data,
        callback: this.edit,
        carIndex: index
      });
    }

  edit(carMark, carModel, index) {
    var carlist = this.state.cars;
    carlist[index].mark = carMark;
    carlist[index].model = carModel;
    this.setState({cars: carlist});
  }
  
  redirect(routeName, accessToken){
    this.props.navigator.push({
      name: routeName
    });
  }

  render() {

    const lapsList = this.state.cars.map((data, index) => {
        return (
          <View key={index}>
            <Button onPress={ this.navigate.bind(this, 'editCar', data, index) }>{data.model + ' ' + data.mark}</Button>
            <Button onPress={ this.delete.bind(this, index) }>Delete</Button>
          </View>
        )
      })


    return (
      <View style={styles.container}>
        <TextInput
            style={{width: 150,height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(newCar) => this.setState({newCar})}
            value={this.state.newCar}
        />

        <Button onPress={ this.saveCar.bind(this) }>Save</Button>

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