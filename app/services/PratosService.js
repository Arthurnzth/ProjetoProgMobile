import PratosEntity from "../entities/PratosEntity";
import {
    agua, aneisDeCebolas, batataBaconCheddar, batata, bolinhaQueijo, brownie, budweiser, churros, corona, duploComBatata, frango, hamburguerBacon, hamburguerCarne, hamburguerFrango, heineken, hotDog, pastelCarne, pastelPizza, pastelQueijo, refrigerante, refrigerante2L, spaten, sucoAbacaxi, sucoLaranja, sucoMaracuja
} from "../utils/imagens";
import { storageGet, storageSave, storageRemove } from "../../storage";


const STORAGE_KEY = "@pratos_v3";

let pratos = [
 new PratosEntity(
    "1",
    "Batata Frita",
    19.90,
    "Porção de batatas fritas crocantes e douradas.",
    "Batatas selecionadas cortadas em palitos, fritas até atingirem uma textura crocante por fora e macia por dentro. Finalizadas com uma leve camada de sal e servidas quentinhas.",
    5,
    batata,
    "comida"
  ),

  new PratosEntity(
    "2",
    "Batata com Bacon e Cheddar",
    29.90,
    "Porção de batatas cobertas com cheddar e bacon.",
    "Batatas fritas crocantes cobertas com molho cheddar cremoso e finalizadas com pedaços generosos de bacon dourado e crocante.",
    5,
    batataBaconCheddar,
    "comida"
  ),

  new PratosEntity(
    "3",
    "Anéis de Cebola",
    22.90,
    "Porção de anéis de cebola empanados.",
    "Anéis de cebola selecionados, envolvidos em uma camada especial de empanamento e fritos até ficarem dourados e crocantes.",
    4,
    aneisDeCebolas,
    "comida"
  ),

  new PratosEntity(
    "4",
    "Bolinha de Alho-Poró",
    24.90,
    "Porção de bolinhas recheadas com alho-poró.",
    "Massa leve e crocante recheada com alho-poró refogado e temperado com ervas especiais.",
    5,
    bolinhaQueijo,
    "comida"
  ),

  new PratosEntity(
    "5",
    "Frango Empanado",
    32.90,
    "Porção de frango empanado com molho da casa.",
    "Tiras de peito de frango temperadas com ervas e especiarias, empanadas em farinha especial e fritas até ficarem douradas e crocantes. Acompanha molho especial da casa.",
    5,
    frango,
    "comida"
  ),

  new PratosEntity(
    "6",
    "Pastel de Carne",
    9.90,
    "Pastel recheado com carne moída temperada.",
    "Massa crocante recheada com carne moída refogada com cebola, alho e temperos especiais.",
    5,
    pastelCarne,
    "comida"
  ),

  new PratosEntity(
    "7",
    "Pastel de Queijo",
    9.90,
    "Pastel recheado com queijo derretido.",
    "Massa leve e crocante recheada com queijo muçarela selecionado.",
    5,
    pastelQueijo,
    "comida"
  ),

  new PratosEntity(
    "9",
    "Pastel de Pizza",
    9.90,
    "Pastel recheado com queijo, tomate e orégano.",
    "Combinação clássica de muçarela, tomate e orégano em uma massa crocante.",
    4,
    pastelPizza,
    "comida"
  ),

  new PratosEntity(
    "10",
    "Hot Dog Especial",
    18.90,
    "Hot dog completo da casa.",
    "Pão macio recheado com salsicha, molho de tomate artesanal, milho, ervilha, batata palha, queijo ralado e maionese especial.",
    5,
    hotDog,
    "comida"
  ),

  new PratosEntity(
    "11",
    "Hambúrguer Clássico",
    29.90,
    "Carne, cheddar, alface, tomate e molho especial.",
    "Pão brioche, hambúrguer bovino grelhado, cheddar derretido, alface fresca, tomate e molho especial da casa.",
    5,
    hamburguerCarne,
    "comida"
  ),

  new PratosEntity(
    "12",
    "Hambúrguer Duplo",
    39.90,
    "Dois hambúrgueres com cheddar e molho barbecue.",
    "Pão brioche, dois hambúrgueres bovinos grelhados, cheddar duplo, alface, tomate e molho barbecue especial.",
    5,
    duploComBatata,
    "comida"
  ),

  new PratosEntity(
    "13",
    "Hambúrguer de Frango Empanado",
    32.90,
    "Frango empanado, cheddar e molho honey mustard.",
    "Filé de frango empanado servido com cheddar, tomate, alface, cebola roxa e molho honey mustard.",
    5,
    hamburguerFrango,
    "comida"
  ),

  new PratosEntity(
    "14",
    "Hambúrguer Bacon",
    35.90,
    "Hambúrguer bovino com bacon crocante.",
    "Hambúrguer bovino grelhado, cheddar cremoso, bacon crocante, alface, tomate e molho especial defumado.",
    5,
    hamburguerBacon,
    "comida"
  ),

  new PratosEntity(
  "15",
  "Heineken 330ml",
  9.90,
  "Cerveja puro malte de sabor equilibrado.",
  "Cerveja premium de origem holandesa, produzida com ingredientes selecionados. Possui sabor refrescante, amargor equilibrado e aroma marcante, sendo uma excelente opção para acompanhar porções e hambúrgueres.",
  5,
  heineken,
  "bebida"
),

new PratosEntity(
  "16",
  "Budweiser 330ml",
  8.90,
  "Cerveja leve e refrescante.",
  "Produzida com malte e arroz, possui sabor suave, coloração clara e excelente refrescância. Ideal para quem aprecia uma cerveja leve e fácil de beber.",
  5,
  budweiser,
  "bebida"
),

new PratosEntity(
  "17",
  "Spaten 330ml",
  8.90,
  "Cerveja puro malte de tradição alemã.",
  "Inspirada na tradição cervejeira alemã, apresenta sabor marcante, corpo equilibrado e notas suaves de malte, proporcionando uma experiência única.",
  5,
  spaten,
  "bebida"
),

new PratosEntity(
  "18",
  "Corona 330ml",
  10.90,
  "Cerveja leve e refrescante.",
  "Tradicional cerveja mexicana conhecida pelo sabor suave e refrescante. Perfeita para momentos descontraídos e para harmonizar com diversos pratos.",
  5,
  corona,
  "bebida"
),

new PratosEntity(
  "19",
  "Suco de Laranja 300ml",
  7.90,
  "Suco natural preparado na hora.",
  "Produzido com laranjas frescas cuidadosamente selecionadas, sem conservantes, garantindo sabor natural e refrescante.",
  5,
  sucoLaranja,
  "bebida"
),

new PratosEntity(
  "20",
  "Suco de Maracujá 300ml",
  7.90,
  "Suco natural de maracujá.",
  "Preparado com polpa natural de maracujá, oferecendo sabor marcante e refrescante, ideal para acompanhar refeições.",
  5,
  sucoMaracuja,
  "bebida"
),

new PratosEntity(
  "21",
  "Suco de Abacaxi com Hortelã 300ml",
  8.90,
  "Suco refrescante de abacaxi com hortelã.",
  "Combinação perfeita entre a doçura do abacaxi e o frescor da hortelã, preparada com ingredientes naturais.",
  5,
  sucoAbacaxi,
  "bebida"
),

new PratosEntity(
  "22",
  "Água Mineral 500ml",
  3.90,
  "Água mineral sem gás.",
  "Água mineral gelada servida em garrafa de 500ml, ideal para acompanhar qualquer refeição.",
  5,
  agua,
  "bebida"
),

new PratosEntity(
  "23",
  "Refrigerante 350ml",
  6.90,
  "Lata gelada de refrigerante.",
  "Disponível nos sabores Coca-Cola, Coca-Cola Zero, Guaraná Antarctica, Fanta Laranja e Sprite.",
  5,
  refrigerante,
  "bebida"
),

new PratosEntity(
  "24",
  "Refrigerante 2 Litros",
  12.90,
  "Garrafa de refrigerante para compartilhar.",
  "Disponível nos sabores Coca-Cola, Coca-Cola Zero, Guaraná Antarctica e Fanta Laranja. Ideal para dividir com amigos e família.",
  5,
  refrigerante2L,
  "bebida"
),

new PratosEntity(
  "25",
  "Churros",
  14.90,
  "Churros recheado com doce de leite.",
  "Massa leve e crocante frita na hora, recheada com doce de leite cremoso e finalizada com açúcar e canela.",
  5,
  churros,
  "sobremesa"
),

new PratosEntity(
  "26",
  "Brownie",
  16.90,
  "Brownie artesanal de chocolate.",
  "Preparado com chocolate selecionado, possui textura macia por dentro e levemente crocante por fora. Servido em porção individual.",
  5,
  brownie,
  "sobremesa"
),
];

export default class PratosService {

  static async findAll() {
    const json = storageGet(STORAGE_KEY);

    if (json) {
      const lista = JSON.parse(json);
      pratos = lista.map((item) => PratosEntity.fromApi(item));
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
    storageSave(STORAGE_KEY, JSON.stringify(lista));
  }

  static async remove(id) {
    const lista = await this.findAll();
    const novaLista = lista.filter((item) => item.id !== String(id));

    pratos = novaLista;
    await this.saveAll(novaLista);

    return [...novaLista];
  }

  static async clear() {
    storageRemove(STORAGE_KEY);
    pratos = [];
  }
}