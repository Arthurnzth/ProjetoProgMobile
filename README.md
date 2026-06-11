# 📱Projeto Cardápio Online - Programação Mobile

![React Native](https://img.shields.io/badge/React%20Native-Mobile-61DAFB?logo=react)
![Expo](https://img.shields.io/badge/Expo-Framework-000000?logo=expo)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)

---

## 📚 Disciplina

**Programação para Dispositivos Móveis**

---

## 👥 Integrantes

Grupo composto por 6 integrantes.

---

## 💡 Sobre o Projeto

O Sistema de Cardápio Digital Mobile foi desenvolvido utilizando **React Native** e **Expo** com o objetivo de disponibilizar um cardápio digital moderno, intuitivo e responsivo para dispositivos móveis.

A aplicação permite que os usuários visualizem produtos, filtrem itens por categoria, consultem informações detalhadas dos pratos e realizem o cadastro de novos produtos diretamente pelo aplicativo.

---

## 🎯 Objetivos

O projeto tem como objetivo:

- Exibir produtos de um cardápio digital;
- Organizar produtos por categorias;
- Exibir imagens ilustrativas dos produtos;
- Permitir a visualização detalhada dos itens;
- Permitir o cadastro de novos pratos;
- Armazenar dados localmente utilizando AsyncStorage;
- Aplicar conceitos de React Native e Expo;
- Utilizar componentes reutilizáveis e organização em camadas.

---

# 🚀 Funcionalidades

## 📋 Listagem de Produtos

Todos os produtos cadastrados são exibidos em formato de cards contendo:

- Imagem
- Nome
- Descrição resumida
- Preço
- Avaliação por estrelas

---

## 🔎 Filtro por Categorias

O usuário pode filtrar os produtos pelas seguintes categorias:

### 🍔 Comidas

- Batata Frita
- Batata com Bacon e Cheddar
- Anéis de Cebola
- Bolinha de Alho-Poró
- Frango Empanado
- Pastel de Carne
- Pastel de Queijo
- Pastel de Pizza
- Hot Dog Especial
- Hambúrguer Clássico
- Hambúrguer Duplo
- Hambúrguer de Frango Empanado
- Hambúrguer Bacon

### 🍺 Bebidas

#### Cervejas

- Heineken
- Budweiser
- Spaten
- Corona

#### Sucos

- Laranja
- Maracujá
- Abacaxi com Hortelã

### 🥤 Outros

- Água Mineral
- Refrigerante 350ml
- Refrigerante 2 Litros

### 🍰 Sobremesas

- Churros
- Brownie

---

## ⭐ Sistema de Avaliação

Os produtos possuem uma avaliação baseada em estrelas.

Exemplo:

⭐⭐⭐⭐⭐

A quantidade de estrelas é definida pelo atributo `rank` de cada produto.

---

## 📦 Modal de Detalhes

Ao clicar em um produto, um modal é aberto contendo:

- Imagem ampliada;
- Nome do produto;
- Avaliação;
- Valor;
- Descrição;
- Informações de preparo.

Essa funcionalidade melhora a experiência do usuário ao fornecer informações completas sem a necessidade de navegar para outra tela.

---

## ➕ Cadastro de Pratos

O sistema possui uma tela para cadastro de novos pratos.

A funcionalidade permite que novos produtos sejam adicionados diretamente pelo aplicativo.

### Campos Disponíveis

- Nome do prato
- Valor
- Descrição
- Avaliação (0 a 5)
- URL da foto

### Validações

Antes de salvar o prato, o sistema realiza algumas verificações:

- O nome do prato é obrigatório;
- O valor deve ser maior que zero;
- Caso nenhuma foto seja informada, uma imagem padrão será utilizada.

### Persistência

Após o cadastro, o prato é salvo utilizando o serviço `PratosService` e armazenado localmente através do AsyncStorage.

---

# 🏗️ Arquitetura do Projeto

O sistema foi desenvolvido utilizando uma arquitetura baseada em separação de responsabilidades.

```text
Interface (Views)
        ↓
Serviços (Services)
        ↓
Entidades (Entities)
```

### Benefícios

- Separação de responsabilidades;
- Facilidade de manutenção;
- Reutilização de código;
- Escalabilidade do projeto.

---

# 📁 Estrutura de Pastas

```text
app/
├── cadastro.jsx
├── entities/
│   └── PratosEntity.js
├── services/
│   └── PratosService.js
├── views/
│   ├── PratosListView.jsx
│   └── CadastroPratoView.jsx
├── utils/
│   └── imagens.js
├── _layout.tsx
├── cadastro.jsx
└── index.jsx

assets/
└── images/
    ├── agua.jpg
    ├── aneis-de-cebolas.jpg
    ├── batata.jpg
    ├── batata-bacon-cheddar.jpg
    ├── brownie.jpg
    ├── budweiser.jpg
    ├── churros.jpg
    ├── corona.jpg
    ├── duplo-com-batata.jpg
    ├── frango.jpg
    ├── hamburguer-bacon.jpg
    ├── hamburguer-carne.jpg
    ├── hamburguer-frango.jpg
    ├── heineken.jpg
    ├── hot-dog.jpg
    ├── pastel-carne.jpg
    ├── pastel-pizza.jpg
    ├── pastel-queijo.jpg
    ├── refrigerante.jpg
    ├── refrigerante2L.jpg
    ├── spaten.jpg
    ├── suco-abacaxi.jpg
    ├── suco-laranja.jpg
    └── suco-maracuja.jpg
```

---

# 🧩 Componentes Principais

## RootLayout

O arquivo `_layout.tsx` é responsável por configurar o tema global da aplicação utilizando o React Native Paper.

### Configurações

- Cor primária personalizada;
- Cor secundária personalizada;
- Tema claro (Light Theme);
- Disponibilização do tema para toda a aplicação através do PaperProvider.

---

## PratosListView

Tela principal responsável pela exibição dos produtos.

### Responsabilidades

- Carregar os pratos;
- Exibir os produtos;
- Filtrar por categoria;
- Exibir detalhes do produto;
- Gerenciar os estados da aplicação.

### Estados Utilizados

| Estado | Finalidade |
|----------|----------|
| pratos | Lista de produtos |
| categoriaSelecionada | Categoria filtrada |
| pratoSelecionado | Produto selecionado |
| modalVisible | Controle de abertura do modal |

---

## CadastroPratoView

Tela responsável pelo cadastro de novos pratos.

### Responsabilidades

- Capturar informações do usuário;
- Validar os dados informados;
- Criar uma instância da entidade PratosEntity;
- Salvar os dados utilizando o PratosService;
- Retornar para a tela anterior após o cadastro.

### Campos

| Campo | Descrição |
|----------|----------|
| Nome do prato | Nome do produto |
| Valor | Preço do produto |
| Descrição | Informações do prato |
| Avaliação | Nota de 0 a 5 |
| URL da foto | Endereço da imagem |

---

# 🏛️ Camada de Entidade

## PratosEntity

Representa os produtos do cardápio.

### Atributos

| Atributo | Descrição |
|----------|----------|
| id | Identificador único |
| nomeDoPrato | Nome do produto |
| valor | Valor do produto |
| descricaoDoPrato | Descrição resumida |
| preparo | Modo de preparo |
| rank | Avaliação |
| fotoDoPrato | Imagem |
| categoria | Categoria |

### Funcionalidades

- Normalização de IDs (`normalizeId`);
- Geração automática de IDs (`newId`);
- Conversão de dados externos (`fromApi`).

---

# ⚙️ Camada de Serviço

## PratosService

Responsável pelo gerenciamento dos dados da aplicação.

### Métodos

- `findAll()`
- `findById(id)`
- `save(prato)`
- `saveAll(lista)`
- `clear()`

---

# 💾 Persistência de Dados

A aplicação utiliza o **AsyncStorage** para armazenar informações localmente.

### Vantagens

- Persistência dos dados;
- Funcionamento offline;
- Fácil integração com React Native;
- Melhor experiência para o usuário.

---

# 🖼️ Gerenciamento de Imagens

As imagens utilizadas pela aplicação são centralizadas no arquivo:

```javascript
utils/imagens.js
```

### Benefícios

- Organização;
- Reutilização;
- Facilidade de manutenção;
- Centralização dos recursos visuais.

---

# 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- Expo Router
- React Native Paper
- JavaScript (ES6+)
- AsyncStorage
- React Hooks

### Hooks Utilizados

- useState
- useEffect

---

# 📦 Dependências Principais

```bash
expo
expo-router
react
react-native
react-native-paper
@react-native-async-storage/async-storage
@react-navigation/native
react-native-gesture-handler
react-native-safe-area-context
react-native-screens
```

---

# ▶️ Como Executar o Projeto

## Clonar o Repositório

```bash
git clone URL_DO_REPOSITORIO
```

## Acessar a Pasta

```bash
cd meuprojeto
```

## Instalar Dependências

```bash
npm install
```

## Executar o Projeto

```bash
npx expo start
```

### Executar na Web

```bash
npm run web
```

### Executar no Android

```bash
npm run android
```

### Executar no iOS

```bash
npm run ios
```

---

# 📊 Resultados Obtidos

✔ Cardápio digital funcional

✔ Organização dos produtos por categorias

✔ Sistema de avaliação por estrelas

✔ Modal com detalhes dos produtos

✔ Cadastro de novos pratos

✔ Persistência local utilizando AsyncStorage

✔ Interface responsiva para dispositivos móveis

✔ Estrutura organizada em camadas

✔ Reutilização de componentes

✔ Aplicação dos conceitos de React Native

---

# 🎓 Aprendizados

Durante o desenvolvimento deste projeto foi possível aplicar conceitos relacionados a:

- Desenvolvimento Mobile;
- React Native;
- Expo;
- Navegação entre telas;
- Persistência de dados;
- Componentização;
- Gerenciamento de estado;
- Organização em camadas;
- Boas práticas de programação.

---

# 📌 Considerações Finais

O Sistema de Cardápio Digital Mobile permitiu aplicar na prática os conhecimentos adquiridos na disciplina de Programação para Dispositivos Móveis.

Além de desenvolver uma aplicação funcional, foi possível compreender conceitos importantes de arquitetura de software, persistência de dados, gerenciamento de estado e experiência do usuário em aplicações mobile.

O resultado final é um sistema organizado, escalável e preparado para futuras evoluções.

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos.
