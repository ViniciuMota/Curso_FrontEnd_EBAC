
function multiplicar(numero1: number, numero2: number): number {
  return numero1 * numero2;
}

function saudacao(nome: string): string {
  return `Olá ${nome}`;
}

const resultadoMultiplicacao = multiplicar(5, 3);
const mensagemSaudacao = saudacao("Alice");

console.log(resultadoMultiplicacao);
console.log(mensagemSaudacao);
