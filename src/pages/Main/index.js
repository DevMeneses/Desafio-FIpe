import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';

import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'


import {
  View, Text, StyleSheet,
  TouchableOpacity
} from 'react-native';


export default function Main() {

  const navigation = useNavigation();


  const [marcas, setMarcas] = useState([]);
  const [selectedmarcas, setSelectedMarcas] = useState('') //Selecionou Marca

  const [modelos, setModelos] = useState([]);
  const [selectedmodelos, setSelectedModelos] = useState('') // Selecionou Modelo de Carro

  const [ano, setAno] = useState([]);
  const [selectedano, setSelectedAno] = useState('') // Selecionou Ano

  const [valor, setValor] = useState('');



  // Puxa as Informações de Marca de Carros

  useEffect(() => {
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
      .then(response => response.json())
      .then(
        (marcas) => {
          setMarcas(marcas);
        }, () => {

        }
      )

  }, []);

  // Puxa todos os modelos da marca selecionada

  useEffect(() => {
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedmarcas}/modelos`)
      .then(response => response.json())
      .then(
        (data) => {
          setModelos(data.modelos);
        }, () => {

        }
      )
  }, [selectedmarcas]);

  // Trazendo todos os anos de fabricação do veiculo

  useEffect(() => {
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedmarcas}/modelos/${selectedmodelos}/anos`)
      .then(response => response.json())
      .then(
        (ano) => {
          setAno(ano);
        }, () => {
        }
      )
  }, [selectedmodelos]);


  async function obterdados() {
    await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedmarcas}/modelos/${selectedmodelos}/anos/${selectedano}`)
      .then(response => response.json())
      .then(
        (dados) => {
          setValor(dados)
          dados.Valor;
        }, () => {
        }
      )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Consulte agora</Text>
        <View style={styles.inputContainer}>

          {/*Primeiro Picker ( Escolha uma marca de Carro )*/}

          <Picker style={styles.pickerModelo}
            selectedValue={selectedmarcas}
            onValueChange={(itemValue) => setSelectedMarcas(itemValue)}
          >
            <Picker.Item label="Selecione uma Marca" value="" />

            {

              marcas.map((marcas => {
                return <Picker.Item key={marcas.codigo} label={marcas.nome} value={marcas.codigo} />
              }))
            }

          </Picker>

        </View>
        <View style={styles.inputContainer}>

          {/*Segundo Picker ( Escolha um Modelo de Carro )*/}

          <Picker style={styles.pickerModelo}
            selectedValue={selectedmodelos}
            onValueChange={(itemValue) => setSelectedModelos(itemValue)}
          >
            <Picker.Item label="Selecione um Modelo" value="" />

            {
              modelos.map((modelos => {
                return <Picker.Item key={modelos.codigo} label={modelos.nome} value={modelos.codigo} />
              }))

            }
          </Picker>

        </View>
        <View style={styles.inputContainer}>


          {/*Terceiro Picker ( Escolha um Ano de Fabricação )*/}

          <Picker style={styles.pickerModelo}
            selectedValue={selectedano}
            onValueChange={(itemValue) => setSelectedAno(itemValue)}

          >
            <Picker.Item label='Selecione o Ano de fabricação' value="" />

            {
              ano.map((ano => {
                return <Picker.Item key={ano.codigo} label={ano.nome} value={ano.codigo} />
              }))

            }

          </Picker>

        </View>


        <TouchableOpacity style={styles.button} onPress={obterdados}>
          <Text style={styles.buttonText}>Obter Dados</Text>
        </TouchableOpacity>

        <View style={styles.containerInfo}>

          <Animatable.View delay={600} animation="fadeInUp" style={styles.containerInfo}>
            <Text style={styles.infoDados}>Marca: <Text style={styles.valor}> {valor.Marca} </Text></Text>
            <Text style={styles.infoDados}>Modelo: <Text style={styles.valor}> {valor.Modelo} </Text></Text>
            <Text style={styles.infoDados}>Ano de Fabr: <Text style={styles.valor}> {valor.AnoModelo}</Text></Text>
            <Text style={styles.infoDados}>Valor: <Text style={styles.valor}> {valor.Valor} </Text></Text>
            <Text style={styles.infoDados}>Tipo de Combustivel: <Text style={styles.valor}> {valor.Combustivel} </Text></Text>
            <Text style={styles.infoDados}>Codigo Fipe: <Text style={styles.valor}> {valor.CodigoFipe} </Text></Text>
            <Text style={styles.infoDados}>Mês de Referencia: <Text style={styles.valor}> {valor.MesReferencia} </Text></Text>
          </Animatable.View>
        </View>

            
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0',
    flex: 1,
    paddingTop: 5,
  },
  header: {
    paddingHorizontal: 36,
    paddingBottom: 29,
  },
  title: {
    color: '#080D2D',
    fontSize: 33,
    fontWeight: 'bold',
    paddingBottom: 31,
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 21,
    borderRadius: 11,
    margin: 6,
  },
  input: {
    paddingTop: 22,
    paddingBottom: 17,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    height: 40,
    flex: 1,
  },
  pickerModelo: {
    width: 300,
    color: '#000'

  },
  button: {
    backgroundColor: '#3b3dbf',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    bottom: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 69
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
    margin: 6
  },
  infoDados: {
    fontSize: 17,
    marginTop: 15,
    fontWeight: 'bold',
  },
  valor: {
    color: '#ff0000'
  },
  containerInfo: {
    backgroundColor: '#fff',
    paddingStart: '7%',
    paddingEnd: '10%',
    borderRadius: 10,
  },
})

