import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import Lista from '../pages/Lista';


import CustomDrawer from '../components/CustomDrawer';

import Main from '../pages/Main';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,

        drawerActiveBackgroundColor: '#3b3dbf',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: '#000',

        drawerStyle: {
          backgroundColor: '#ff0'
        }


      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          title: 'Inicio'
        }}
      />

      <Drawer.Screen
        name="Sobre"
        component={Sobre}
      />

      <Drawer.Screen
        name="Contato"
        component={Contato}
      />
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Consultar Veiculos',
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="Lista"
        component={Lista}
        options={{
          title: 'Carros Desejados',
          headerShown: false
        }}
      />


    </Drawer.Navigator>


  )
}