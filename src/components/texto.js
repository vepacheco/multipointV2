import { StyleSheet, Text } from "react-native";

import React from "react";

export default function Texto({ children, style }) {
  return <Text style={[style, estilo.texto]}>{children}</Text>;
}

const estilo = StyleSheet.create({
  texto: {
    color: "#010066",
  },
});
