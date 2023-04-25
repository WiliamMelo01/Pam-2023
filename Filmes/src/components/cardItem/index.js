import React1 from "react";
import {Image, Text, TouchableOpacity} from 'react-native'
import styles from "./style";


export default function CardItem({nome,nota,imagem}){
    return(
    <TouchableOpacity style={styles.containerFilmes}>
        <Image source = {require (`../../img/${imagem}`)} style={styles.imagemFilmes}/>
        <Text style={styles.tituloFilmes}>{nome}</Text>
        <Text  style={styles.notaFilme}> {nota}</Text>
    </TouchableOpacity>


    );


}