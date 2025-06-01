# Exercícios e Respostas para o Curso de JavaScript

## 1. Introdução ao JavaScript

### Exercício 1.1: Incluindo JavaScript em HTML
**Exercício:** Crie uma página HTML simples e inclua um script JavaScript que exiba um alerta com a mensagem "Olá, mundo!".

**Resposta:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introdução ao JavaScript</title>
</head>
<body>
    <h1>Minha primeira página com JavaScript</h1>
    
    <!-- Método 1: JavaScript interno -->
    <script>
        alert("Olá, mundo!");
    </script>
    
    <!-- Método 2: JavaScript externo -->
    <!-- <script src="script.js"></script> -->
</body>
</html>
```

### Exercício 1.2: Usando o Console
**Exercício:** Escreva um código JavaScript que imprima no console do navegador seu nome e a data atual.

**Resposta:**
```javascript
// Obtendo a data atual
const dataAtual = new Date();

// Imprimindo no console
console.log("Meu nome: Seu Nome");
console.log("Data atual:", dataAtual.toLocaleDateString('pt-BR'));
```

## 2. Fundamentos da Linguagem

### Exercício 2.1: Variáveis e Tipos de Dados
**Exercício:** Declare variáveis usando var, let e const. Atribua valores de diferentes tipos (string, number, boolean, array, object) e imprima o tipo de cada uma usando typeof.

**Resposta:**
```javascript
// Usando var (evite usar em código moderno)
var nome = "Maria";

// Usando let (para valores que podem mudar)
let idade = 25;

// Usando const (para valores que não mudam)
const PI = 3.14159;

// Diferentes tipos de dados
const texto = "JavaScript é incrível";
const numero = 42;
const ehVerdade = true;
const listaNumeros = [1, 2, 3, 4, 5];
const pessoa = { nome: "João", idade: 30 };

// Imprimindo os tipos
console.log(typeof texto);      // string
console.log(typeof numero);     // number
console.log(typeof ehVerdade);  // boolean
console.log(typeof listaNumeros); // object (arrays são objetos em JavaScript)
console.log(typeof pessoa);     // object
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object (isso é considerado um bug na linguagem)
```

### Exercício 2.2: Conversão de Tipos
**Exercício:** Converta os seguintes valores entre tipos diferentes:
1. String "42" para número
2. Número 42 para string
3. String "true" para boolean
4. Número 0 para boolean

**Resposta:**
```javascript
// String para número
const stringNumero = "42";
const numeroConvertido1 = Number(stringNumero);
const numeroConvertido2 = parseInt(stringNumero);
const numeroConvertido3 = +stringNumero;

console.log(numeroConvertido1); // 42
console.log(numeroConvertido2); // 42
console.log(numeroConvertido3); // 42

// Número para string
const numero = 42;
const stringConvertida1 = String(numero);
const stringConvertida2 = numero.toString();
const stringConvertida3 = `${numero}`;

console.log(stringConvertida1); // "42"
console.log(stringConvertida2); // "42"
console.log(stringConvertida3); // "42"

// String para boolean
const stringBoolean = "true";
const booleanConvertido = Boolean(stringBoolean);

console.log(booleanConvertido); // true (qualquer string não vazia é true)

// Número para boolean
const zero = 0;
const booleanZero = Boolean(zero);

console.log(booleanZero); // false (0 é falsy em JavaScript)
```

### Exercício 2.3: Operadores
**Exercício:** Calcule o resultado das seguintes expressões:
1. 10 + 5 * 2
2. (10 + 5) * 2
3. 10 % 3
4. "10" + 5
5. "10" - 5
6. 10 == "10"
7. 10 === "10"

**Resposta:**
```javascript
console.log(10 + 5 * 2);    // 20 (multiplicação tem precedência)
console.log((10 + 5) * 2);  // 30 (parênteses têm precedência)
console.log(10 % 3);        // 1 (resto da divisão)
console.log("10" + 5);      // "105" (concatenação de string)
console.log("10" - 5);      // 5 (conversão implícita para número)
console.log(10 == "10");    // true (comparação com conversão de tipo)
console.log(10 === "10");   // false (comparação estrita, sem conversão)
```

## 3. Estruturas de Controle

### Exercício 3.1: Condicionais
**Exercício:** Escreva um programa que verifica a idade de uma pessoa e retorna uma mensagem diferente para cada faixa etária:
- Menor de 18: "Menor de idade"
- Entre 18 e 65: "Adulto"
- Acima de 65: "Idoso"

**Resposta:**
```javascript
function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else if (idade >= 18 && idade <= 65) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

console.log(verificarIdade(15)); // "Menor de idade"
console.log(verificarIdade(30)); // "Adulto"
console.log(verificarIdade(70)); // "Idoso"

// Usando operador ternário para o mesmo problema
function verificarIdadeTernario(idade) {
    return idade < 18 ? "Menor de idade" : (idade <= 65 ? "Adulto" : "Idoso");
}
```

### Exercício 3.2: Switch Case
**Exercício:** Crie uma função que receba o nome de um mês e retorne o número de dias desse mês (considere um ano não bissexto).

**Resposta:**
```javascript
function diasNoMes(mes) {
    const mesLowerCase = mes.toLowerCase();
    
    switch (mesLowerCase) {
        case "janeiro":
        case "março":
        case "maio":
        case "julho":
        case "agosto":
        case "outubro":
        case "dezembro":
            return 31;
        case "abril":
        case "junho":
        case "setembro":
        case "novembro":
            return 30;
        case "fevereiro":
            return 28;
        default:
            return "Mês inválido";
    }
}

console.log(diasNoMes("Fevereiro")); // 28
console.log(diasNoMes("julho"));     // 31
console.log(diasNoMes("Abril"));     // 30
console.log(diasNoMes("Banana"));    // "Mês inválido"
```

### Exercício 3.3: Loops
**Exercício:** Escreva um programa que imprima os números de 1 a 100, mas para múltiplos de 3 imprima "Fizz" e para múltiplos de 5 imprima "Buzz". Para números que são múltiplos de ambos, imprima "FizzBuzz".

**Resposta:**
```javascript
// Usando for
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Usando while
let j = 1;
while (j <= 100) {
    let output = "";
    if (j % 3 === 0) output += "Fizz";
    if (j % 5 === 0) output += "Buzz";
    
    console.log(output || j);
    j++;
}
```

## 4. Funções

### Exercício 4.1: Declaração de Funções
**Exercício:** Crie três funções que calculam a área de diferentes formas geométricas (círculo, retângulo e triângulo), usando diferentes sintaxes de declaração.

**Resposta:**
```javascript
// Declaração de função tradicional
function areaCirculo(raio) {
    return Math.PI * raio * raio;
}

// Expressão de função
const areaRetangulo = function(largura, altura) {
    return largura * altura;
};

// Arrow function
const areaTriangulo = (base, altura) => (base * altura) / 2;

console.log(areaCirculo(5));         // 78.53981633974483
console.log(areaRetangulo(4, 6));    // 24
console.log(areaTriangulo(3, 8));    // 12
```

### Exercício 4.2: Callbacks
**Exercício:** Crie uma função chamada `processarArray` que recebe um array e uma função callback. A função deve aplicar o callback a cada elemento do array e retornar um novo array com os resultados.

**Resposta:**
```javascript
function processarArray(array, callback) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(callback(array[i]));
    }
    return resultado;
}

// Exemplos de uso
const numeros = [1, 2, 3, 4, 5];

// Callback para dobrar o número
const dobrar = (num) => num * 2;

// Callback para calcular o quadrado
const quadrado = function(num) {
    return num * num;
};

console.log(processarArray(numeros, dobrar));    // [2, 4, 6, 8, 10]
console.log(processarArray(numeros, quadrado));  // [1, 4, 9, 16, 25]
console.log(processarArray(numeros, num => num + 10)); // [11, 12, 13, 14, 15]
```

### Exercício 4.3: Closures
**Exercício:** Crie uma função `contadorFactory` que retorna uma função de contador. Cada vez que a função retornada é chamada, ela deve incrementar e retornar um contador.

**Resposta:**
```javascript
function contadorFactory() {
    let contador = 0;
    
    return function() {
        contador++;
        return contador;
    };
}

const contador1 = contadorFactory();
const contador2 = contadorFactory();

console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

console.log(contador2()); // 1
console.log(contador2()); // 2

console.log(contador1()); // 4
```

## 5. Arrays

### Exercício 5.1: Manipulação de Arrays
**Exercício:** Crie um array de números e realize as seguintes operações:
1. Adicione um elemento ao final
2. Remova o último elemento
3. Adicione um elemento ao início
4. Remova o primeiro elemento
5. Encontre o índice de um elemento específico

**Resposta:**
```javascript
const numeros = [10, 20, 30, 40, 50];

// 1. Adicionar ao final
numeros.push(60);
console.log(numeros); // [10, 20, 30, 40, 50, 60]

// 2. Remover do final
const ultimoRemovido = numeros.pop();
console.log(ultimoRemovido); // 60
console.log(numeros); // [10, 20, 30, 40, 50]

// 3. Adicionar ao início
numeros.unshift(5);
console.log(numeros); // [5, 10, 20, 30, 40, 50]

// 4. Remover do início
const primeiroRemovido = numeros.shift();
console.log(primeiroRemovido); // 5
console.log(numeros); // [10, 20, 30, 40, 50]

// 5. Encontrar índice
const indice = numeros.indexOf(30);
console.log(indice); // 2

// Elemento que não existe
const indiceInexistente = numeros.indexOf(100);
console.log(indiceInexistente); // -1
```

### Exercício 5.2: Métodos de Iteração
**Exercício:** Dado um array de números, use diferentes métodos de iteração para:
1. Criar um novo array com o dobro de cada número
2. Filtrar apenas os números pares
3. Calcular a soma de todos os números
4. Verificar se todos os números são positivos
5. Encontrar o primeiro número maior que 10

**Resposta:**
```javascript
const numeros = [3, 8, 12, 5, 6, 10, 7, 15];

// 1. Dobrar cada número (map)
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [6, 16, 24, 10, 12, 20, 14, 30]

// 2. Filtrar números pares (filter)
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [8, 12, 6, 10]

// 3. Calcular a soma (reduce)
const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma); // 66

// 4. Verificar se todos são positivos (every)
const todosSaoPositivos = numeros.every(num => num > 0);
console.log(todosSaoPositivos); // true

// 5. Encontrar o primeiro número maior que 10 (find)
const primeiroMaiorQue10 = numeros.find(num => num > 10);
console.log(primeiroMaiorQue10); // 12
```

### Exercício 5.3: Desestruturação de Arrays
**Exercício:** Use a desestruturação de arrays para trocar os valores de duas variáveis e para extrair elementos específicos de um array.

**Resposta:**
```javascript
// Trocar valores de variáveis
let a = 5;
let b = 10;

[a, b] = [b, a];
console.log(a, b); // 10 5

// Extrair elementos de um array
const frutas = ["maçã", "banana", "laranja", "uva", "manga"];

// Extrair os primeiros dois elementos
const [primeira, segunda] = frutas;
console.log(primeira, segunda); // "maçã" "banana"

// Pular elementos
const [, , terceira] = frutas;
console.log(terceira); // "laranja"

// Usar rest operator
const [primeiraFruta, segundaFruta, ...restante] = frutas;
console.log(primeiraFruta); // "maçã"
console.log(segundaFruta); // "banana"
console.log(restante); // ["laranja", "uva", "manga"]
```

## 6. Objetos

### Exercício 6.1: Criação e Manipulação de Objetos
**Exercício:** Crie um objeto representando um livro com propriedades como título, autor e ano. Em seguida, adicione, modifique e remova propriedades.

**Resposta:**
```javascript
// Criando o objeto
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    paginas: 1178,
    genero: "Fantasia"
};

// Acessando propriedades
console.log(livro.titulo); // "O Senhor dos Anéis"
console.log(livro["autor"]); // "J.R.R. Tolkien"

// Adicionando propriedades
livro.idioma = "Inglês";
livro["emEstoque"] = true;

// Modificando propriedades
livro.ano = 1954;
livro["paginas"] = 1200;

// Removendo propriedades
delete livro.genero;

console.log(livro);
/* Resultado:
{
  titulo: 'O Senhor dos Anéis',
  autor: 'J.R.R. Tolkien',
  ano: 1954,
  paginas: 1200,
  idioma: 'Inglês',
  emEstoque: true
}
*/
```

### Exercício 6.2: Métodos de Objetos e This
**Exercício:** Crie um objeto representando uma conta bancária com propriedades para saldo e nome do titular, e métodos para depositar, sacar e verificar saldo.

**Resposta:**
```javascript
const contaBancaria = {
    titular: "Maria Silva",
    saldo: 1000,
    
    depositar: function(valor) {
        if (valor <= 0) {
            return "Valor inválido para depósito";
        }
        this.saldo += valor;
        return `Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
    },
    
    sacar: function(valor) {
        if (valor <= 0) {
            return "Valor inválido para saque";
        }
        if (valor > this.saldo) {
            return "Saldo insuficiente";
        }
        this.saldo -= valor;
        return `Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
    },
    
    verificarSaldo: function() {
        return `Saldo atual: R$ ${this.saldo}`;
    }
};

console.log(contaBancaria.verificarSaldo()); // "Saldo atual: R$ 1000"
console.log(contaBancaria.depositar(500));   // "Depósito de R$ 500 realizado. Novo saldo: R$ 1500"
console.log(contaBancaria.sacar(200));       // "Saque de R$ 200 realizado. Novo saldo: R$ 1300"
console.log(contaBancaria.sacar(2000));      // "Saldo insuficiente"
```

### Exercício 6.3: Classes
**Exercício:** Reescreva o exercício anterior usando uma classe ES6 em vez de um objeto literal.

**Resposta:**
```javascript
class ContaBancaria {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    
    depositar(valor) {
        if (valor <= 0) {
            return "Valor inválido para depósito";
        }
        this.saldo += valor;
        return `Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
    }
    
    sacar(valor) {
        if (valor <= 0) {
            return "Valor inválido para saque";
        }
        if (valor > this.saldo) {
            return "Saldo insuficiente";
        }
        this.saldo -= valor;
        return `Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
    }
    
    verificarSaldo() {
        return `Saldo atual: R$ ${this.saldo}`;
    }
}

// Criando uma instância
const contaJoao = new ContaBancaria("João Pereira", 1500);
console.log(contaJoao.verificarSaldo()); // "Saldo atual: R$ 1500"
console.log(contaJoao.depositar(300));   // "Depósito de R$ 300 realizado. Novo saldo: R$ 1800"

// Outra instância
const contaMaria = new ContaBancaria("Maria Silva");
console.log(contaMaria.verificarSaldo()); // "Saldo atual: R$ 0"
```

## 7. Manipulação do DOM

### Exercício 7.1: Seleção de Elementos
**Exercício:** Escreva código JavaScript para selecionar elementos de uma página HTML usando diferentes métodos de seleção.

**Resposta:**
```javascript
// Por ID
const titulo = document.getElementById("titulo");

// Por classe
const itens = document.getElementsByClassName("item");

// Por tag
const paragrafos = document.getElementsByTagName("p");

// Usando querySelector (retorna o primeiro elemento que corresponde ao seletor CSS)
const primeiroItem = document.querySelector(".item");

// Usando querySelectorAll (retorna todos os elementos que correspondem ao seletor CSS)
const todosItens = document.querySelectorAll(".item");
const itemsNaLista = document.querySelectorAll("ul.lista li");

// Iterando sobre NodeList retornado por querySelectorAll
todosItens.forEach(item => {
    console.log(item.textContent);
});
```

### Exercício 7.2: Manipulação de Conteúdo
**Exercício:** Crie funções para manipular o conteúdo de elementos HTML, alterando texto, HTML e atributos.

**Resposta:**
```javascript
// Alterando texto
function alterarTexto(id, novoTexto) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.textContent = novoTexto;
    }
}

// Alterando HTML
function alterarHTML(id, novoHTML) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.innerHTML = novoHTML;
    }
}

// Alterando atributos
function alterarAtributo(id, atributo, valor) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.setAttribute(atributo, valor);
        // Alternativa: elemento[atributo] = valor;
    }
}

// Exemplos de uso
alterarTexto("titulo", "Novo Título");
alterarHTML("conteudo", "<p>Este é um <strong>novo</strong> parágrafo.</p>");
alterarAtributo("link", "href", "https://www.exemplo.com.br");
alterarAtributo("imagem", "src", "nova-imagem.jpg");
```

### Exercício 7.3: Criação e Remoção de Elementos
**Exercício:** Crie uma função que adiciona itens a uma lista não ordenada e outra função que remove itens específicos.

**Resposta:**
```javascript
// Adicionar item à lista
function adicionarItem(textoItem) {
    // Criar o novo elemento li
    const novoItem = document.createElement("li");
    
    // Adicionar texto ao item
    novoItem.textContent = textoItem;
    
    // Adicionar uma classe para facilitar a identificação
    novoItem.classList.add("item");
    
    // Encontrar a lista e adicionar o novo item
    const lista = document.getElementById("lista");
    lista.appendChild(novoItem);
    
    return novoItem; // Retorna o elemento criado
}

// Remover item da lista
function removerItem(texto) {
    const lista = document.getElementById("lista");
    const itens = lista.getElementsByTagName("li");
    
    // Converter HTMLCollection para Array para usar métodos de array
    Array.from(itens).forEach(item => {
        if (item.textContent === texto) {
            lista.removeChild(item);
        }
    });
}

// Exemplo de uso
adicionarItem("Novo item na lista");
removerItem("Item a ser removido");

// Função para limpar toda a lista
function limparLista() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
}
```

## 8. Eventos

### Exercício 8.1: Event Listeners
**Exercício:** Crie uma página com um botão e um contador. Cada vez que o botão for clicado, o contador deve ser incrementado.

**Resposta:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador com Eventos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        #contador {
            font-size: 24px;
            margin: 20px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Contador com JavaScript</h1>
    <div id="contador">0</div>
    <button id="incrementar">Incrementar</button>
    
    <script>
        // Variável para armazenar o valor do contador
        let contagem = 0;
        
        // Selecionar elementos
        const contadorElemento = document.getElementById("contador");
        const botao = document.getElementById("incrementar");
        
        // Adicionar event listener
        botao.addEventListener("click", function() {
            // Incrementar contador
            contagem++;
            
            // Atualizar o texto do elemento
            contadorElemento.textContent = contagem;
        });
    </script>
</body>
</html>
```

### Exercício 8.2: Eventos de Formulário
**Exercício:** Crie um formulário de contato com validação de campos usando eventos de formulário.

**Resposta:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário com Validação</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
        }
        input, textarea {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
        }
        .error {
            color: red;
            font-size: 12px;
            margin-top: 5px;
            display: none;
        }
        button {
            padding: 10px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>Formulário de Contato</h1>
    <form id="formularioContato">
        <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            <div id="erroNome" class="error">Por favor, informe seu nome.</div>
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <div id="erroEmail" class="error">Por favor, informe um email válido.</div>
        </div>
        
        <div class="form-group">
            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
            <div id="erroMensagem" class="error">Por favor, escreva uma mensagem.</div>
        </div>
        
        <button type="submit">Enviar</button>
    </form>
    
    <div id="mensagemSucesso" style="color: green; margin-top: 20px; display: none;">
        Mensagem enviada com sucesso!
    </div>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const formulario = document.getElementById('formularioContato');
            
            // Função para validar email
            function validarEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }
            
            // Função para mostrar erro
            function mostrarErro(campo, mensagem) {
                const erro = document.getElementById('erro' + campo.charAt(0).toUpperCase() + campo.slice(1));
                erro.style.display = 'block';
                return false;
            }
            
            // Função para esconder erro
            function esconderErro(campo) {
                const erro = document.getElementById('erro' + campo.charAt(0).toUpperCase() + campo.slice(1));
                erro.style.display = 'none';
            }
            
            // Event listeners para validação em tempo real
            document.getElementById('nome').addEventListener('input', function() {
                if (this.value.trim()) {
                    esconderErro('nome');
                }
            });
            
            document.getElementById('email').addEventListener('input', function() {
                if (validarEmail(this.value)) {
                    esconderErro('email');
                }
            });
            
            document.getElementById('mensagem').addEventListener('input', function() {
                if (this.value.trim()) {
                    esconderErro('mensagem');
                }
            });
            
            // Event listener para envio do formulário
            formulario.addEventListener('submit', function(e) {
                e.preventDefault();
                
                let valido = true;
                
                // Validar nome
                const nome = document.getElementById('nome').value.trim();
                if (!nome) {
                    valido = mostrarErro('nome');
                } else {
                    esconderErro('nome');
                }
                
                // Validar email
                const email = document.getElementById('email').value.trim();
                if (!email || !validarEmail(email)) {
                    valido = mostrarErro('email');
                } else {
                    esconderErro('email');
                }
                
                // Validar mensagem
                const mensagem = document.getElementById('mensagem').value.trim();
                if (!mensagem) {
                    valido = mostrarErro('mensagem');
                } else {
                    esconderErro('mensagem');
                }
                
                // Se tudo estiver válido, "enviar" o formulário
                if (valido) {
                    // Aqui você normalmente enviaria os dados para um servidor
                    // Para este exemplo, apenas mostramos uma mensagem de sucesso
                    document.getElementById('mensagemSucesso').style.display = 'block';
                    formulario.reset();
                    
                    // Esconder a mensagem após 3 segundos
                    setTimeout(function() {
                        document.getElementById('mensagemSucesso').style.display = 'none';
                    }, 3000);
                }
            });
        });
    </script>
</body>
</html>
```

### Exercício 8.3: Delegação de Eventos
**Exercício:** Crie uma lista de tarefas onde novos itens podem ser adicionados e cada item tem um botão para removê-lo, usando delegação de eventos.

**Resposta:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            text-align: center;
        }
        .tarefa-input {
            display: flex;
            margin-bottom: 20px;
        }
        #novaTarefa {
            flex-grow: 1;
            padding: 8px;
            font-size: 16px;
        }
        button {
            padding: 8px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 10px;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .remover {
            background-color: #f44336;
            padding: 5px 10px;
            font-size: 14px;
        }
        .remover:hover {
            background-color: #d32f2f;
        }
    </style>
</head>
<body>
    <h1>Lista de Tarefas</h1>
    
    <div class="tarefa-input">
        <input type="text" id="novaTarefa" placeholder="Adicionar nova tarefa">
        <button id="adicionarTarefa">Adicionar</button>
    </div>
    
    <ul id="listaTarefas">
        <!-- As tarefas serão adicionadas aqui -->
    </ul>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const inputTarefa = document.getElementById('novaTarefa');
            const btnAdicionar = document.getElementById('adicionarTarefa');
            const listaTarefas = document.getElementById('listaTarefas');
            
            // Função para adicionar nova tarefa
            function adicionarTarefa() {
                const textoTarefa = inputTarefa.value.trim();
                
                if (textoTarefa) {
                    // Criar novo item da lista
                    const li = document.createElement('li');
                    
                    // Adicionar texto da tarefa
                    const spanTarefa = document.createElement('span');
                    spanTarefa.textContent = textoTarefa;
                    li.appendChild(spanTarefa);
                    
                    // Adicionar botão de remover
                    const btnRemover = document.createElement('button');
                    btnRemover.textContent = 'Remover';
                    btnRemover.className = 'remover';
                    li.appendChild(btnRemover);
                    
                    // Adicionar à lista
                    listaTarefas.appendChild(li);
                    
                    // Limpar input
                    inputTarefa.value = '';
                    inputTarefa.focus();
                }
            }
            
            // Event listener para botão adicionar
            btnAdicionar.addEventListener('click', adicionarTarefa);
            
            // Event listener para tecla Enter no input
            inputTarefa.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    adicionarTarefa();
                }
            });
            
            // Delegação de eventos para botões de remover
            // Ao invés de adicionar um event listener para cada botão,
            // adicionamos um único listener ao elemento pai
            listaTarefas.addEventListener('click', function(e) {
                // Verificar se o elemento clicado é um botão de remover
                if (e.target.classList.contains('remover')) {
                    // Remover o item da lista (o pai do botão)
                    const li = e.target.parentElement;
                    listaTarefas.removeChild(li);
                }
            });
        });
    </script>
</body>
</html>
```

## 9. Programação Assíncrona

### Exercício 9.1: Promises
**Exercício:** Crie uma função que simula uma requisição assíncrona usando Promises e use-a para buscar dados de um usuário.

**Resposta:**
```javascript
// Simulação de banco de dados
const bancoDeDados = {
    usuarios: [
        { id: 1, nome: "Ana Silva", email: "ana@exemplo.com" },
        { id: 2, nome: "Carlos Oliveira", email: "carlos@exemplo.com" },
        { id: 3, nome: "Mariana Santos", email: "mariana@exemplo.com" }
    ]
};

// Função que simula uma requisição assíncrona
function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        // Simulando um atraso de rede
        setTimeout(() => {
            // Procurar usuário no "banco de dados"
            const usuario = bancoDeDados.usuarios.find(u => u.id === id);
            
            if (usuario) {
                // Sucesso: usuário encontrado
                resolve(usuario);
            } else {
                // Erro: usuário não encontrado
                reject(new Error(`Usuário com ID ${id} não encontrado`));
            }
        }, 1000); // Atraso de 1 segundo
    });
}

// Usando a Promise
console.log("Buscando usuário...");

buscarUsuario(2)
    .then(usuario => {
        console.log("Usuário encontrado:", usuario);
    })
    .catch(erro => {
        console.error("Erro:", erro.message);
    })
    .finally(() => {
        console.log("Busca finalizada");
    });

// Encadeando Promises
buscarUsuario(1)
    .then(usuario => {
        console.log("Primeiro usuário:", usuario);
        return buscarUsuario(3); // Retorna outra Promise
    })
    .then(segundoUsuario => {
        console.log("Segundo usuário:", segundoUsuario);
    })
    .catch(erro => {
        console.error("Erro em qualquer uma das buscas:", erro.message);
    });
```

### Exercício 9.2: Async/Await
**Exercício:** Reescreva o exercício anterior usando async/await.

**Resposta:**
```javascript
// Usando a mesma função buscarUsuario do exercício anterior

// Função assíncrona para buscar um usuário
async function obterUsuario(id) {
    try {
        console.log(`Buscando usuário com ID ${id}...`);
        const usuario = await buscarUsuario(id);
        console.log("Usuário encontrado:", usuario);
        return usuario;
    } catch (erro) {
        console.error("Erro:", erro.message);
        throw erro; // Re-lançar o erro para tratamento externo, se necessário
    } finally {
        console.log("Busca finalizada");
    }
}

// Chamando a função assíncrona
obterUsuario(2);

// Função assíncrona para buscar múltiplos usuários em sequência
async function buscarMultiplosUsuarios() {
    try {
        const usuario1 = await buscarUsuario(1);
        console.log("Primeiro usuário:", usuario1);
        
        const usuario3 = await buscarUsuario(3);
        console.log("Segundo usuário:", usuario3);
        
        return [usuario1, usuario3];
    } catch (erro) {
        console.error("Erro ao buscar usuários:", erro.message);
    }
}

// Chamando a função para buscar múltiplos usuários
buscarMultiplosUsuarios();

// Função para buscar múltiplos usuários em paralelo
async function buscarUsuariosParalelo() {
    try {
        // Promise.all permite executar múltiplas Promises em paralelo
        const [usuario1, usuario2, usuario3] = await Promise.all([
            buscarUsuario(1),
            buscarUsuario(2),
            buscarUsuario(3)
        ]);
        
        console.log("Todos os usuários:", [usuario1, usuario2, usuario3]);
    } catch (erro) {
        console.error("Erro ao buscar usuários em paralelo:", erro.message);
    }
}

// Chamando a função para buscar em paralelo
buscarUsuariosParalelo();
```

### Exercício 9.3: Fetch API
**Exercício:** Crie uma função que usa a Fetch API para buscar dados de uma API pública e exibir os resultados.

**Resposta:**
```javascript
// Função para buscar dados de uma API de países
async function buscarPaises() {
    try {
        // URL da API pública (restcountries.com)
        const url = 'https://restcountries.com/v3.1/region/europe';
        
        // Fazendo a requisição
        const resposta = await fetch(url);
        
        // Verificando se a requisição foi bem-sucedida
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }
        
        // Convertendo a resposta para JSON
        const paises = await resposta.json();
        
        // Processando os dados
        const paisesFiltrados = paises.map(pais => ({
            nome: pais.name.common,
            capital: pais.capital ? pais.capital[0] : 'N/A',
            populacao: pais.population.toLocaleString('pt-BR'),
            area: pais.area.toLocaleString('pt-BR') + ' km²',
            bandeira: pais.flags.png
        }));
        
        // Exibindo os resultados
        console.log(`Encontrados ${paisesFiltrados.length} países europeus:`);
        paisesFiltrados.forEach(pais => {
            console.log(`${pais.nome} - Capital: ${pais.capital}, População: ${pais.populacao}`);
        });
        
        return paisesFiltrados;
    } catch (erro) {
        console.error('Erro ao buscar dados dos países:', erro.message);
    }
}

// Chamando a função
buscarPaises();

// Função para exibir os países em uma página HTML
function exibirPaisesNaPagina(paises) {
    const container = document.getElementById('paises-container');
    
    // Limpar o container
    container.innerHTML = '';
    
    // Criar um card para cada país
    paises.forEach(pais => {
        const card = document.createElement('div');
        card.className = 'pais-card';
        
        card.innerHTML = `
            <img src="${pais.bandeira}" alt="Bandeira de ${pais.nome}">
            <h3>${pais.nome}</h3>
            <p><strong>Capital:</strong> ${pais.capital}</p>
            <p><strong>População:</strong> ${pais.populacao}</p>
            <p><strong>Área:</strong> ${pais.area}</p>
        `;
        
        container.appendChild(card);
    });
}

// Buscar e exibir os países na página
async function inicializar() {
    const paises = await buscarPaises();
    if (paises) {
        exibirPaisesNaPagina(paises);
    }
}

// Chamar a função de inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', inicializar);
```

## 10. Armazenamento no Navegador

### Exercício 10.1: localStorage
**Exercício:** Crie uma aplicação de lista de tarefas que salva as tarefas no localStorage para que elas persistam mesmo após o fechamento do navegador.

**Resposta:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas com localStorage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            text-align: center;
        }
        .tarefa-input {
            display: flex;
            margin-bottom: 20px;
        }
        #novaTarefa {
            flex-grow: 1;
            padding: 8px;
            font-size: 16px;
        }
        button {
            padding: 8px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 10px;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .remover {
            background-color: #f44336;
            padding: 5px 10px;
            font-size: 14px;
        }
        .remover:hover {
            background-color: #d32f2f;
        }
        .tarefa-concluida {
            text-decoration: line-through;
            color: #888;
        }
        .limpar-tudo {
            margin-top: 20px;
            background-color: #f44336;
        }
    </style>
</head>
<body>
    <h1>Lista de Tarefas</h1>
    
    <div class="tarefa-input">
        <input type="text" id="novaTarefa" placeholder="Adicionar nova tarefa">
        <button id="adicionarTarefa">Adicionar</button>
    </div>
    
    <ul id="listaTarefas">
        <!-- As tarefas serão adicionadas aqui -->
    </ul>
    
    <button id="limparTudo" class="limpar-tudo">Limpar Todas</button>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const inputTarefa = document.getElementById('novaTarefa');
            const btnAdicionar = document.getElementById('adicionarTarefa');
            const listaTarefas = document.getElementById('listaTarefas');
            const btnLimparTudo = document.getElementById('limparTudo');
            
            // Carregar tarefas do localStorage
            function carregarTarefas() {
                const tarefasSalvas = localStorage.getItem('tarefas');
                if (tarefasSalvas) {
                    return JSON.parse(tarefasSalvas);
                }
                return [];
            }
            
            // Salvar tarefas no localStorage
            function salvarTarefas(tarefas) {
                localStorage.setItem('tarefas', JSON.stringify(tarefas));
            }
            
            // Renderizar tarefas na lista
            function renderizarTarefas() {
                const tarefas = carregarTarefas();
                
                // Limpar a lista atual
                listaTarefas.innerHTML = '';
                
                // Adicionar cada tarefa à lista
                tarefas.forEach((tarefa, index) => {
                    const li = document.createElement('li');
                    
                    // Criar span para o texto da tarefa
                    const spanTarefa = document.createElement('span');
                    spanTarefa.textContent = tarefa.texto;
                    
                    // Adicionar classe se a tarefa estiver concluída
                    if (tarefa.concluida) {
                        spanTarefa.classList.add('tarefa-concluida');
                    }
                    
                    // Adicionar evento de clique para marcar como concluída
                    spanTarefa.addEventListener('click', function() {
                        toggleTarefaConcluida(index);
                    });
                    
                    li.appendChild(spanTarefa);
                    
                    // Adicionar botão de remover
                    const btnRemover = document.createElement('button');
                    btnRemover.textContent = 'Remover';
                    btnRemover.className = 'remover';
                    btnRemover.addEventListener('click', function() {
                        removerTarefa(index);
                    });
                    
                    li.appendChild(btnRemover);
                    listaTarefas.appendChild(li);
                });
            }
            
            // Adicionar nova tarefa
            function adicionarTarefa() {
                const textoTarefa = inputTarefa.value.trim();
                
                if (textoTarefa) {
                    // Obter tarefas atuais
                    const tarefas = carregarTarefas();
                    
                    // Adicionar nova tarefa
                    tarefas.push({
                        texto: textoTarefa,
                        concluida: false
                    });
                    
                    // Salvar e renderizar
                    salvarTarefas(tarefas);
                    renderizarTarefas();
                    
                    // Limpar input
                    inputTarefa.value = '';
                    inputTarefa.focus();
                }
            }
            
            // Remover tarefa
            function removerTarefa(index) {
                const tarefas = carregarTarefas();
                tarefas.splice(index, 1);
                salvarTarefas(tarefas);
                renderizarTarefas();
            }
            
            // Alternar estado de conclusão da tarefa
            function toggleTarefaConcluida(index) {
                const tarefas = carregarTarefas();
                tarefas[index].concluida = !tarefas[index].concluida;
                salvarTarefas(tarefas);
                renderizarTarefas();
            }
            
            // Limpar todas as tarefas
            function limparTudo() {
                if (confirm('Tem certeza que deseja remover todas as tarefas?')) {
                    localStorage.removeItem('tarefas');
                    renderizarTarefas();
                }
            }
            
            // Event listeners
            btnAdicionar.addEventListener('click', adicionarTarefa);
            
            inputTarefa.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    adicionarTarefa();
                }
            });
            
            btnLimparTudo.addEventListener('click', limparTudo);
            
            // Inicializar a lista
            renderizarTarefas();
        });
    </script>
</body>
</html>
```

### Exercício 10.2: Cookies
**Exercício:** Crie funções para definir, obter e excluir cookies.

**Resposta:**
```javascript
// Função para definir um cookie
function setCookie(nome, valor, diasExpiracao = 30) {
    // Criar data de expiração
    const dataExpiracao = new Date();
    dataExpiracao.setTime(dataExpiracao.getTime() + (diasExpiracao * 24 * 60 * 60 * 1000));
    
    // Converter para string no formato UTC
    const expires = "expires=" + dataExpiracao.toUTCString();
    
    // Definir o cookie
    document.cookie = `${nome}=${valor};${expires};path=/`;
}

// Função para obter o valor de um cookie
function getCookie(nome) {
    // Adicionar o nome do cookie que queremos buscar com '='
    const nomeCookie = nome + "=";
    
    // Decodificar o cookie para lidar com caracteres especiais
    const cookieDecodificado = decodeURIComponent(document.cookie);
    
    // Dividir em partes individuais
    const partesCookie = cookieDecodificado.split(';');
    
    // Buscar o cookie específico
    for (let i = 0; i < partesCookie.length; i++) {
        let parte = partesCookie[i];
        
        // Remover espaços em branco no início
        while (parte.charAt(0) === ' ') {
            parte = parte.substring(1);
        }
        
        // Se encontrar o cookie, retornar seu valor
        if (parte.indexOf(nomeCookie) === 0) {
            return parte.substring(nomeCookie.length, parte.length);
        }
    }
    
    // Se não encontrar, retornar string vazia
    return "";
}

// Função para verificar se um cookie existe
function checkCookie(nome) {
    const cookie = getCookie(nome);
    return cookie !== "";
}

// Função para excluir um cookie
function deleteCookie(nome) {
    // Para excluir um cookie, definimos sua data de expiração para o passado
    document.cookie = `${nome}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

// Exemplos de uso
function exemplosUsoCookies() {
    // Definir cookies
    setCookie("usuario", "joao123");
    setCookie("tema", "escuro", 7); // Expira em 7 dias
    setCookie("idioma", "pt-br", 365); // Expira em 1 ano
    
    // Obter valores
    console.log("Usuário:", getCookie("usuario"));
    console.log("Tema:", getCookie("tema"));
    console.log("Idioma:", getCookie("idioma"));
    
    // Verificar se existe
    if (checkCookie("usuario")) {
        console.log("Cookie de usuário existe!");
    }
    
    // Excluir cookie
    deleteCookie("tema");
    console.log("Tema após exclusão:", getCookie("tema")); // Deve retornar string vazia
}

// Chamar a função de exemplo
exemplosUsoCookies();
```

## 11. ES6+ e Recursos Modernos

### Exercício 11.1: Template Literals e Destructuring
**Exercício:** Use template literals e destructuring para criar uma função que formata informações de um produto.

**Resposta:**
```javascript
// Dados do produto
const produto = {
    id: 1234,
    nome: "Smartphone XYZ",
    preco: 1299.99,
    descricao: "Um smartphone incrível com câmera de alta resolução",
    especificacoes: {
        processador: "Octa-core 2.5GHz",
        memoria: "8GB RAM",
        armazenamento: "128GB",
        tela: "6.5 polegadas AMOLED"
    },
    disponivel: true,
    cores: ["Preto", "Branco", "Azul"]
};

// Função que formata as informações do produto usando template literals e destructuring
function formatarProduto(produto) {
    // Destructuring básico
    const { nome, preco, descricao, disponivel } = produto;
    
    // Destructuring aninhado
    const { especificacoes: { processador, memoria, armazenamento, tela } } = produto;
    
    // Destructuring de array
    const [corPrincipal, corSecundaria, ...outrasCorres] = produto.cores;
    
    // Usando template literals para formatar a saída
    return `
        # ${nome}
        
        ## Informações Básicas
        Preço: R$ ${preco.toFixed(2)}
        ${disponivel ? '✅ Em estoque' : '❌ Fora de estoque'}
        
        ## Descrição
        ${descricao}
        
        ## Especificações Técnicas
        - Processador: ${processador}
        - Memória: ${memoria}
        - Armazenamento: ${armazenamento}
        - Tela: ${tela}
        
        ## Cores Disponíveis
        Principal: ${corPrincipal}
        Secundária: ${corSecundaria}
        ${outrasCorres.length > 0 ? `Outras cores: ${outrasCorres.join(', ')}` : 'Sem outras cores disponíveis'}
    `;
}

// Exemplo de uso
const informacoesProduto = formatarProduto(produto);
console.log(informacoesProduto);

// Exemplo com destructuring em parâmetros de função
function calcularDesconto({ preco }, percentualDesconto) {
    const valorDesconto = preco * (percentualDesconto / 100);
    return preco - valorDesconto;
}

console.log(`Preço com 15% de desconto: R$ ${calcularDesconto(produto, 15).toFixed(2)}`);
```

### Exercício 11.2: Spread e Rest Operators
**Exercício:** Use os operadores spread e rest para manipular arrays e objetos.

**Resposta:**
```javascript
// Arrays originais
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

// Spread com arrays
const todosNumeros = [...numeros1, ...numeros2];
console.log("Todos os números:", todosNumeros); // [1, 2, 3, 4, 5, 6]

// Criando uma cópia de array com spread
const copiaNumeros = [...numeros1];
copiaNumeros.push(10);
console.log("Original:", numeros1); // [1, 2, 3] (não foi modificado)
console.log("Cópia modificada:", copiaNumeros); // [1, 2, 3, 10]

// Objetos originais
const pessoa = {
    nome: "Ana",
    idade: 28
};

const endereco = {
    cidade: "São Paulo",
    estado: "SP"
};

// Spread com objetos
const pessoaCompleta = {
    ...pessoa,
    ...endereco,
    profissao: "Desenvolvedora"
};

console.log("Pessoa completa:", pessoaCompleta);
// { nome: "Ana", idade: 28, cidade: "São Paulo", estado: "SP", profissao: "Desenvolvedora" }

// Rest operator em parâmetros de função
function somarNumeros(primeiro, segundo, ...resto) {
    console.log("Primeiro:", primeiro);
    console.log("Segundo:", segundo);
    console.log("Resto:", resto);
    
    let soma = primeiro + segundo;
    for (const num of resto) {
        soma += num;
    }
    
    return soma;
}

console.log("Soma total:", somarNumeros(10, 20, 30, 40, 50)); // 150

// Destructuring com rest
const [primeiro, ...restante] = todosNumeros;
console.log("Primeiro número:", primeiro); // 1
console.log("Restante dos números:", restante); // [2, 3, 4, 5, 6]

const { nome, ...outrasPropriedades } = pessoaCompleta;
console.log("Nome:", nome); // "Ana"
console.log("Outras propriedades:", outrasPropriedades);
// { idade: 28, cidade: "São Paulo", estado: "SP", profissao: "Desenvolvedora" }

// Exemplo prático: função para mesclar configurações
function criarConfiguracao(configPadrao, configUsuario) {
    return {
        ...configPadrao,
        ...configUsuario
    };
}

const configPadrao = {
    tema: "claro",
    fonte: "Arial",
    tamanhoFonte: 12,
    mostrarNotificacoes: true
};

const configUsuario = {
    tema: "escuro",
    tamanhoFonte: 14
};

const configFinal = criarConfiguracao(configPadrao, configUsuario);
console.log("Configuração final:", configFinal);
// { tema: "escuro", fonte: "Arial", tamanhoFonte: 14, mostrarNotificacoes: true }
```

### Exercício 11.3: Módulos
**Exercício:** Crie um sistema de módulos com funções de utilidade para manipulação de strings e números.

**Resposta:**
```javascript
// Arquivo: utils/stringUtils.js
export function capitalizar(texto) {
    if (!texto) return '';
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

export function inverter(texto) {
    return texto.split('').reverse().join('');
}

export function contarPalavras(texto) {
    return texto.trim().split(/\s+/).length;
}

export function abreviar(texto, maxCaracteres = 100) {
    if (texto.length <= maxCaracteres) return texto;
    return texto.slice(0, maxCaracteres) + '...';
}

// Arquivo: utils/numberUtils.js
export function formatarMoeda(valor, moeda = 'BRL') {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: moeda
    }).format(valor);
}

export function calcularPorcentagem(valor, percentual) {
    return (valor * percentual) / 100;
}

export function arredondar(numero, casasDecimais = 2) {
    const fator = Math.pow(10, casasDecimais);
    return Math.round(numero * fator) / fator;
}

// Exportação padrão
export default {
    formatarMoeda,
    calcularPorcentagem,
    arredondar
};

// Arquivo: utils/index.js
// Reexportando todos os módulos
export * from './stringUtils.js';
export * from './numberUtils.js';

// Arquivo: app.js
// Importando funções específicas
import { capitalizar, inverter } from './utils/stringUtils.js';
import { formatarMoeda } from './utils/numberUtils.js';

// Ou importando tudo de um módulo
import * as StringUtils from './utils/stringUtils.js';

// Ou importando a exportação padrão
import NumberUtils from './utils/numberUtils.js';

// Ou importando tudo de uma vez através do arquivo index
import * as Utils from './utils/index.js';

// Exemplos de uso
console.log(capitalizar('javascript')); // "Javascript"
console.log(inverter('olá mundo')); // "odnum álo"
console.log(formatarMoeda(1234.56)); // "R$ 1.234,56"

console.log(StringUtils.contarPalavras('JavaScript é incrível!')); // 3
console.log(NumberUtils.arredondar(3.14159, 3)); // 3.142

console.log(Utils.abreviar('Este é um texto muito longo que será abreviado', 20)); // "Este é um texto muit..."
```

## 12. Depuração e Boas Práticas

### Exercício 12.1: Tratamento de Erros
**Exercício:** Crie uma função que valida um formulário de cadastro e usa try/catch para tratar erros.

**Resposta:**
```javascript
// Classe personalizada para erros de validação
class ErroValidacao extends Error {
    constructor(campo, mensagem) {
        super(mensagem);
        this.name = "ErroValidacao";
        this.campo = campo;
    }
}

// Função para validar um formulário de cadastro
function validarFormularioCadastro(dados) {
    try {
        // Validar nome
        if (!dados.nome) {
            throw new ErroValidacao("nome", "O nome é obrigatório");
        }
        
        if (dados.nome.length < 3) {
            throw new ErroValidacao("nome", "O nome deve ter pelo menos 3 caracteres");
        }
        
        // Validar email
        if (!dados.email) {
            throw new ErroValidacao("email", "O email é obrigatório");
        }
        
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(dados.email)) {
            throw new ErroValidacao("email", "Email inválido");
        }
        
        // Validar senha
        if (!dados.senha) {
            throw new ErroValidacao("senha", "A senha é obrigatória");
        }
        
        if (dados.senha.length < 6) {
            throw new ErroValidacao("senha", "A senha deve ter pelo menos 6 caracteres");
        }
        
        // Validar confirmação de senha
        if (dados.senha !== dados.confirmacaoSenha) {
            throw new ErroValidacao("confirmacaoSenha", "As senhas não coincidem");
        }
        
        // Validar idade
        if (dados.idade !== undefined) {
            const idade = Number(dados.idade);
            
            if (isNaN(idade)) {
                throw new ErroValidacao("idade", "A idade deve ser um número");
            }
            
            if (idade < 18) {
                throw new ErroValidacao("idade", "Você deve ter pelo menos 18 anos");
            }
        }
        
        // Se chegou até aqui, o formulário é válido
        return {
            valido: true,
            mensagem: "Formulário válido!"
        };
        
    } catch (erro) {
        if (erro instanceof ErroValidacao) {
            // Tratar erros de validação
            console.error(`Erro no campo ${erro.campo}: ${erro.message}`);
            
            return {
                valido: false,
                campo: erro.campo,
                mensagem: erro.message
            };
        } else {
            // Tratar outros tipos de erros
            console.error("Erro inesperado:", erro);
            
            return {
                valido: false,
                mensagem: "Ocorreu um erro inesperado. Tente novamente."
            };
        }
    } finally {
        console.log("Validação concluída");
    }
}

// Exemplos de uso
const dadosValidos = {
    nome: "Maria Silva",
    email: "maria@exemplo.com",
    senha: "senha123",
    confirmacaoSenha: "senha123",
    idade: 25
};

const dadosInvalidos = {
    nome: "Jo",
    email: "email-invalido",
    senha: "123",
    confirmacaoSenha: "456",
    idade: 16
};

console.log(validarFormularioCadastro(dadosValidos));
console.log(validarFormularioCadastro(dadosInvalidos));

// Implementação em um formulário HTML
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCadastro');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const dados = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                senha: document.getElementById('senha').value,
                confirmacaoSenha: document.getElementById('confirmacaoSenha').value,
                idade: document.getElementById('idade').value
            };
            
            // Limpar mensagens de erro anteriores
            document.querySelectorAll('.erro-mensagem').forEach(el => {
                el.textContent = '';
            });
            
            // Validar o formulário
            const resultado = validarFormularioCadastro(dados);
            
            if (resultado.valido) {
                // Formulário válido, poderia enviar para o servidor
                alert("Cadastro realizado com sucesso!");
                form.reset();
            } else {
                // Exibir mensagem de erro no campo específico
                if (resultado.campo) {
                    const campoErro = document.getElementById(`erro-${resultado.campo}`);
                    if (campoErro) {
                        campoErro.textContent = resultado.mensagem;
                    }
                } else {
                    // Erro geral
                    alert(resultado.mensagem);
                }
            }
        });
    }
});
```

### Exercício 12.2: Boas Práticas de Código
**Exercício:** Refatore o código abaixo seguindo boas práticas de programação JavaScript.

**Código Original:**
```javascript
function f(x, y) {
    var a = x + y;
    var b = x * y;
    var c = a + b;
    return c;
}

var arr = [1, 2, 3, 4, 5];
var res = 0;
for (var i = 0; i < arr.length; i++) {
    res = res + arr[i];
}

function p(n) {
    if (n <= 1) return false;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
```

**Resposta (Código Refatorado):**
```javascript
/**
 * Calcula a soma e o produto de dois números e retorna a soma desses resultados.
 * @param {number} x - Primeiro número.
 * @param {number} y - Segundo número.
 * @returns {number} A soma de (x + y) e (x * y).
 */
function calcularSomaEProduto(x, y) {
    const soma = x + y;
    const produto = x * y;
    return soma + produto;
}

/**
 * Calcula a soma de todos os elementos em um array.
 * @param {number[]} numeros - Array de números.
 * @returns {number} A soma de todos os elementos.
 */
function somarArray(numeros) {
    // Usando reduce para somar os elementos
    return numeros.reduce((acumulador, atual) => acumulador + atual, 0);
    
    // Alternativa com for...of
    /*
    let soma = 0;
    for (const numero of numeros) {
        soma += numero;
    }
    return soma;
    */
}

/**
 * Verifica se um número é primo.
 * @param {number} numero - O número a ser verificado.
 * @returns {boolean} Verdadeiro se o número for primo, falso caso contrário.
 */
function ehPrimo(numero) {
    // Casos especiais
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    
    // Verificações de otimização
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    
    // Verificar apenas divisores da forma 6k ± 1
    const limite = Math.sqrt(numero);
    for (let i = 5; i <= limite; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }
    
    return true;
}

// Exemplos de uso
const resultado1 = calcularSomaEProduto(3, 4);
console.log("Resultado da função calcularSomaEProduto:", resultado1); // 19 (3+4 + 3*4 = 7 + 12 = 19)

const numeros = [1, 2, 3, 4, 5];
const resultado2 = somarArray(numeros);
console.log("Soma do array:", resultado2); // 15

console.log("7 é primo?", ehPrimo(7)); // true
console.log("12 é primo?", ehPrimo(12)); // false
```

### Exercício 12.3: Testes Básicos
**Exercício:** Escreva testes simples para as funções do exercício anterior.

**Resposta:**
```javascript
// Arquivo: testes.js

// Importando as funções a serem testadas
// (Em um ambiente real, você importaria as funções de outro arquivo)
// import { calcularSomaEProduto, somarArray, ehPrimo } from './funcoes.js';

// Framework de testes simples
function executarTestes() {
    let testesPassados = 0;
    let testesTotais = 0;
    
    // Função auxiliar para verificar se um teste passou
    function verificar(descricao, condicao) {
        testesTotais++;
        
        if (condicao) {
            console.log(`✅ PASSOU: ${descricao}`);
            testesPassados++;
        } else {
            console.error(`❌ FALHOU: ${descricao}`);
        }
    }
    
    // Testes para calcularSomaEProduto
    console.log("\n--- Testes para calcularSomaEProduto ---");
    
    verificar(
        "calcularSomaEProduto(3, 4) deve retornar 19",
        calcularSomaEProduto(3, 4) === 19
    );
    
    verificar(
        "calcularSomaEProduto(0, 0) deve retornar 0",
        calcularSomaEProduto(0, 0) === 0
    );
    
    verificar(
        "calcularSomaEProduto(-2, 3) deve retornar -5",
        calcularSomaEProduto(-2, 3) === -5
    );
    
    // Testes para somarArray
    console.log("\n--- Testes para somarArray ---");
    
    verificar(
        "somarArray([1, 2, 3, 4, 5]) deve retornar 15",
        somarArray([1, 2, 3, 4, 5]) === 15
    );
    
    verificar(
        "somarArray([]) deve retornar 0",
        somarArray([]) === 0
    );
    
    verificar(
        "somarArray([-1, 1]) deve retornar 0",
        somarArray([-1, 1]) === 0
    );
    
    // Testes para ehPrimo
    console.log("\n--- Testes para ehPrimo ---");
    
    verificar(
        "ehPrimo(2) deve retornar true",
        ehPrimo(2) === true
    );
    
    verificar(
        "ehPrimo(7) deve retornar true",
        ehPrimo(7) === true
    );
    
    verificar(
        "ehPrimo(11) deve retornar true",
        ehPrimo(11) === true
    );
    
    verificar(
        "ehPrimo(1) deve retornar false",
        ehPrimo(1) === false
    );
    
    verificar(
        "ehPrimo(4) deve retornar false",
        ehPrimo(4) === false
    );
    
    verificar(
        "ehPrimo(15) deve retornar false",
        ehPrimo(15) === false
    );
    
    // Resumo dos testes
    console.log("\n--- Resumo dos Testes ---");
    console.log(`Testes passados: ${testesPassados}/${testesTotais} (${Math.round(testesPassados/testesTotais*100)}%)`);
    
    if (testesPassados === testesTotais) {
        console.log("🎉 Todos os testes passaram!");
    } else {
        console.log(`😢 ${testesTotais - testesPassados} teste(s) falharam.`);
    }
}

// Executar os testes
executarTestes();
```
