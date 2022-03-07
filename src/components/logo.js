import { Dimensions, Image, StyleSheet } from "react-native";

import React from "react";
import logo from "../assets/logo.jpg"

const width_screen = Dimensions.get("screen").width;

export default function Logo() {
  return <Image source={logo} style={estilos.logo} />;
}

const estilos = StyleSheet.create({
  logo: {
    width: null,
    height: (351 / 700) * width_screen,
    resizeMode: "contain",
    marginTop: 0,
  },
});
