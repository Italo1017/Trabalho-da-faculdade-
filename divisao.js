const alunos = [
"Ana", 
"Marcos", 
"Maria", 
"Mauro",
"joao",
"italo",
"renata",
"pedro",
"pietro",
"paulo",
"matheus",
"otavio",
"andre",
"heitor",
"messi",
"ronaldo",
"cristiano",
"harry",
"peter",
"lucca"
];

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);

// length é responsavel por substituir o valor fixo pelo dinâmico 