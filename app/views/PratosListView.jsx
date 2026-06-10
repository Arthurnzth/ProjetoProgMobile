import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { Alert, FlatList, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PratosItem from "../components/PratosItem";
import PratosService from "../services/PratosService";


export default function PratosListView() {
    const [pratos, setPratos] = useState([]);
    const router = useRouter();

    const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");
    const [pratoSelecionado, setPratoSelecionado] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    // Recarrega sempre que a tela volta ao foco (ex: após cadastrar um prato)
    useFocusEffect(
        useCallback(() => {
            carregarPratos();
        }, [])
    );

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

    function confirmarRemocao(prato) {
        Alert.alert(
            "Remover prato",
            `Deseja remover "${prato.nomeDoPrato}"?`,
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Remover",
                    style: "destructive",
                    onPress: async () => {
                        const lista = await PratosService.remove(prato.id);
                        setPratos(lista);
                    },
                },
            ]
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Cardápio</Text>

                <Pressable
                    style={styles.botaoAdicionar}
                    onPress={() => router.push("/cadastro")}
                    hitSlop={10}
                >
                    <Ionicons name="add" size={26} color="#fff" />
                </Pressable>
            </View>

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
                renderItem={({ item }) => (
                    <PratosItem
                        item={item}
                        onPress={() => {
                            setPratoSelecionado(item);
                            setModalVisible(true);
                        }}
                        onRemove={() => confirmarRemocao(item)}
                    />
                )}
                showsVerticalScrollIndicator={true}
                ListEmptyComponent={
                    <Text style={styles.vazio}>Nenhum prato cadastrado.</Text>
                }
            />

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#eef2f7",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1a1a1a",
    },

    botaoAdicionar: {
        backgroundColor: "#27ae60",
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: "center",
        justifyContent: "center",
        elevation: 3,
    },

    vazio: {
        textAlign: "center",
        marginTop: 40,
        fontSize: 15,
        color: "#777",
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
