import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function PratosItem({ item, onPress}) {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Image source={{ uri: item.fotoDoPrato }} style={styles.ilustracao} />
            <View style={styles.info}>
                <Text style={styles.nome}>{item.nomeDoPrato}</Text><Text style={styles.valor}>{item.valor}</Text>
                <Text style={styles.descricao}>{item.descricaoDoPrato}</Text>
            </View>
        </Pressable>
    );

    const styles = StyleSheet.create({
        card: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            padding: 12,
            borderRadius: 8,
            marginBottom: 10,
        },
        ilustracao: {
            width: 54,
            height: 54,
            borderRadius: 27,
            marginRight: 12,
        },
        info: {
            flex: 1,
        },
        nome: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#1a1a1a",
        },
        valor: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#1a1a1a",
            textAlign: "left",
        },
        descricao: {
            fontSize: 12,
            color: "#222222",
        }
    })
}