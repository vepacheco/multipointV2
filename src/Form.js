import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";

import React from "react";
import Texto from "./components/texto"
import logo from './assets/logo.jpg';

const width_screen = Dimensions.get("screen").width;

export default function Form() {
  const[name, setName] = React.useState('');
  const[adress, setAdress] = React.useState('');
  const[email, setEmail] = React.useState('');
  const[phone, setPhone] = React.useState('');
  const[password, setPassword] = React.useState('');
  const[bank, setBankName] = React.useState('');
  const[IBAN, setIBAN] = React.useState('');
  const[BIC, setBIC] = React.useState('');

    return(
      <React.Fragment>
        <Image
          source={logo}
          style = {[estilos.logo,{marginTop:10}]}
        />

        <ScrollView style={{margin:7}}> 
        <Texto style={{marginTop:'10%'}}>Personal Informations:</Texto>
          <TextInput
          value= {name}
          placeholder = "Enter your name"
          onChangeText={(name)=> setName(name)}
          style = {estilos.box}
          />
          <TextInput 
          value= {adress}
          placeholder = "Enter your adress"
          onChangeText={(adress)=> setAdress(adress)}
          style = {estilos.box}
          />
          <TextInput 
          value= {email}
          placeholder = "Enter your adress email"
          onChangeText={(email)=> setEmail(email)}
          style = {estilos.box}
          />
          <TextInput 
          value= {phone}
          placeholder = "Enter your phone"
          onChangeText={(phone)=> setPhone(phone)}
          style = {estilos.box}
          keyboardType = 'numeric'
          />
          <TextInput 
          value= {password}
          placeholder = "Enter your password"
          secureTextEntry={true}
          onChangeText={(password)=> setPassword(password)}
          style = {estilos.box}
          />
        
          <Texto style={{marginTop:'10%'}}> Bank details:</Texto>
          <TextInput
          value= {bank}
          placeholder = "Bank name"
          onChangeText={(bank)=> setBankName(bank)}
          style = {estilos.box}
          />
          <TextInput 
          value= {IBAN}
          placeholder = "Enter your IBAN"
          onChangeText={(IBAN)=> setIBAN(IBAN)}
          style = {estilos.box}
          keyboardType = 'numeric'
          />
          <TextInput 
          value= {BIC}
          placeholder = "Enter your BIC"
          onChangeText={(BIC)=> setBIC(BIC)}
          style = {estilos.box}
          keyboardType = 'numeric'
          />
        </ScrollView>

        <TouchableOpacity style = {estilos.button} onPress={()=>{}}>
          <Text style = {estilos.textobotao}> Send </Text>
        </TouchableOpacity>
      </React.Fragment>
    )
}


const estilos = StyleSheet.create({
    logo:{
      borderWidth:4,
      borderColor:'#fea501',
      width:null,
      height:'25%', 
      resizeMode: 'contain',
      marginTop:20,
    },
    box:{
      borderWidth:2,
      borderColor:"#fea501",
      marginHorizontal:25,
      marginTop:20,
    },
    button:{
      width:'60%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 5,
      borderRadius: 12,
      elevation: 3,
      backgroundColor: '#fea501',
      marginTop:20,
      marginLeft:width_screen/5,
    },
    textobotao:{
      fontSize: 15,
      fontWeight:'bold',

    }
});