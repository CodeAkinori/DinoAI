import RNA from './RNA.js';  // Importa a classe RNA de um arquivo chamado 'RNA.js'.

const SAMPLES = 1000;  // Define a quantidade de amostras como 1000.

setInterval(() => {
  const rna = new RNA(10, [5, 5, 5, 5, 1]);  // Cria uma instância da classe RNA com configuração específica.

  let total = 0;  // Inicializa uma variável 'total' com zero para acumular resultados.

  for (let i = 0; i < SAMPLES; i++) {  // Loop que executa 1000 vezes.
    const inputs = new Array(10).fill().map(() => Math.random());  // Gera uma lista de 10 números aleatórios como entrada.
    const [r] = rna.compute(inputs);  // Calcula a saída da RNA com as entradas geradas.
    total += r;  // Acumula o resultado na variável 'total'.
  }

  console.clear();  // Limpa a tela do console.
  console.log(total / SAMPLES);  // Calcula a média dos resultados e exibe no console.

}, 1000);  // Executa o código a cada 1000 milissegundos (1 segundo).


// const SAMPLES = 1000;: Define uma constante chamada SAMPLES com o valor 1000 para representar a quantidade de amostras.

// setInterval(() => { ... }, 1000);: Executa o código dentro da função de callback a cada 1000 milissegundos (1 segundo).

// const rna = new RNA(10, [5, 5, 5, 5, 1]);: Cria uma instância da classe RNA com 10 entradas e uma configuração de camadas específica.

// let total = 0;: Inicializa a variável total com zero para acumular resultados.

// for (let i = 0; i < SAMPLES; i++) { ... }: Inicia um loop que executa 1000 vezes para gerar amostras e calcular resultados.

// const inputs = new Array(10).fill().map(() => Math.random());: Gera uma lista de 10 números aleatórios como entradas.

// const [r] = rna.compute(inputs);: Calcula a saída da RNA com as entradas geradas e armazena em [r].

// total += r;: Acumula o resultado na variável total.

// console.clear();: Limpa o console para exibir os resultados de forma limpa.

// console.log(total / SAMPLES);: Calcula a média dos resultados e a exibe no console.