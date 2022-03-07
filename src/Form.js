import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { Input, CheckBox } from "react-native-elements";

import React, {useState} from "react";
import Texto from "./components/texto"
import logo from './assets/logo.jpg';

const width_screen = Dimensions.get("screen").width;

export default function Form() {
  const[firstName, setfirstName] = useState('');
  const[lastName, setlastName] = useState('');
  const[adress, setAdress] = useState('');
  const[city, setCity] = useState('');
  const[postcode, setPostcode] = useState('');
  const[state, setState] = useState('');
  const[country, setCountry] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[password, setPassword] = useState('');
  const[bank, setBankName] = useState('');
  const[IBAN, setIBAN] = useState('');
  const[BIC, setBIC] = useState('');
  const[isSelected, setIsSelected] = useState(false)

    return(
      <React.Fragment>
        <Image
          source={logo}
          style = {[estilos.logo,{marginTop:10}]}
        />

        <ScrollView style={{margin:7}}> 
        <Texto style={{marginTop:'10%'}}>Personal Informations:</Texto>
          <Input
          value= {firstName}
          placeholder = "First name"
          onChangeText={(firstName)=> setfirstName(firstName)}
          />
          <Input
          value= {lastName}
          placeholder = "Last name"
          onChangeText={(lastName)=> setlastName(lastName)}
          />
          <Input 
          value= {adress}
          placeholder = "Adress"
          onChangeText={(adress)=> setAdress(adress)}
          />
          <Input 
          value= {city}
          placeholder = "City"
          onChangeText={(city)=> setCity(city)}
          />
          <Input 
          value= {postcode}
          placeholder = "Postcode zip"
          onChangeText={(postcode)=> setPostcode(postcode)}
          />
          <Input 
          value= {state}
          placeholder = "State / County"
          onChangeText={(state)=> setState(state)}
          />
          <Input 
          value= {country}
          placeholder = "Country"
          onChangeText={(country)=> setCountry(country)}
          />

          <Input 
          value= {email}
          placeholder = "Adress email"
          keyboardType="email-address"
          onChangeText={(email)=> setEmail(email)}
          />
          <Input 
          value= {phone}
          placeholder = "Phone number"
          onChangeText={(phone)=> setPhone(phone)}
          keyboardType = 'numeric'
          />
          <Input 
          value= {password}
          placeholder = "Create a password"
          secureTextEntry={true}
          onChangeText={(password)=> setPassword(password)}
          />
        
          <Texto style={{marginTop:'10%'}}> Bank details:</Texto>
          <Input
          value= {bank}
          placeholder = "Bank name"
          onChangeText={(bank)=> setBankName(bank)}
           />
          <Input 
          value= {IBAN}
          placeholder = "Enter your IBAN"
          onChangeText={(IBAN)=> setIBAN(IBAN)}
          keyboardType = 'numeric'
          />
          <Input 
          value= {BIC}
          placeholder = "Enter your BIC"
          onChangeText={(BIC)=> setBIC(BIC)}
          keyboardType = 'numeric'
          />
        </ScrollView>

        <CheckBox 
          title ='I would like to do the Manual Handling Training.'
          checkedIcon = 'check'
          uncheckedIcon = 'square-o'
          checkedColor="green"
          uncheckedColor='#fea501'
          checked = {isSelected}
          onPress = {()=> setIsSelected(!isSelected)}
        />


        <TouchableOpacity style = {estilos.button} onPress={()=>{}}>
          <Text style = {estilos.textobotao}> Send </Text>
        </TouchableOpacity>
      </React.Fragment>
    )
}


const estilos = StyleSheet.create({
    logo:{
      width:null,
      height:'25%', 
      resizeMode: 'contain',
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