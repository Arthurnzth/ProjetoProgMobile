import React, { useEffect, useState } from "react";
import {View, Text, FlatList, Image, StyleSheet, Modal} from "react-native";
import PratosService from "../services/PratosService";
import { TouchableOpacity } from "react-native";


export default function PratosListView(){
    const [pratos, setPratos] = useState([]);

    const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");
    const [pratoSelecionado, setPratoSelecionado] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        carregarPratos();
    },[]);

    async function carregarPratos() {
        const lista = await PratosService.findAll();

        setPratos(lista);
    }
    
    const pratosFiltrados =
        categoriaSelecionada === "todos"
         ? pratos
        : pratos.filter(
            (prato) => prato.categoria === categoriaSelecionada
        );

    function renderItem({item}) {

        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => {
                    setPratoSelecionado(item);
                    setModalVisible(true);
                }}
            >
                <Image source={item.fotoDoPrato} style={styles.image} />

                <View style={styles.info}>
                    <View style={styles.linhaTitulo}> 
                        <Text style={styles.nome}>{item.nomeDoPrato}</Text>

                        <Text style={styles.rank}>{"⭐".repeat(item.rank)}</Text>
                    </View>

                    <Text style={styles.descricao}>{item.descricaoDoPrato}</Text>

                    <Text style={styles.preco}>
                        {Number(item.valor).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Cardápio</Text>

        <View style={styles.categorias}>
            <TouchableOpacity
                style={styles.botaoCategoria}
                onPress={() => setCategoriaSelecionada("todos")} >
                <Text>Todos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botaoCategoria}
                onPress={() => setCategoriaSelecionada("comida")} >
                <Text>Comidas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botaoCategoria}
                onPress={() => setCategoriaSelecionada("bebida")} >
                <Text>Bebidas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botaoCategoria}
                onPress={() => setCategoriaSelecionada("sobremesa")} >
                <Text>Sobremesas</Text>
            </TouchableOpacity>
        </View>

            <FlatList
                data={pratosFiltrados}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={true} />

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true} >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>

                        {pratoSelecionado && (
                            <>
                                <Image
                                    source={pratoSelecionado.fotoDoPrato}
                                    style={styles.modalImage}
                                />

                                <View style={styles.linhaTitulo}>
                                    <Text style={styles.modalTitulo}>{pratoSelecionado.nomeDoPrato}</Text>

                                    <Text style={styles.rank}>{"⭐".repeat(pratoSelecionado.rank)}</Text>
                                </View>

                                <Text style={styles.modalPreco}>
                                    {Number(pratoSelecionado.valor).toLocaleString(
                                        "pt-BR",
                                        {
                                            style: "currency",
                                            currency: "BRL",
                                        }
                                    )}
                                </Text>

                                <Text style={styles.modalDescricao}>
                                    {pratoSelecionado.descricaoDoPrato}
                                </Text>

                                <Text style={styles.modalPreparo}>
                                    {pratoSelecionado.preparo}
                                </Text>

                                <TouchableOpacity
                                    style={styles.botaoFechar}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.textoBotao}>
                                        Fechar
                                    </Text>
                                </TouchableOpacity>
                            </>
                        )}

                    </View>
                </View>
            </Modal>
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
        padding: 10,
        elevation: 4,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    },
    
    image: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
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

    linhaTitulo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    rank: {
        fontSize: 14,
        color: "#f39c12",
        fontWeight: "bold",
    },
    
    preco: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#27ae60", 
    },

    categorias: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 15,
    },

    botaoCategoria: {
        backgroundColor: "#dbeafe",
        padding: 10,
        borderRadius: 10,
    },

    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },

    modalContent: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
    },

    modalImage: {
        width: "100%",
        height: 220,
        borderRadius: 15,
        marginBottom: 15,
    },

    modalTitulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },

    modalPreco: {
        fontSize: 20,
        color: "#27ae60",
        fontWeight: "bold",
        marginBottom: 10,
    },

    modalDescricao: {
        fontSize: 15,
        color: "#666",
        marginBottom: 10,
    },

    modalPreparo: {
        fontSize: 14,
        color: "#333",
        lineHeight: 22,
    },

    botaoFechar: {
        backgroundColor: "#2563eb",
        padding: 12,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
    },

    textoBotao: {
        color: "#fff",
        fontWeight: "bold",
    },
});