import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaInicial from "./Home";
import Form from "./Form";
import Login from "./Login";
import Ofertas from "./Ofertas";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tela Inicial"
          component={TelaInicial}
        />
        <Stack.Screen 
          name="Form" 
          component={Form} 
        />
        <Stack.Screen 
          name="Login"
          component={Login}
        />
        <Stack.Screen 
          name="Ofertas"
          component={Ofertas}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
