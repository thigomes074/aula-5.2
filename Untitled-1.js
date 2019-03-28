const x = 2;
const y = 3;
console.log(x+y);
// JSON
// java
// object
// notation
// parte da POO
// (programação orientada a objeto)

const th={
    nome: 'Thiago',
    idade: 16
};
// {chave1: valor, chave2: valor,chave3: valor,...}
console.log(th.nome);
th.nome = 'Thiago Gomes';
console.log(th);
console.log(th['idade']);
th['idade'] = th['idade'] + 1;
console.log(th);
th['signo'] = 'escorpião';
console.log(th);
console.log(Object.keys(th));
const keys = Object.keys(th);
console.log(keys);
console.log(th[keys[1]]);
for (const k in th) {
    console.log(`${value}:${th[value]}`);
}

