import React from "react";
import { Image, StyleSheet, View, Dimensions, FlatList,StatusBar, SafeAreaView, ScrollView  } from "react-native";

import Texto from "./components/texto.js"

import Item from './components/itens.js';

import logo from './assets/logo.jpg';

const width_screen = Dimensions.get('screen').width;



const servico = [
  {
      id:'001',
      tarefa:'Cleaner para casa de 3 quartos',
      descricao:'Descrição',
      onde:' casa',
      quanto: '10 per hour'
  },
  {
      id:'002',
      tarefa:'lavar',
      descricao:'Descrição',
      onde:' casa',
      quanto:  '10 per hour'
  },
  {
      id:'003',
      tarefa:'lavar',
      descricao:'Descrição',
      onde:' casa',
      quanto: '10 per hour'
  },
  {
      id:'004',
      tarefa:'lavar',
      descricao:'Descrição',
      onde:' casa',
      quanto: '10 per hour'
  },
  {
      id:'005',
      tarefa:'lavar',
      descricao:'Descrição',
      onde:' casa',
      quanto: '10 per hour'
  },
];


export default function Ofertas ( ){
  return (
    <SafeAreaView >
    <StatusBar />
      <View style={estilos.inicio}>
        <Image 
          source={logo}
          style = {estilos.logo}
        />
        <Texto style={estilos.textoboasvindas}> Olá, Fulano!</Texto>
      </View>
      <Texto style={estilos.textolista}> Oportunidades </Texto>
      <ScrollView>
        <FlatList 
          data={servico}
          renderItem={({item})=> <Item {...item}/> }
          keyExtractor={item=> item.id}
          />
      </ScrollView>   
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  inicio: {
    flexDirection:'row',
  },
    logo:{
      width:'35%',
      height:'95%', 
      resizeMode: 'contain',
      marginTop:8,
    },
    textoboasvindas:{
        fontSize: 20,
        fontWeight:"bold",
        marginTop:50,
        marginLeft:width_screen-280,
    },
    textolista:{
      fontSize:22,
      fontWeight:"bold",
      marginTop:20,
      marginHorizontal:10,
    },

});
