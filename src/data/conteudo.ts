// Estrutura de dados para o conteúdo do curso
export interface Topico {
  id: string;
  titulo: string;
  conteudo: string;
}

export interface Exercicio {
  id: string;
  titulo: string;
  enunciado: string;
  dica?: string;
}

export interface Modulo {
  id: string;
  titulo: string;
  descricao: string;
  topicos: Topico[];
  exercicios: Exercicio[];
}

export const conteudoCurso: Modulo[] = [
  {
    id: 'introducao',
    titulo: 'Introdução ao JavaScript',
    descricao: 'Conheça a história, evolução e importância do JavaScript no desenvolvimento web.',
    topicos: [
      {
        id: 'historia',
        titulo: 'História e evolução do JavaScript',
        conteudo: `
          <p>JavaScript foi criado em 1995 por Brendan Eich enquanto trabalhava na Netscape. Originalmente chamado de Mocha, depois LiveScript, e finalmente JavaScript, a linguagem foi desenvolvida em apenas 10 dias.</p>
          <p>Apesar do nome similar, JavaScript não tem relação direta com Java. O nome foi escolhido principalmente por razões de marketing, já que Java era muito popular na época.</p>
          <p>Ao longo dos anos, JavaScript evoluiu significativamente:</p>
          <ul>
            <li><strong>1997:</strong> Foi padronizado pela ECMA International como ECMAScript.</li>
            <li><strong>2005:</strong> O termo "Ajax" foi cunhado, marcando o início do JavaScript moderno para aplicações web interativas.</li>
            <li><strong>2009:</strong> Node.js foi criado, permitindo JavaScript no lado do servidor.</li>
            <li><strong>2015:</strong> ECMAScript 6 (ES6) trouxe grandes melhorias à linguagem.</li>
            <li><strong>Atualmente:</strong> JavaScript é uma das linguagens mais populares do mundo, usada tanto no frontend quanto no backend.</li>
          </ul>
        `
      },
      {
        id: 'importancia',
        titulo: 'Importância do JavaScript no desenvolvimento web',
        conteudo: `
          <p>JavaScript é fundamental para o desenvolvimento web moderno por várias razões:</p>
          <ul>
            <li><strong>Ubiquidade:</strong> É suportado por todos os navegadores modernos sem necessidade de plugins.</li>
            <li><strong>Versatilidade:</strong> Pode ser usado para desenvolvimento frontend, backend, mobile e desktop.</li>
            <li><strong>Interatividade:</strong> Permite criar interfaces dinâmicas e responsivas.</li>
            <li><strong>Ecossistema:</strong> Possui um vasto ecossistema de bibliotecas e frameworks (React, Angular, Vue, Express, etc.).</li>
            <li><strong>Comunidade:</strong> Tem uma das maiores e mais ativas comunidades de desenvolvedores.</li>
          </ul>
          <p>Atualmente, JavaScript é a única linguagem de programação nativa dos navegadores, tornando-a essencial para qualquer desenvolvedor web.</p>
        `
      },
      {
        id: 'ambiente',
        titulo: 'Configuração do ambiente de desenvolvimento',
        conteudo: `
          <p>Para começar a programar em JavaScript, você precisa de ferramentas básicas:</p>
          <ol>
            <li><strong>Editor de código:</strong> Visual Studio Code, Sublime Text, Atom ou qualquer editor de sua preferência.</li>
            <li><strong>Navegador web:</strong> Chrome, Firefox, Edge ou Safari com ferramentas de desenvolvedor.</li>
            <li><strong>Node.js (opcional):</strong> Para executar JavaScript fora do navegador.</li>
          </ol>
          <p>As ferramentas de desenvolvedor do navegador são essenciais para depuração e testes. Para acessá-las:</p>
          <ul>
            <li>Chrome/Edge: F12 ou Ctrl+Shift+I (Cmd+Option+I no Mac)</li>
            <li>Firefox: F12 ou Ctrl+Shift+I</li>
            <li>Safari: Cmd+Option+I (precisa habilitar nas preferências)</li>
          </ul>
        `
      },
      {
        id: 'incluir-js',
        titulo: 'Como incluir JavaScript em uma página HTML',
        conteudo: `
          <p>Existem três maneiras principais de incluir JavaScript em uma página HTML:</p>
          
          <h4>1. JavaScript interno (dentro da tag script)</h4>
          <pre><code>&lt;script&gt;
  // Seu código JavaScript aqui
  alert("Olá, mundo!");
&lt;/script&gt;</code></pre>

          <h4>2. JavaScript externo (arquivo separado)</h4>
          <pre><code>&lt;script src="caminho/para/seu-arquivo.js"&gt;&lt;/script&gt;</code></pre>
          
          <h4>3. JavaScript inline (em atributos HTML)</h4>
          <pre><code>&lt;button onclick="alert('Botão clicado!')"&gt;Clique em mim&lt;/button&gt;</code></pre>
          
          <p><strong>Melhores práticas:</strong></p>
          <ul>
            <li>Prefira arquivos externos para código reutilizável e melhor organização.</li>
            <li>Coloque scripts no final do body para melhor performance de carregamento.</li>
            <li>Use atributos async ou defer quando apropriado.</li>
            <li>Evite JavaScript inline para manter separação entre conteúdo e comportamento.</li>
          </ul>
        `
      },
      {
        id: 'console',
        titulo: 'Ferramentas de desenvolvimento (Console do navegador)',
        conteudo: `
          <p>O console do navegador é uma ferramenta poderosa para desenvolvimento JavaScript:</p>
          
          <h4>Principais usos do console:</h4>
          <ul>
            <li><strong>Depuração:</strong> Verificar valores de variáveis e fluxo de execução.</li>
            <li><strong>Testes:</strong> Executar código JavaScript diretamente.</li>
            <li><strong>Monitoramento:</strong> Verificar erros e avisos.</li>
            <li><strong>Análise de performance:</strong> Medir tempo de execução.</li>
          </ul>
          
          <h4>Métodos comuns do console:</h4>
          <pre><code>console.log("Mensagem informativa");
console.error("Mensagem de erro");
console.warn("Aviso");
console.table([{nome: "João", idade: 25}, {nome: "Maria", idade: 30}]);
console.time("Timer") e console.timeEnd("Timer") // Para medir tempo</code></pre>
          
          <p>Além do console, as ferramentas de desenvolvedor oferecem recursos para:</p>
          <ul>
            <li>Inspecionar e modificar o DOM</li>
            <li>Analisar requisições de rede</li>
            <li>Depurar código com breakpoints</li>
            <li>Analisar performance</li>
            <li>Emular dispositivos móveis</li>
          </ul>
        `
      }
    ],
    exercicios: [
      {
        id: 'ex-1-1',
        titulo: 'Incluindo JavaScript em HTML',
        enunciado: 'Crie uma página HTML simples e inclua um script JavaScript que exiba um alerta com a mensagem "Olá, mundo!".',
        dica: 'Use a tag script dentro do body do HTML.'
      },
      {
        id: 'ex-1-2',
        titulo: 'Usando o Console',
        enunciado: 'Escreva um código JavaScript que imprima no console do navegador seu nome e a data atual.',
        dica: 'Use console.log() e o objeto Date para obter a data atual.'
      }
    ]
  },
  {
    id: 'fundamentos',
    titulo: 'Fundamentos da Linguagem',
    descricao: 'Aprenda os conceitos básicos de sintaxe, variáveis, tipos de dados e operadores em JavaScript.',
    topicos: [
      {
        id: 'sintaxe',
        titulo: 'Sintaxe básica',
        conteudo: `
          <p>A sintaxe do JavaScript é semelhante a outras linguagens como C, Java e PHP. Aqui estão os elementos básicos:</p>
          
          <h4>Instruções e ponto-e-vírgula</h4>
          <pre><code>let x = 5;           // Declaração de variável
console.log(x);      // Chamada de função
x = x + 1;           // Expressão</code></pre>
          <p>O ponto-e-vírgula (;) é opcional em JavaScript, mas é uma boa prática incluí-lo.</p>
          
          <h4>Case sensitivity</h4>
          <p>JavaScript é case sensitive. Por exemplo, <code>variavel</code> e <code>Variavel</code> são variáveis diferentes.</p>
          
          <h4>Espaços em branco</h4>
          <p>JavaScript ignora espaços extras, tabs e quebras de linha, permitindo formatar o código para melhor legibilidade.</p>
          
          <h4>Blocos de código</h4>
          <pre><code>if (condicao) {
    // Este é um bloco de código
    let x = 10;
    console.log(x);
}</code></pre>
          <p>Blocos são delimitados por chaves { } e agrupam instruções.</p>
        `
      },
      {
        id: 'comentarios',
        titulo: 'Comentários',
        conteudo: `
          <p>Comentários são trechos de texto ignorados pelo interpretador JavaScript. Eles servem para documentar o código e torná-lo mais compreensível.</p>
          
          <h4>Comentários de linha única</h4>
          <pre><code>// Este é um comentário de linha única
let x = 5; // Também pode ser usado após uma instrução</code></pre>
          
          <h4>Comentários de múltiplas linhas</h4>
          <pre><code>/* 
   Este é um comentário
   de múltiplas linhas
   que pode se estender por vários parágrafos
*/</code></pre>
          
          <p><strong>Boas práticas para comentários:</strong></p>
          <ul>
            <li>Use comentários para explicar "por que" e não "o que" (o código já mostra o que está sendo feito)</li>
            <li>Mantenha comentários atualizados quando o código mudar</li>
            <li>Seja conciso e claro</li>
            <li>Use comentários para documentar funções, parâmetros e valores de retorno</li>
          </ul>
        `
      },
      {
        id: 'variaveis',
        titulo: 'Variáveis e constantes (var, let, const)',
        conteudo: `
          <p>Variáveis são "contêineres" para armazenar valores. Em JavaScript, existem três formas de declarar variáveis:</p>
          
          <h4>var (forma antiga)</h4>
          <pre><code>var nome = "João";
var idade = 25;
var aprovado = true;</code></pre>
          <p>Características do var:</p>
          <ul>
            <li>Escopo de função ou global (não tem escopo de bloco)</li>
            <li>Pode ser redeclarada</li>
            <li>Sofre hoisting (elevação)</li>
          </ul>
          
          <h4>let (introduzido no ES6)</h4>
          <pre><code>let nome = "Maria";
let idade = 30;
let aprovado = false;</code></pre>
          <p>Características do let:</p>
          <ul>
            <li>Escopo de bloco</li>
            <li>Não pode ser redeclarada no mesmo escopo</li>
            <li>Pode ter seu valor alterado</li>
          </ul>
          
          <h4>const (introduzido no ES6)</h4>
          <pre><code>const PI = 3.14159;
const NOME_USUARIO = "admin";
const CORES = ["vermelho", "verde", "azul"];</code></pre>
          <p>Características do const:</p>
          <ul>
            <li>Escopo de bloco</li>
            <li>Não pode ser redeclarada</li>
            <li>Não pode ter seu valor reatribuído</li>
            <li>Para objetos e arrays, o conteúdo pode ser modificado (são imutáveis apenas na referência)</li>
          </ul>
          
          <h4>Melhores práticas:</h4>
          <ul>
            <li>Use const por padrão</li>
            <li>Use let quando o valor precisar mudar</li>
            <li>Evite usar var em código moderno</li>
            <li>Use nomes descritivos para variáveis</li>
            <li>Use camelCase para nomes de variáveis (ex: nomeCompleto)</li>
            <li>Use SNAKE_CASE_MAIÚSCULO para constantes fixas (ex: MAX_TENTATIVAS)</li>
          </ul>
        `
      },
      {
        id: 'tipos-dados',
        titulo: 'Tipos de dados primitivos',
        conteudo: `
          <p>JavaScript tem sete tipos de dados primitivos:</p>
          
          <h4>1. String</h4>
          <pre><code>let nome = "Maria";
let sobrenome = 'Silva';
let frase = \`Olá, \${nome}\`; // Template string (ES6)</code></pre>
          <p>Strings são sequências de caracteres, delimitadas por aspas simples, duplas ou crases (template strings).</p>
          
          <h4>2. Number</h4>
          <pre><code>let idade = 25;        // Inteiro
let preco = 19.99;     // Decimal
let infinito = Infinity;
let naoNumero = NaN;   // Not a Number</code></pre>
          <p>JavaScript não distingue entre inteiros e decimais, todos são do tipo Number.</p>
          
          <h4>3. Boolean</h4>
          <pre><code>let aprovado = true;
let reprovado = false;</code></pre>
          <p>Representa valores lógicos: verdadeiro (true) ou falso (false).</p>
          
          <h4>4. Null</h4>
          <pre><code>let vazio = null;</code></pre>
          <p>Representa a ausência intencional de qualquer valor ou objeto.</p>
          
          <h4>5. Undefined</h4>
          <pre><code>let naoDefinido;
console.log(naoDefinido); // undefined</code></pre>
          <p>Indica que uma variável foi declarada mas não recebeu um valor.</p>
          
          <h4>6. Symbol (ES6)</h4>
          <pre><code>const id = Symbol('id');
const outroId = Symbol('id');
console.log(id === outroId); // false</code></pre>
          <p>Valores únicos e imutáveis, usados principalmente como identificadores para propriedades de objetos.</p>
          
          <h4>7. BigInt (adicionado recentemente)</h4>
          <pre><code>const numeroGrande = 9007199254740991n;
const outroBigInt = BigInt(9007199254740991);</code></pre>
          <p>Representa inteiros maiores que 2^53 - 1, o maior número que o tipo Number pode representar com precisão.</p>
          
          <h4>Verificando tipos com typeof</h4>
          <pre><code>console.log(typeof "texto");     // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (isso é considerado um bug)
console.log(typeof Symbol());   // "symbol"
console.log(typeof 42n);        // "bigint"</code></pre>
        `
      },
      {
        id: 'conversao-tipos',
        titulo: 'Conversão de tipos',
        conteudo: `
          <p>JavaScript é uma linguagem de tipagem dinâmica, o que significa que os tipos podem ser convertidos automaticamente (conversão implícita) ou manualmente (conversão explícita).</p>
          
          <h4>Conversão Implícita</h4>
          <p>Ocorre automaticamente quando operações são realizadas entre tipos diferentes:</p>
          <pre><code>let resultado = "5" + 2;     // "52" (string)
let resultado2 = "5" - 2;    // 3 (number)
let resultado3 = "5" * "2";  // 10 (number)
let booleano = "texto" ? true : false;  // true</code></pre>
          
          <h4>Conversão Explícita</h4>
          <p>Realizada intencionalmente usando funções de conversão:</p>
          
          <p><strong>Para String:</strong></p>
          <pre><code>let num = 42;
let str1 = String(num);      // "42"
let str2 = num.toString();   // "42"
let str3 = num + "";         // "42" (implícita)</code></pre>
          
          <p><strong>Para Number:</strong></p>
          <pre><code>let str = "42";
let num1 = Number(str);      // 42
let num2 = parseInt(str);    // 42 (para inteiros)
let num3 = parseFloat("42.5"); // 42.5 (para decimais)
let num4 = +"42";            // 42 (operador unário +)</code></pre>
          
          <p><strong>Para Boolean:</strong></p>
          <pre><code>let valor = "texto";
let bool1 = Boolean(valor);  // true
let bool2 = !!valor;         // true (dupla negação)</code></pre>
          
          <h4>Valores Falsy e Truthy</h4>
          <p>Em JavaScript, alguns valores são considerados falsy (avaliados como false em contextos booleanos):</p>
          <ul>
            <li>false</li>
            <li>0, -0, 0n (BigInt zero)</li>
            <li>""  (string vazia)</li>
            <li>null</li>
            <li>undefined</li>
            <li>NaN</li>
          </ul>
          <p>Todos os outros valores são truthy (avaliados como true).</p>
          
          <h4>Casos especiais</h4>
          <pre><code>Number("texto");     // NaN
parseInt("42abc");   // 42 (ignora caracteres não numéricos após o número)
Number(null);        // 0
Number(undefined);   // NaN
Number(true);        // 1
Number(false);       // 0</code></pre>
        `
      },
      {
        id: 'operadores',
        titulo: 'Operadores (aritméticos, atribuição, comparação, lógicos)',
        conteudo: `
          <h4>Operadores Aritméticos</h4>
          <pre><code>let a = 10;
let b = 3;

console.log(a + b);  // 13 (adição)
console.log(a - b);  // 7 (subtração)
console.log(a * b);  // 30 (multiplicação)
console.log(a / b);  // 3.3333... (divisão)
console.log(a % b);  // 1 (resto da divisão)
console.log(a ** b); // 1000 (exponenciação, ES6)

// Incremento e decremento
let c = 5;
console.log(c++);    // 5 (retorna e depois incrementa)
console.log(++c);    // 7 (incrementa e depois retorna)
console.log(c--);    // 7 (retorna e depois decrementa)
console.log(--c);    // 5 (decrementa e depois retorna)</code></pre>
          
          <h4>Operadores de Atribuição</h4>
          <pre><code>let x = 10;        // Atribuição básica
x += 5;            // x = x + 5 (15)
x -= 3;            // x = x - 3 (12)
x *= 2;            // x = x * 2 (24)
x /= 4;            // x = x / 4 (6)
x %= 4;            // x = x % 4 (2)
x **= 3;           // x = x ** 3 (8)</code></pre>
          
          <h4>Operadores de Comparação</h4>
          <pre><code>let a = 5;
let b = "5";

console.log(a == b);   // true (igualdade com conversão de tipo)
console.log(a === b);  // false (igualdade estrita, sem conversão)
console.log(a != b);   // false (desigualdade com conversão)
console.log(a !== b);  // true (desigualdade estrita)

console.log(a > 3);    // true (maior que)
console.log(a < 10);   // true (menor que)
console.log(a >= 5);   // true (maior ou igual a)
console.log(a <= 4);   // false (menor ou igual a)</code></pre>
          
          <h4>Operadores Lógicos</h4>
          <pre><code>let x = true;
let y = false;

console.log(x && y);  // false (AND lógico)
console.log(x || y);  // true (OR lógico)
console.log(!x);      // false (NOT lógico)

// Avaliação de curto-circuito
console.log(true && "Olá");     // "Olá"
console.log(false && "Olá");    // false
console.log(true || "Olá");     // true
console.log(false || "Olá");    // "Olá"

// Operador de coalescência nula (ES2020)
let valor = null;
let padrao = "valor padrão";
console.log(valor ?? padrao);  // "valor padrão"</code></pre>
          
          <h4>Operador Ternário</h4>
          <pre><code>let idade = 20;
let status = (idade >= 18) ? "Adulto" : "Menor";
console.log(status);  // "Adulto"</code></pre>
          
          <h4>Operadores de String</h4>
          <pre><code>let nome = "João";
let sobrenome = "Silva";
console.log(nome + " " + sobrenome);  // "João Silva" (concatenação)</code></pre>
          
          <h4>Operadores Bit a Bit</h4>
          <pre><code>let a = 5;  // 101 em binário
let b = 3;  // 011 em binário

console.log(a & b);   // 1 (AND bit a bit: 001)
console.log(a | b);   // 7 (OR bit a bit: 111)
console.log(a ^ b);   // 6 (XOR bit a bit: 110)
console.log(~a);      // -6 (NOT bit a bit)
console.log(a << 1);  // 10 (deslocamento à esquerda: 1010)
console.log(a >> 1);  // 2 (deslocamento à direita: 10)</code></pre>
        `
      },
      {
        id: 'precedencia',
        titulo: 'Precedência de operadores',
        conteudo: `
          <p>A precedência de operadores determina a ordem em que as operações são processadas em uma expressão. Operadores com maior precedência são avaliados primeiro.</p>
          
          <h4>Ordem de precedência (do mais alto para o mais baixo):</h4>
          <ol>
            <li><strong>Agrupamento:</strong> ( )</li>
            <li><strong>Acesso a propriedades e chamadas:</strong> . [] ()</li>
            <li><strong>Negação/incremento:</strong> ! ~ - + ++ -- typeof void delete</li>
            <li><strong>Exponenciação:</strong> **</li>
            <li><strong>Multiplicação/divisão:</strong> * / %</li>
            <li><strong>Adição/subtração:</strong> + -</li>
            <li><strong>Deslocamento bit a bit:</strong> << >> >>></li>
            <li><strong>Comparação:</strong> < <= > >= in instanceof</li>
            <li><strong>Igualdade:</strong> == != === !==</li>
            <li><strong>AND bit a bit:</strong> &</li>
            <li><strong>XOR bit a bit:</strong> ^</li>
            <li><strong>OR bit a bit:</strong> |</li>
            <li><strong>AND lógico:</strong> &&</li>
            <li><strong>OR lógico:</strong> ||</li>
            <li><strong>Coalescência nula:</strong> ??</li>
            <li><strong>Condicional (ternário):</strong> ?:</li>
            <li><strong>Atribuição:</strong> = += -= *= /= %= **= etc.</li>
            <li><strong>Vírgula:</strong> ,</li>
          </ol>
          
          <h4>Exemplos:</h4>
          <pre><code>// Sem parênteses (seguindo a precedência)
let resultado1 = 2 + 3 * 4;     // 14 (multiplicação tem precedência sobre adição)

// Com parênteses (alterando a precedência)
let resultado2 = (2 + 3) * 4;   // 20 (parênteses têm a maior precedência)

// Combinando operadores
let x = 5;
let y = 10;
let z = 15;
let resultado3 = x + y * z / 5; // 35 (primeiro y*z, depois /5, por fim +x)
let resultado4 = (x + y) * z / 5; // 45 (primeiro (x+y), depois *z, por fim /5)

// Operadores lógicos
let a = true;
let b = false;
let c = true;
let resultado5 = a && b || c;   // true (&& tem precedência sobre ||)
let resultado6 = a && (b || c); // true (parênteses alteram a precedência)</code></pre>
          
          <p><strong>Dica:</strong> Quando em dúvida sobre a precedência, use parênteses para tornar a intenção clara. Isso melhora a legibilidade do código e evita erros sutis.</p>
        `
      }
    ],
    exercicios: [
      {
        id: 'ex-2-1',
        titulo: 'Variáveis e Tipos de Dados',
        enunciado: 'Declare variáveis usando var, let e const. Atribua valores de diferentes tipos (string, number, boolean, array, object) e imprima o tipo de cada uma usando typeof.',
        dica: 'Use o operador typeof para verificar o tipo de cada variável.'
      },
      {
        id: 'ex-2-2',
        titulo: 'Conversão de Tipos',
        enunciado: 'Converta os seguintes valores entre tipos diferentes: 1) String "42" para número, 2) Número 42 para string, 3) String "true" para boolean, 4) Número 0 para boolean.',
        dica: 'Use funções como Number(), String(), Boolean() ou métodos como toString().'
      },
      {
        id: 'ex-2-3',
        titulo: 'Operadores',
        enunciado: 'Calcule o resultado das seguintes expressões: 1) 10 + 5 * 2, 2) (10 + 5) * 2, 3) 10 % 3, 4) "10" + 5, 5) "10" - 5, 6) 10 == "10", 7) 10 === "10"',
        dica: 'Preste atenção à precedência de operadores e à conversão implícita de tipos.'
      }
    ]
  },
  {
    id: 'estruturas-controle',
    titulo: 'Estruturas de Controle',
    descricao: 'Aprenda a controlar o fluxo de execução do seu código com condicionais e loops.',
    topicos: [
      {
        id: 'condicionais',
        titulo: 'Condicionais (if, else, else if)',
        conteudo: `
          <p>As estruturas condicionais permitem executar diferentes blocos de código dependendo de condições específicas.</p>
          
          <h4>if simples</h4>
          <pre><code>let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}</code></pre>
          <p>O bloco de código dentro do if só será executado se a condição for verdadeira (truthy).</p>
          
          <h4>if...else</h4>
          <pre><code>let hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
} else {
    console.log("Boa tarde/noite!");
}</code></pre>
          <p>Se a condição for falsa, o bloco else será executado.</p>
          
          <h4>if...else if...else (múltiplas condições)</h4>
          <pre><code>let hora = 20;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}</code></pre>
          <p>Você pode encadear múltiplas condições com else if.</p>
          
          <h4>Condições aninhadas</h4>
          <pre><code>let idade = 18;
let temCarteira = true;

if (idade >= 18) {
    if (temCarteira) {
        console.log("Pode dirigir.");
    } else {
        console.log("Não pode dirigir. Precisa de carteira.");
    }
} else {
    console.log("Não pode dirigir. Menor de idade.");
}</code></pre>
          <p>É possível aninhar estruturas condicionais, mas isso pode tornar o código menos legível.</p>
          
          <h4>Operadores lógicos em condições</h4>
          <pre><code>let idade = 25;
let temCarteira = true;

// Usando AND (&&)
if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir.");
}

// Usando OR (||)
if (idade < 18 || !temCarteira) {
    console.log("Não pode dirigir.");
}</code></pre>
          
          <h4>Avaliação de curto-circuito</h4>
          <pre><code>// Se a primeira condição for falsa, a segunda nem é avaliada
if (false && funcaoQueNaoSeraExecutada()) {
    // Este bloco não será executado
}

// Se a primeira condição for verdadeira, a segunda nem é avaliada
if (true || funcaoQueNaoSeraExecutada()) {
    // Este bloco será executado
}</code></pre>
          
          <h4>Dicas para condicionais:</h4>
          <ul>
            <li>Mantenha as condições simples e legíveis</li>
            <li>Use parênteses para agrupar condições complexas</li>
            <li>Cuidado com comparações de igualdade (== vs ===)</li>
            <li>Lembre-se dos valores falsy em JavaScript</li>
          </ul>
        `
      },
      {
        id: 'operador-ternario',
        titulo: 'Operador ternário',
        conteudo: `
          <p>O operador ternário é uma forma concisa de escrever uma estrutura condicional simples. É como um if...else em uma única linha.</p>
          
          <h4>Sintaxe:</h4>
          <pre><code>condicao ? expressao1 : expressao2</code></pre>
          <p>Se a condição for verdadeira, a expressão1 é avaliada e retornada; caso contrário, a expressão2 é avaliada e retornada.</p>
          
          <h4>Exemplos básicos:</h4>
          <pre><code>// Exemplo 1: Verificar idade
let idade = 20;
let status = (idade >= 18) ? "Adulto" : "Menor";
console.log(status);  // "Adulto"

// Exemplo 2: Mensagem de saudação
let hora = 10;
let saudacao = (hora < 12) ? "Bom dia" : "Boa tarde/noite";
console.log(saudacao);  // "Bom dia"</code></pre>
          
          <h4>Operadores ternários aninhados:</h4>
          <pre><code>// Verificação de faixa etária
let idade = 15;
let faixa = (idade < 13) ? "Criança" : (idade < 18) ? "Adolescente" : "Adulto";
console.log(faixa);  // "Adolescente"

// Equivalente a:
let faixaEtaria;
if (idade < 13) {
    faixaEtaria = "Criança";
} else if (idade < 18) {
    faixaEtaria = "Adolescente";
} else {
    faixaEtaria = "Adulto";
}</code></pre>
          
          <h4>Usando com template strings:</h4>
          <pre><code>let temperatura = 28;
console.log("Está " + (temperatura > 25 ? "quente" : "agradável") + " hoje.");
// "Está quente hoje."</code></pre>
          
          <h4>Atribuição condicional:</h4>
          <pre><code>// Definir um valor padrão se a variável for undefined ou null
let nome = null;
let nomeExibicao = nome ? nome : "Usuário";
console.log(nomeExibicao);  // "Usuário"

// Forma mais moderna usando operador de coalescência nula (ES2020)
let nomeModerno = nome ?? "Usuário";
console.log(nomeModerno);  // "Usuário"</code></pre>
          
          <h4>Quando usar o operador ternário:</h4>
          <ul>
            <li>Para condicionais simples e expressões curtas</li>
            <li>Quando você precisa atribuir um valor com base em uma condição</li>
            <li>Em template strings para inserção condicional</li>
          </ul>
          
          <h4>Quando evitar o operador ternário:</h4>
          <ul>
            <li>Para lógica complexa com múltiplas operações</li>
            <li>Quando o aninhamento torna o código difícil de ler</li>
            <li>Quando você precisa executar blocos de código maiores</li>
          </ul>
        `
      },
      {
        id: 'switch-case',
        titulo: 'Switch case',
        conteudo: `
          <p>A estrutura switch é usada para selecionar um dos muitos blocos de código a serem executados, baseado em uma expressão.</p>
          
          <h4>Sintaxe básica:</h4>
          <pre><code>switch (expressao) {
    case valor1:
        // código a ser executado
        break;
    case valor2:
        // código a ser executado
        break;
    default:
        // código a ser executado se nenhum caso corresponder
}</code></pre>
          
          <h4>Exemplo simples:</h4>
          <pre><code>let dia = 3;
let nomeDia;

switch (dia) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira";
        break;
    case 4:
        nomeDia = "Quarta-feira";
        break;
    case 5:
        nomeDia = "Quinta-feira";
        break;
    case 6:
        nomeDia = "Sexta-feira";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Dia inválido";
}

console.log(nomeDia);  // "Terça-feira"</code></pre>
          
          <h4>A importância do break:</h4>
          <p>O comando break é usado para sair do switch após um caso ser executado. Sem ele, a execução continua para os próximos casos, independentemente de corresponderem ou não.</p>
          
          <pre><code>let opcao = 2;

switch (opcao) {
    case 1:
        console.log("Opção 1 selecionada");
        // Sem break, continua para o próximo caso
    case 2:
        console.log("Opção 2 selecionada");
        // Sem break, continua para o próximo caso
    case 3:
        console.log("Opção 3 selecionada");
        break;
    default:
        console.log("Opção inválida");
}

// Saída:
// "Opção 2 selecionada"
// "Opção 3 selecionada"</code></pre>
          
          <h4>Agrupando casos:</h4>
          <p>Você pode agrupar casos que compartilham o mesmo código:</p>
          
          <pre><code>let mes = "fevereiro";
let diasNoMes;

switch (mes.toLowerCase()) {
    case "janeiro":
    case "março":
    case "maio":
    case "julho":
    case "agosto":
    case "outubro":
    case "dezembro":
        diasNoMes = 31;
        break;
    case "abril":
    case "junho":
    case "setembro":
    case "novembro":
        diasNoMes = 30;
        break;
    case "fevereiro":
        diasNoMes = 28; // Ignorando anos bissextos para simplificar
        break;
    default:
        diasNoMes = "Mês inválido";
}

console.log(mes + " tem " + diasNoMes + " dias.");  // "fevereiro tem 28 dias."</code></pre>
          
          <h4>Expressões no switch:</h4>
          <p>O switch usa comparação estrita (===) entre a expressão e os valores dos casos.</p>
          
          <pre><code>// Isso não funcionará como esperado
let valor = "10";
switch (valor) {
    case 10:  // Não corresponde porque "10" !== 10
        console.log("Número 10");
        break;
    default:
        console.log("Não é o número 10");
}
// Saída: "Não é o número 10"</code></pre>
          
          <h4>Quando usar switch vs if-else:</h4>
          <ul>
            <li><strong>Use switch quando:</strong>
              <ul>
                <li>Você tem múltiplas condições baseadas no mesmo valor</li>
                <li>As comparações são de igualdade (não envolvem >, <, etc.)</li>
                <li>Há muitos caminhos possíveis baseados em um único valor</li>
              </ul>
            </li>
            <li><strong>Use if-else quando:</strong>
              <ul>
                <li>As condições são baseadas em diferentes variáveis</li>
                <li>Você precisa de comparações mais complexas (>, <, >=, etc.)</li>
                <li>Há poucas condições a verificar</li>
              </ul>
            </li>
          </ul>
        `
      },
      {
        id: 'loops-for',
        titulo: 'Loops (for, while, do-while)',
        conteudo: `
          <p>Loops (ou laços) são estruturas que permitem executar um bloco de código repetidamente enquanto uma condição for verdadeira.</p>
          
          <h4>Loop for</h4>
          <p>O loop for é usado quando você sabe antecipadamente quantas vezes deseja executar um bloco de código.</p>
          
          <pre><code>// Sintaxe básica
for (inicialização; condição; incremento) {
    // código a ser repetido
}

// Exemplo: contar de 1 a 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Saída: 1, 2, 3, 4, 5

// Exemplo: percorrer um array
const frutas = ["maçã", "banana", "laranja", "uva"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
// Saída: "maçã", "banana", "laranja", "uva"</code></pre>
          
          <h4>Loop while</h4>
          <p>O loop while executa um bloco de código enquanto uma condição específica for verdadeira. É útil quando você não sabe quantas iterações serão necessárias.</p>
          
          <pre><code>// Sintaxe básica
while (condição) {
    // código a ser repetido
}

// Exemplo: contar até 5
let contador = 1;
while (contador <= 5) {
    console.log(contador);
    contador++;
}
// Saída: 1, 2, 3, 4, 5

// Exemplo: loop com condição dinâmica
let numero = 1;
while (numero < 100) {
    console.log(numero);
    numero *= 2;  // Dobra o número a cada iteração
}
// Saída: 1, 2, 4, 8, 16, 32, 64</code></pre>
          
          <h4>Loop do-while</h4>
          <p>Similar ao while, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição for falsa inicialmente.</p>
          
          <pre><code>// Sintaxe básica
do {
    // código a ser repetido
} while (condição);

// Exemplo: contar até 5
let contador = 1;
do {
    console.log(contador);
    contador++;
} while (contador <= 5);
// Saída: 1, 2, 3, 4, 5

// Exemplo onde a condição é falsa inicialmente
let x = 10;
do {
    console.log("Este bloco será executado uma vez");
} while (x < 5);
// Saída: "Este bloco será executado uma vez"</code></pre>
          
          <h4>Controle de loops: break e continue</h4>
          
          <p><strong>break:</strong> Encerra completamente o loop.</p>
          <pre><code>// Exemplo: parar o loop quando encontrar um número específico
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Sai do loop quando i é 5
    }
    console.log(i);
}
// Saída: 1, 2, 3, 4</code></pre>
          
          <p><strong>continue:</strong> Pula a iteração atual e continua com a próxima.</p>
          <pre><code>// Exemplo: pular números pares
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Pula para a próxima iteração se i for par
    }
    console.log(i);
}
// Saída: 1, 3, 5, 7, 9</code></pre>
          
          <h4>Loops infinitos</h4>
          <p>Um loop infinito ocorre quando a condição de término nunca se torna falsa. Isso geralmente é um erro e pode travar seu programa.</p>
          
          <pre><code>// Loop infinito (evite isso!)
// for (let i = 1; i > 0; i++) {
//     console.log(i);  // Isso nunca vai parar!
// }

// Loop infinito com break (controlado)
let contador = 1;
while (true) {  // Condição sempre verdadeira
    console.log(contador);
    contador++;
    if (contador > 5) {
        break;  // Saída controlada do loop
    }
}</code></pre>
          
          <h4>Escolhendo o loop certo:</h4>
          <ul>
            <li><strong>for:</strong> Quando você sabe o número exato de iterações</li>
            <li><strong>while:</strong> Quando o número de iterações é desconhecido e depende de uma condição</li>
            <li><strong>do-while:</strong> Quando você precisa executar o código pelo menos uma vez</li>
          </ul>
        `
      },
      {
        id: 'break-continue',
        titulo: 'Break e continue',
        conteudo: `
          <p>As instruções break e continue são usadas para controlar o fluxo de execução dentro de loops, permitindo interromper ou pular iterações.</p>
          
          <h4>Instrução break</h4>
          <p>A instrução break encerra completamente a execução do loop mais interno e transfere o controle para a próxima instrução após o loop.</p>
          
          <h5>Usos comuns do break:</h5>
          <ul>
            <li>Sair de um loop quando uma condição específica é encontrada</li>
            <li>Evitar processamento desnecessário após encontrar o que estava procurando</li>
            <li>Implementar uma saída antecipada de um loop potencialmente longo</li>
          </ul>
          
          <h5>Exemplos de break:</h5>
          <pre><code>// Exemplo 1: Encontrar o primeiro número divisível por 7 em um intervalo
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log("Primeiro número divisível por 7: " + i);
        break;  // Sai do loop após encontrar o primeiro número
    }
}

// Exemplo 2: Verificar se um elemento existe em um array
const numeros = [3, 7, 2, 9, 12, 5];
let numeroEncontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 9) {
        console.log("Número 9 encontrado no índice " + i);
        numeroEncontrado = true;
        break;  // Não precisa continuar procurando
    }
}

if (!numeroEncontrado) {
    console.log("Número não encontrado");
}

// Exemplo 3: Break em loops aninhados (sai apenas do loop mais interno)
for (let i = 1; i <= 3; i++) {
    console.log("Loop externo: " + i);
    
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            console.log("  Encontrou j = " + j + ", saindo do loop interno");
            break;  // Sai apenas do loop interno
        }
        console.log("  Loop interno: " + j);
    }
}</code></pre>
          
          <h4>Instrução continue</h4>
          <p>A instrução continue pula a iteração atual do loop e passa para a próxima iteração, continuando a execução do loop.</p>
          
          <h5>Usos comuns do continue:</h5>
          <ul>
            <li>Pular elementos que não atendem a certos critérios</li>
            <li>Evitar aninhamento excessivo de condicionais</li>
            <li>Melhorar a legibilidade do código em loops com múltiplas condições</li>
          </ul>
          
          <h5>Exemplos de continue:</h5>
          <pre><code>// Exemplo 1: Imprimir apenas números ímpares
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Pula números pares
    }
    console.log("Número ímpar: " + i);
}

// Exemplo 2: Filtrar elementos em um array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Números maiores que 5:");

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] <= 5) {
        continue;  // Pula números menores ou iguais a 5
    }
    console.log(numeros[i]);
}

// Exemplo 3: Processamento condicional em um loop
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 5.5 },
    { nome: "Carla", nota: 9.0 },
    { nome: "Daniel", nota: 6.8 }
];

console.log("Alunos aprovados:");
for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota < 7) {
        continue;  // Pula alunos reprovados
    }
    console.log(alunos[i].nome + " - Nota: " + alunos[i].nota);
}</code></pre>
          
          <h4>Rótulos (Labels) com break e continue</h4>
          <p>Em JavaScript, você pode rotular loops e usar break ou continue com esses rótulos para controlar loops aninhados.</p>
          
          <pre><code>// Exemplo com rótulo e break
loopExterno: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Encontrou i=" + i + ", j=" + j + ", saindo de ambos os loops");
            break loopExterno;  // Sai do loop externo rotulado
        }
        console.log("i=" + i + ", j=" + j);
    }
}

// Exemplo com rótulo e continue
loopExterno: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            console.log("Pulando j=" + j + " para i=" + i);
            continue loopExterno;  // Pula para a próxima iteração do loop externo
        }
        console.log("i=" + i + ", j=" + j);
    }
}</code></pre>
          
          <h4>Boas práticas:</h4>
          <ul>
            <li>Use break e continue com moderação para manter o código legível</li>
            <li>Adicione comentários explicando por que você está usando break ou continue</li>
            <li>Considere refatorar código com muitos break/continue em funções separadas</li>
            <li>Use rótulos apenas quando realmente necessário, pois podem tornar o código mais difícil de entender</li>
          </ul>
        `
      },
      {
        id: 'for-of-in',
        titulo: 'For...of e for...in',
        conteudo: `
          <p>JavaScript oferece loops especializados para iterar sobre objetos e coleções: for...of e for...in. Eles simplificam a iteração em comparação com os loops tradicionais.</p>
          
          <h4>Loop for...of</h4>
          <p>Introduzido no ES6, o loop for...of itera sobre valores de objetos iteráveis (arrays, strings, Map, Set, etc.).</p>
          
          <h5>Sintaxe:</h5>
          <pre><code>for (const valor of iteravel) {
    // código a ser executado para cada valor
}</code></pre>
          
          <h5>Exemplos de for...of:</h5>
          <pre><code>// Iterando sobre um array
const frutas = ["maçã", "banana", "laranja", "uva"];

for (const fruta of frutas) {
    console.log(fruta);
}
// Saída: "maçã", "banana", "laranja", "uva"

// Iterando sobre uma string
const texto = "JavaScript";

for (const caractere of texto) {
    console.log(caractere);
}
// Saída: "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"

// Iterando sobre um Set
const conjuntoNumeros = new Set([1, 2, 3, 4, 5]);

for (const numero of conjuntoNumeros) {
    console.log(numero);
}
// Saída: 1, 2, 3, 4, 5

// Iterando sobre um Map
const mapaUsuarios = new Map([
    ["u1", { nome: "Alice", idade: 25 }],
    ["u2", { nome: "Bob", idade: 30 }]
]);

for (const entrada of mapaUsuarios) {
    console.log(entrada); // entrada é um array [chave, valor]
}
// Saída: ["u1", {nome: "Alice", idade: 25}], ["u2", {nome: "Bob", idade: 30}]

// Desestruturando entradas do Map
for (const [id, usuario] of mapaUsuarios) {
    console.log(id + ": " + usuario.nome + ", " + usuario.idade + " anos");
}
// Saída: "u1: Alice, 25 anos", "u2: Bob, 30 anos"</code></pre>
          
          <h4>Loop for...in</h4>
          <p>O loop for...in itera sobre as propriedades enumeráveis de um objeto (incluindo propriedades herdadas da cadeia de protótipos).</p>
          
          <h5>Sintaxe:</h5>
          <pre><code>for (const propriedade in objeto) {
    // código a ser executado para cada propriedade
}</code></pre>
          
          <h5>Exemplos de for...in:</h5>
          <pre><code>// Iterando sobre um objeto
const pessoa = {
    nome: "Carlos",
    idade: 28,
    profissao: "Desenvolvedor"
};

for (const prop in pessoa) {
    console.log(prop + ": " + pessoa[prop]);
}
// Saída: "nome: Carlos", "idade: 28", "profissao: Desenvolvedor"

// Verificando se a propriedade pertence ao objeto (não ao protótipo)
for (const prop in pessoa) {
    if (pessoa.hasOwnProperty(prop)) {
        console.log("Propriedade própria: " + prop);
    }
}

// Usando for...in com arrays (não recomendado)
const numeros = [10, 20, 30];
numeros.propriedadeCustom = "teste"; // Propriedade não numérica

for (const indice in numeros) {
    console.log(indice + ": " + numeros[indice]);
}
// Saída: "0: 10", "1: 20", "2: 30", "propriedadeCustom: teste"</code></pre>
          
          <h4>Diferenças importantes entre for...of e for...in</h4>
          <table border="1" style="border-collapse: collapse; width: 100%;">
            <tr>
              <th style="padding: 8px; text-align: left;">Característica</th>
              <th style="padding: 8px; text-align: left;">for...of</th>
              <th style="padding: 8px; text-align: left;">for...in</th>
            </tr>
            <tr>
              <td style="padding: 8px;">Itera sobre</td>
              <td style="padding: 8px;">Valores de objetos iteráveis</td>
              <td style="padding: 8px;">Propriedades enumeráveis de objetos</td>
            </tr>
            <tr>
              <td style="padding: 8px;">Uso com arrays</td>
              <td style="padding: 8px;">Ideal (itera sobre valores)</td>
              <td style="padding: 8px;">Não recomendado (itera sobre índices e propriedades)</td>
            </tr>
            <tr>
              <td style="padding: 8px;">Uso com objetos</td>
              <td style="padding: 8px;">Não funciona diretamente (objetos não são iteráveis por padrão)</td>
              <td style="padding: 8px;">Ideal (itera sobre propriedades)</td>
            </tr>
            <tr>
              <td style="padding: 8px;">Ordem de iteração</td>
              <td style="padding: 8px;">Segue a ordem de inserção (para a maioria dos iteráveis)</td>
              <td style="padding: 8px;">Não garante ordem específica</td>
            </tr>
            <tr>
              <td style="padding: 8px;">Inclui protótipo</td>
              <td style="padding: 8px;">Não</td>
              <td style="padding: 8px;">Sim (a menos que verificado com hasOwnProperty)</td>
            </tr>
          </table>
          
          <h4>Quando usar cada um:</h4>
          <ul>
            <li><strong>Use for...of quando:</strong>
              <ul>
                <li>Você precisa iterar sobre valores em arrays, strings, Map, Set</li>
                <li>Você quer uma sintaxe mais limpa para iteração de coleções</li>
                <li>Você precisa de uma ordem de iteração previsível</li>
              </ul>
            </li>
            <li><strong>Use for...in quando:</strong>
              <ul>
                <li>Você precisa iterar sobre as propriedades de um objeto</li>
                <li>Você precisa acessar os nomes das propriedades (não apenas os valores)</li>
                <li>Você está trabalhando com objetos que não são iteráveis</li>
              </ul>
            </li>
          </ul>
          
          <h4>Tornando objetos iteráveis para for...of</h4>
          <pre><code>const pessoa = {
    nome: "Ana",
    idade: 30,
    cidade: "São Paulo",
    [Symbol.iterator]: function* () {
        yield this.nome;
        yield this.idade;
        yield this.cidade;
    }
};

// Agora podemos usar for...of com o objeto pessoa
for (const valor of pessoa) {
    console.log(valor);
}
// Saída: "Ana", 30, "São Paulo"</code></pre>
        `
      }
    ],
    exercicios: [
      {
        id: 'ex-3-1',
        titulo: 'Condicionais',
        enunciado: 'Escreva um programa que verifica a idade de uma pessoa e retorna uma mensagem diferente para cada faixa etária: Menor de 18: "Menor de idade", Entre 18 e 65: "Adulto", Acima de 65: "Idoso".',
        dica: 'Use if, else if e else para verificar as diferentes faixas etárias.'
      },
      {
        id: 'ex-3-2',
        titulo: 'Switch Case',
        enunciado: 'Crie uma função que receba o nome de um mês e retorne o número de dias desse mês (considere um ano não bissexto).',
        dica: 'Use switch case para verificar cada mês e retornar o número correto de dias.'
      },
      {
        id: 'ex-3-3',
        titulo: 'Loops',
        enunciado: 'Escreva um programa que imprima os números de 1 a 100, mas para múltiplos de 3 imprima "Fizz" e para múltiplos de 5 imprima "Buzz". Para números que são múltiplos de ambos, imprima "FizzBuzz".',
        dica: 'Use um loop for e condicionais para verificar se o número é múltiplo de 3, 5 ou ambos.'
      }
    ]
  }
];

// Estrutura de dados para as respostas dos exercícios
export const respostasExercicios: Record<string, string> = {
  'ex-1-1': `
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-br"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Introdução ao JavaScript&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Minha primeira página com JavaScript&lt;/h1&gt;
    
    &lt;!-- Método 1: JavaScript interno --&gt;
    &lt;script&gt;
        alert("Olá, mundo!");
    &lt;/script&gt;
    
    &lt;!-- Método 2: JavaScript externo --&gt;
    &lt;!-- &lt;script src="script.js"&gt;&lt;/script&gt; --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
  `,
  'ex-1-2': `
<pre><code>// Obtendo a data atual
const dataAtual = new Date();

// Imprimindo no console
console.log("Meu nome: Seu Nome");
console.log("Data atual:", dataAtual.toLocaleDateString('pt-BR'));</code></pre>
  `,
  'ex-2-1': `
<pre><code>// Usando var (evite usar em código moderno)
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
console.log(typeof null);       // object (isso é considerado um bug na linguagem)</code></pre>
  `,
  'ex-2-2': `
<pre><code>// String para número
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
const stringConvertida3 = \`\${numero}\`;

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

console.log(booleanZero); // false (0 é falsy em JavaScript)</code></pre>
  `,
  'ex-2-3': `
<pre><code>console.log(10 + 5 * 2);    // 20 (multiplicação tem precedência)
console.log((10 + 5) * 2);  // 30 (parênteses têm precedência)
console.log(10 % 3);        // 1 (resto da divisão)
console.log("10" + 5);      // "105" (concatenação de string)
console.log("10" - 5);      // 5 (conversão implícita para número)
console.log(10 == "10");    // true (comparação com conversão de tipo)
console.log(10 === "10");   // false (comparação estrita, sem conversão)</code></pre>
  `,
  'ex-3-1': `
<pre><code>function verificarIdade(idade) {
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
}</code></pre>
  `,
  'ex-3-2': `
<pre><code>function diasNoMes(mes) {
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
console.log(diasNoMes("Banana"));    // "Mês inválido"</code></pre>
  `,
  'ex-3-3': `
<pre><code>// Usando for
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
}</code></pre>
  `
};
