import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text, Input } from "react-native-elements";


const width_screen = Dimensions.get("screen").width;

import React, {useState} from "react";
import Logo from "./components/logo";

export default function Login({ navigation }) {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const login = () => {
        navigation.reset({
          index: 0,
          routes:[{name:"Ofertas"}]
        })
      }

    const changepassword = () => {
        console.log('eesqueceu')}

  
      return(
        <React.Fragment>
            <Logo />
            <Input 
            value= {email}
            placeholder = "Enter your adress email"
            keyboardType="email-address"
            leftIcon={{ type:'font-awesome', name:'envelope' }}
            onChangeText={(email)=> setEmail(email)}
            />
            <Input 
            value= {password}
            placeholder = "Enter your password"
            leftIcon={{ type:'font-awesome', name:'lock' }}
            secureTextEntry={true}
            onChangeText={(password)=> setPassword(password)}
            />
 
          <TouchableOpacity style = {estilos.button} onPress={()=>login()}>
            <Text style = {estilos.textobotao}>Sign in </Text>
          </TouchableOpacity>
          <Text style = {{marginLeft:(width_screen/3)}} onPress={()=>changepassword()}> 
                Forgot your password 
          </Text>
        </React.Fragment>
      )
  }

  // <TouchableOpacity
  // style={estilos.button}
  // onPress={() => {
  //   ;
  // }}
  
  
  const estilos = StyleSheet.create({
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