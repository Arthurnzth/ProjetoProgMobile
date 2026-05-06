import React, { useEffect, useState } from "react";
import {View, Text, FlatList, Image, StyleSheet } from "react-native";
import PratosService from "../services/PratosService";

export default function PratosListView(){
    const [pratos, setPratos] = useState([]);

    useEffect(() => {
        carregarPratos();
    },[]);

    async function carregarPratos(){
        const lista = await PratosService.findAll();
        setPratos(lista);
    }

    function renderItem({item}) {
        return (
            <View style={styles.card}>
                <Image source={{ uri: item.fotoDoPrato }} style={styles.image} />

                <View style={styles.info}>
                    <Text style={styles.nome}>{item.nomeDoPrato}</Text>

                    <Text style={styles.descricao}>
                    {item.descricaoDoPrato}
                    </Text>

                    <Text style={styles.preco}>
                        {Number(item.valor).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </Text>
                </View>
            </View>
        );
    }

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Cardápio</Text>

            <FlatList
                data={pratos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#eef2f7", 
    },

    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#1a1a1a",
    },
    
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 15,
        marginBottom: 15,
        overflow: "hidden",
        elevation: 4,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.8)",
    },
    
    image: {
        width: "100%",
        height: 160,
    },
    
    info: {
        padding: 10,
    },
    
    nome: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1a1a1a",
    },
    
    descricao: {
        fontSize: 13,
        color: "#777",
        marginVertical: 6,
    },
    
    preco: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#27ae60", 
    },
});