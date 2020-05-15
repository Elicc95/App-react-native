import React,{useState} from "react"
import {Text, View, StyleSheet, Button, Modal, TouchableHighlight} from "react-native"
import Carousel from "react-native-carousel-control"
import CarruselComponent from "./CarruselComponent"


const AlertButton = () =>{ 
    const [activar, setActivar] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)
    return (<View style={styles.vistaCentrada}>
    <Modal
        animationType = {"fade"}
        transparent= {false}
        visible = {activar}>
        <View style={styles.vistaCentrada}>
            <View style={styles.vistaModal}>
            <CarruselComponent>
                
            </CarruselComponent>
                <TouchableHighlight style={{...styles.botonAbrir,
                backgroundColor:"pink"}}
                onPress ={() => {setActivar(!activar)}}

                >
                <Text style={styles.estiloTexto}>Cerrar</Text>
                </TouchableHighlight>
            </View>
        </View>
    </Modal>
        <TouchableHighlight style= {styles.botonAbrir}
        title = "Modal"
        onPress = {()=>{setActivar(true)
        }}
        >
        <Text style={styles.estiloTexto}>Alerta</Text>
        </TouchableHighlight>
    </View>)
}
const styles = StyleSheet.create({
    vistaCentrada: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    vistaModal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    botonAbrir: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    estiloTexto: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    textoModal: {
        marginBottom: 15,
        textAlign: "center"
    }
    
})



export default AlertButton 