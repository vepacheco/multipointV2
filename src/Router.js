import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "./Home";
import Form from "./Form";
import Ofertas from "./Ofertas";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tela Inicial"
          component={TelaInicial}
        />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Ofertas" component={Ofertas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
