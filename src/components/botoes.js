import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Botao({ children, style }){
    return (
        <Text style={[style, estilo.texto]}>{ children }</Text>
    );    
}

const estilo = StyleSheet.create({
    texto:{
        color:'#010066',
    },
})