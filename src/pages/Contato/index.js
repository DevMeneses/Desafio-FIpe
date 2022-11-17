import React from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FIPELOG</Text>
      <View>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/images/Logo.home.png')}
          style={{
            width: 500,
            heigth: 500,
            marginTop: 20
          }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.ema}>Insira seu e-mail abaixo para entrarmos em contato.</Text>

      <View style={styles.input}>
        <TextInput placeholder='Digite seu email'/>

        
      </View>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar E-mail</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ff0'
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 30
  },
  ema: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
input:{
  borderBottomWidth: 2,
    height: 60,
    marginBottom: 12,
    fontSize: 19,
    marginTop: 50
},
button: {
  backgroundColor: '#FFF',
  borderRadius: 50,
  paddingVertical: 8,
  width: '70%',
  bottom: '5%',
  height: '10%',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 50,
}
})