import React from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";
import t from 'tcomb-form-native'

const HomeScreen = (props) => {


  return <View style={styles.content}>
  <Text style={{justifyContent: "center"}}>Usuario</Text>
  <TextInput style= { styles.textInput}/>
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
  content:{
    justifyContent:   'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 30
  },
  textInput: {
    borderColor:"black",
    backgroundColor: "white",
    borderWidth: 1}
});

export default HomeScreen;
