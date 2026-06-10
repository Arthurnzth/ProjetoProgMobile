import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function PratosItem({ item, onPress, onRemove }) {
    const precoFormatado = Number(item.valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Image source={item.fotoDoPrato} style={styles.image} />

            {onRemove && (
                <Pressable
                    style={styles.botaoRemover}
                    onPress={onRemove}
                    hitSlop={10}
                >
                    <Ionicons name="trash" size={18} color="#fff" />
                </Pressable>
            )}

            <View style={styles.info}>
                <Text style={styles.nome}>{item.nomeDoPrato}</Text>

                <Text style={styles.descricao} numberOfLines={2}>
                    {item.descricaoDoPrato}
                </Text>

                <Text style={styles.preco}>{precoFormatado}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
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
    botaoRemover: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "rgba(231, 76, 60, 0.9)",
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
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
