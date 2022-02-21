import React, { Fragment, useState } from "react";
import { Text,View,StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import Texto from './texto.js';
const width_screen = Dimensions.get('screen').width;

export default function Item({tarefa, descricao, onde, quanto}){
    const [expandir, setExpandir]= useState(false);
    const inverterExpandir = ( ) => {setExpandir(!expandir);}
    return (
        <Fragment>
            <TouchableOpacity onPress={inverterExpandir}>
                <Text style={estilos.tarefa} >{tarefa}</Text>
                <Texto style={estilos.descricao}>{descricao}</Texto>
                <Texto style={estilos.local}>{onde}</Texto>
                <Texto style={estilos.valor}>{'\u20AC'} {quanto}</Texto>
            </TouchableOpacity>
            {expandir && 
            <View>
                <TouchableOpacity style = {estilos.button} onPress={()=>{}}>
                <Texto style = {estilos.textobotao}> Candidate-se </Texto>
                </TouchableOpacity>
            </View>}
            <View style={estilos.divisor} /> 
        </Fragment>
     );
}

const estilos =  StyleSheet.create({
      tarefa:{
        fontSize:18,
        fontWeight:"bold",
        color:'#fea501',
        marginTop:20,
        marginHorizontal:10,
      },
      descricao:{
        fontSize:16,
        marginHorizontal:10,
    },
    local:{
        fontSize:16,
        marginHorizontal:10,
    },
    valor:{
        fontSize:16,
        marginHorizontal:10,
        fontWeight:"bold",
    },
    button:{
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: '#fea501',
        marginTop:20, 
        marginLeft:width_screen-150,
      },
      textobotao:{
        fontSize: 15,
        fontWeight:'bold',
      },
      divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#010066',
      }, 
  });

  

