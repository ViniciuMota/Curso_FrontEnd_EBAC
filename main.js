
const alunos = [
  { nome: 'Alice', nota: 7 },
  { nome: 'Bob', nota: 5 },
  { nome: 'Carlos', nota: 8 },
  { nome: 'Diana', nota: 4 },
  { nome: 'Eva', nota: 9 },
];

function alunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);
