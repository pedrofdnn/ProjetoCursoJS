# Guia de Uso - Site de Estudos JavaScript

Este documento contém instruções para executar e utilizar o site de estudos de JavaScript desenvolvido.

## Requisitos

- Node.js (versão 16 ou superior)
- pnpm (gerenciador de pacotes)

## Como Executar o Site Localmente

1. Abra um terminal e navegue até a pasta do projeto:
   ```
   cd javascript-curso
   ```

2. Instale as dependências do projeto:
   ```
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   pnpm run dev
   ```

4. Acesse o site no navegador:
   ```
   http://localhost:5173/
   ```
   (ou outra porta indicada no terminal)

## Estrutura do Site

O site está organizado da seguinte forma:

- **Página Inicial**: Apresenta os módulos disponíveis no curso
- **Módulos**: Cada módulo contém tópicos teóricos e exercícios práticos
- **Tópicos**: Conteúdo teórico sobre cada conceito de JavaScript
- **Exercícios**: Atividades práticas com enunciados e opção de visualizar respostas

## Navegação

- Use os links na página inicial para acessar os módulos
- Dentro de cada módulo, use o menu lateral para navegar entre tópicos e exercícios
- Use os botões de navegação no final de cada página para avançar ou retornar

## Exercícios

- Cada exercício possui um enunciado e uma área de trabalho para escrever seu código
- Você pode testar seu código no console do navegador
- Use o botão "Mostrar Resposta" para ver uma solução de referência

## Estrutura do Projeto

- `src/`: Código-fonte do projeto
  - `data/`: Dados do curso (conteúdo, exercícios e respostas)
  - `components/`: Componentes React reutilizáveis
  - `pages/`: Páginas principais do site
  - `App.tsx`: Componente principal e rotas
  - `App.css`: Estilos da aplicação

## Personalização

Você pode personalizar o conteúdo editando os arquivos em `src/data/conteudo.ts`.

## Construção para Produção

Para gerar uma versão otimizada para produção:

```
pnpm run build
```

Os arquivos serão gerados na pasta `dist/` e podem ser hospedados em qualquer servidor web estático.
