import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Sobre() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagina sobre quem nós somos</Text>


      <View>
        <Text style={styles.txtSobre}>Atuamos no mercado de carros a mais de 30 anos, sempre ajudando o cliente da melhor forma possivel, nosso aplicativo é o mais completo do mercado de carros.
          Todos os dias buscamos melhorar nosso aplicativo para o usuario ter a melhor experiencia possivel. Entre em contato conosco em caso de Duvidas</Text>
      </View>

      <Text style={styles.contato}>Contatos: </Text>

      <Text style={styles.tel}>Telefone: (16) 2738-3262 </Text>
      <Text style={styles.w}>Whatsapp: (16) 98367-7248</Text>

      <View>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/images/car.png')}
          style={{
            width: 200,
            heigth: 200,
            marginTop: 50,
          }}
          resizeMode="contain"
        />
      </View>


      <Text style={styles.end}>Endereço</Text><Text style={styles.endd}>Avenida Cônego Alberico Volpe N° 649, Bairro: Conjunto Habitacional Dom Constantino Amstalden</Text>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ff0'
  },

  title: {
    fontSize: 25,
    marginTop: 30,
    fontWeight: 'bold'
  },
  txtSobre: {
    fontSize: 17,
    marginTop: 20,
    color: '#3b3dbf',
    textAlign: 'center'
  },
  contato: {
    fontSize: 25,
    marginTop: 30,
    fontWeight: 'bold',
    marginRight: 250
  },
  tel: {
    fontSize: 15,
    marginTop: 20,
    marginRight: 150,
    color: 'blue'
  },
  w: {
    fontSize: 16,
    marginTop: 10,
    marginRight: 130,
    color: 'green'
  },
  end: {
    fontSize: 20,
    marginTop: 100,
    fontWeight: 'bold'
  },
  endd:{
    fontSize: 15
  }
})