import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'; 


export default function Home() {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Ionicons name="exit-outline" size={28} color="black" style={{marginTop: 30, textAlign: 'right'}} onPress={ () => navigation.navigate('Login')} />
      
      <View style={styles.containerLogo}>
        <Animatable.Image
        animation="flipInY"
        source={require('../../assets/images/car.png')}
        style={{width: 200,
        heigth: 200,
        borderRadius: 200 / 2}}
        resizeMode="contain"
        />
      </View>


      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Bem Vindo a FIPELOG</Text>
        <Text style={styles.text}>Além da consulta fipe temos uma lista de carros mais desejados:</Text>

        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Lista')}>
          <Text style={styles.buttonText}>Acessar Lista</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#ff0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#a1a1a1',
    fontWeight: 'bold'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#000',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
});