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
    <Button color= "purple"
      title= "Entrar"
      onPress= {() => props.navigation.navigate("Alert")}
      
    /> 
  </View>
};

const styles = StyleSheet.create({
  content:{
    justifyContent:   'center',
    marginTop: 50,
    padding: 40,
  
  },
  text: {
    fontSize: 30
  },

  textInput: {
    borderColor:"gray",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius:4,
    marginBottom:10,
    elevation:5, },
});

export default HomeScreen;
