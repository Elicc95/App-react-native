import React from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";


const HomeScreen = (props) => {
  return <View>
  <Text>Usuario</Text>
  <TextInput
    style= {
        styles.textInput
      }
  />
  <Text>Contraseña</Text>
  <TextInput
  secureTextEntry= {true}
    style= {
        styles.textInput
      }
  />
    <Button
      title= "Entrar"
      onPress= {() => props.navigation.navigate("Alert")}
      
    /> 
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  textInput: {
    borderColor:"black",
    backgroundColor: "white",
    borderWidth: 1}
});

export default HomeScreen;
