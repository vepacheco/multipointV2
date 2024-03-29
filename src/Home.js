import { Dimensions, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";

import React from "react";

import Logo from "./components/logo";
import Texto from "./components/texto";
// import face from "./assets/face.jpg";
// import insta from "./assets/insta.jpg";
// import twitter from "./assets/twitter.jpg";
// import wpp from "./assets/wpp.jpg";

const width_screen = Dimensions.get("screen").width;

export default function TelaInicial({ navigation }) {

  const login = () => {
    navigation.reset({
      index: 0,
      routes:[{name:"Login"}]
    })
  }

  const cadastro = () => {
    navigation.reset({
      index: 0,
      routes:[{name:"Form"}]
    })
  }


  return (
    <SafeAreaView>
      <StatusBar />
      <React.Fragment>
        <Logo />
        <Texto style={estilos.textoboasvindas}>
          Faça parte da nossa equipe
        </Texto>
        <TouchableOpacity style={estilos.button} onPress={() => cadastro()}>
          <Texto style={estilos.textobotao}> Cadastre-se </Texto>
        </TouchableOpacity>

        <Texto style={estilos.textoboasvindas}> Já faz parte?</Texto>
        
        <TouchableOpacity style={estilos.button} onPress={() => login()}>
          <Texto style={estilos.textobotao}> Login </Texto>
        </TouchableOpacity>

        {/* <View style={estilos.rodape}>
          <Image source={insta} style={estilos.rodape1} />
          <Image source={face} style={estilos.rodape1} />
          <Image source={wpp} style={estilos.rodape1} />
          <Image source={twitter} style={estilos.rodape1} />
        </View> */}
      </React.Fragment>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  textoboasvindas: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
  },
  button: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "#fea501",
    marginTop: 20,
    marginLeft: width_screen / 5,
  },
  textobotao: {
    fontSize: 15,
    fontWeight: "bold",
  },
  visite: {
    width: "50%",
    fontSize: 15,
    fontWeight: "bold",
  },
  rodape: {
    flexDirection: "row",
  },
  rodape1: {
    width: "25%",
    height: "25%",
    resizeMode: "contain",
    marginTop: 250,
    backgroundColor: "white",
  },
});
