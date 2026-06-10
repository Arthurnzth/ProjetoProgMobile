// import AsyncStorage from "@react-native-async-storage/async-storage";

// const CARRINHO_KEY = "@carrinho";

// export default class PedidosService {

//   static async getCarrinho() {
//     const json = await AsyncStorage.getItem(CARRINHO_KEY);
//     if (!json) return new PedidoEntity();
//     return PedidoEntity.fromApi(JSON.parse(json));
//   }

//   static async adicionarItem(prato, quantidade = 1) {
//     const carrinho = await this.getCarrinho();

//     const index = carrinho.itens.findIndex((i) => i.pratoId === String(prato.id));

//     if (index >= 0) {
//       carrinho.itens[index].quantidade += quantidade;
//     } else {
//       carrinho.itens.push(new ItemPedidoEntity(prato, quantidade));
//     }

//     await this._salvarCarrinho(carrinho);
//     return carrinho;
//   }

//   static async removerItem(pratoId) {
//     const carrinho = await this.getCarrinho();
//     carrinho.itens = carrinho.itens.filter((i) => i.pratoId !== String(pratoId));
//     await this._salvarCarrinho(carrinho);
//     return carrinho;
//   }

//   static async _salvarCarrinho(carrinho) {
//     await AsyncStorage.setItem(CARRINHO_KEY, JSON.stringify(carrinho));
//   }

// }
