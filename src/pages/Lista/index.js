import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default class Lista extends Component {

  constructor(props){
    super(props);
    this.state = {
      carros: [
        {nome: 'Fiat Strada'},
        {nome: 'Fiat Toro'},
        {nome: 'Hyundai HB20'},
        {nome: 'Nissan Kicks'},
        {nome: 'Nissan Versa'},
        {nome: 'Fiat Argo'},
        {nome: 'Cobalt 1.8'},
        {nome: 'Honda Civic'},
        {nome: 'Renault Sandero'},
        {nome: 'Ford EcoSport'},
        {nome: 'Ford Ka'}
      ]
    }
  }

  render(){
  return(
    <View style = { styles.container } >
      <Text style={styles.title}>Lista de carros mais desejados</Text>

      <FlatList 
      data={this.state.carros}
      renderItem={({item}) => 
      <View style={styles.containerCarros}>
        <Text style={styles.titleCarros}>{item.nome}</Text>
      </View>
    }
      />
    </View>
  );
  }
}
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center'
  },
  containerCarros:{
  
    backgroundColor: '#FFF',
    height: 80,
    margin: 10,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleCarros:{
    color: 'BLACK',
    fontSize: 17,
    fontWeight: 'bold'
  }
})