import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import PratosEntity from "../entities/PratosEntity";
import PratosService from "../services/PratosService";

export default function CadastroPratoView() {
    const router = useRouter();

    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [rank, setRank] = useState("");
    const [foto, setFoto] = useState("");
    const [salvando, setSalvando] = useState(false);

    async function salvar() {
        if (!nome.trim()) {
            Alert.alert("Atenção", "Informe o nome do prato.");
            return;
        }

        const valorNumerico = Number(String(valor).replace(",", "."));
        if (Number.isNaN(valorNumerico) || valorNumerico <= 0) {
            Alert.alert("Atenção", "Informe um valor válido (ex: 29,90).");
            return;
        }

        try {
            setSalvando(true);

            const novoPrato = new PratosEntity(
                null, // id gerado automaticamente pela entidade
                nome.trim(),
                valorNumerico,
                descricao.trim(),
                Number(rank) || 0,
                foto.trim() || "https://i.pravatar.cc/150"
            );

            await PratosService.save(novoPrato);
            router.back();
        } catch {
            Alert.alert("Erro", "Não foi possível salvar o prato.");
        } finally {
            setSalvando(false);
        }
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
        >
            <TextInput
                label="Nome do prato"
                value={nome}
                onChangeText={setNome}
                mode="outlined"
                style={styles.input}
            />

            <TextInput
                label="Valor (R$)"
                value={valor}
                onChangeText={setValor}
                keyboardType="decimal-pad"
                mode="outlined"
                style={styles.input}
            />

            <TextInput
                label="Descrição"
                value={descricao}
                onChangeText={setDescricao}
                mode="outlined"
                multiline
                numberOfLines={3}
                style={styles.input}
            />

            <TextInput
                label="Avaliação (0 a 5)"
                value={rank}
                onChangeText={setRank}
                keyboardType="number-pad"
                mode="outlined"
                style={styles.input}
            />

            <TextInput
                label="URL da foto"
                value={foto}
                onChangeText={setFoto}
                mode="outlined"
                autoCapitalize="none"
                style={styles.input}
            />

            <Button
                mode="contained"
                onPress={salvar}
                loading={salvando}
                disabled={salvando}
                style={styles.botao}
            >
                Salvar prato
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eef2f7",
    },
    content: {
        padding: 16,
    },
    input: {
        marginBottom: 12,
        backgroundColor: "#ffffff",
    },
    botao: {
        marginTop: 8,
        paddingVertical: 4,
    },
});
