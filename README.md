# 📱 Projeto Cardápio Online - Programação Mobile

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

O **Sistema de Cardápio Digital Mobile** é uma aplicação desenvolvida com **React Native + Expo**, com foco em oferecer uma experiência moderna, rápida e intuitiva para visualização de cardápios digitais em dispositivos móveis.

A aplicação permite explorar produtos, visualizar detalhes completos e filtrar itens por categoria de forma dinâmica.

---

## 🎯 Objetivos

- Exibir cardápio digital interativo
- Organizar produtos por categorias
- Exibir imagens ilustrativas dos itens
- Mostrar detalhes completos em modal
- Utilizar armazenamento local (AsyncStorage)
- Aplicar boas práticas de React Native e Expo
- Estruturar o projeto em camadas (View, Service e Entity)

---

## 🚀 Funcionalidades

### 🧾 Listagem de Produtos
- Cards com:
  - Imagem do produto
  - Nome
  - Descrição resumida
  - Preço
  - Avaliação por estrelas

---

### 🔎 Filtro por Categorias

#### 🍔 Comidas
Batata frita, hambúrgueres, pastéis, hot dog, frango empanado, entre outros.

#### 🍺 Bebidas
- Cervejas
- Sucos
- Refrigerantes e água mineral

#### 🍰 Sobremesas
- Churros
- Brownie

---

### ⭐ Sistema de Avaliação
Cada produto possui uma avaliação em estrelas baseada no atributo `rank`.

---

### 📦 Modal de Detalhes
Ao selecionar um item, é exibido um modal com:

- Imagem ampliada
- Nome do produto
- Avaliação
- Preço
- Descrição completa
- Informações de preparo

---

## 🏗️ Arquitetura do Projeto

```
Interface (Views)
        ↓
Serviços (Services)
        ↓
Entidades (Entities)
```

Essa estrutura garante:

- Separação de responsabilidades
- Facilidade de manutenção
- Código reutilizável
- Escalabilidade

---

## 📁 Estrutura de Pastas

```
app/
├── entities/
│   └── PratosEntity.js
├── services/
│   └── PratosService.js
├── views/
│   └── PratosListView.jsx
├── utils/
│   └── imagens.js
├── _layout.tsx
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

## ⚙️ Tecnologias Utilizadas

- React Native
- Expo
- Expo Router
- React Native Paper
- JavaScript (ES6+)
- AsyncStorage
- React Hooks (useState, useEffect)

---

## 📦 Dependências

- expo
- expo-router
- react
- react-native
- react-native-paper
- @react-native-async-storage/async-storage
- @react-navigation/native
- react-native-gesture-handler
- react-native-safe-area-context
- react-native-screens

---

## ▶️ Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone [URL_DO_REPOSITORIO](https://github.com/Arthurnzth/ProjetoProgMobile.git)
```

### 2. Acessar o projeto
```bash
cd ProjetoProgMobile
```

### 3. Instalar dependências
```bash
npm install
```

### 4. Rodar o projeto
```bash
npx expo start
```

---

### 📱 Executar em plataformas específicas

```bash
npm run web
npm run android
npm run ios
```

---

## 📊 Resultados Obtidos

✔ Cardápio digital funcional  
✔ Filtros por categoria  
✔ Modal de detalhes completo  
✔ Persistência local com AsyncStorage  
✔ Uso de imagens locais  
✔ Estrutura organizada em camadas  
✔ Aplicação de conceitos de React Native  

---

## 🧠 Aprendizados

Este projeto permitiu praticar:

- Desenvolvimento mobile com React Native
- Arquitetura em camadas
- Gerenciamento de estado
- Persistência de dados local
- Componentização e reutilização de código
- UX em aplicações móveis

---

## 📌 Considerações Finais

O sistema entrega uma experiência fluida e organizada para visualização de cardápios digitais, demonstrando boas práticas de desenvolvimento mobile com React Native e Expo.

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.

