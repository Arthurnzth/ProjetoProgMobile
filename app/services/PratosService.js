import AsyncStorage from "@react-native-async-storage/async-storage";
import PratosEntity from "../entities/PratosEntity";


const STORAGE_KEY = "@pratos";

let pratos = [
 new PratosEntity(
  "1",
  "X-tudo",
  29.90,
  "Descrição do X-tudo",
  5,
  "https://i.pravatar.cc/150?img=1"
),
new PratosEntity(
  "2",
  "Hambúrguer Clássico",
  24.90,
  "Pão, carne e queijo",
  4,
  "https://i.pravatar.cc/150?img=2"
),
new PratosEntity(
  "3",
  "Salada Caesar",
  19.90,
  "Alface, frango e molho caesar",
  5,
  "https://i.pravatar.cc/150?img=3"
),
];

export default class PratosService {

  static async findAll() {
    const json = await AsyncStorage.getItem(STORAGE_KEY);

    if (json) {
      const lista = JSON.parse(json);
      pratos = lista.map((item) => PratosEntity.transforme(item));
      return [...pratos];
    }

    // primeira execução
    await this.saveAll(pratos);
    return [...pratos];
  }

  static async findById(id) {
    const lista = await this.findAll();
    return lista.find((item) => item.id === String(id)) ?? null;
  }

  static async save(prato) {
    const lista = await this.findAll();

    const index = lista.findIndex((item) => item.id === prato.id);

    if (index >= 0) {
      lista[index] = prato;
    } else {
      lista.push(prato);
    }

    pratos = lista;

    await this.saveAll(lista);

    return prato;
  }

  static async saveAll(lista) {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
  }

  static async clear() {
    await AsyncStorage.removeItem(STORAGE_KEY);
    pratos = [];
  }
}