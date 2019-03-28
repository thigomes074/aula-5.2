const curso={
    nome: 'INFO',
    horas: 1200,
    modalidade: 'integrado'
};
console.log(curso.modalidade);
delete(curso.modalidade);
console.log(curso.modalidade)
if (curso.curriculo)
    console.log(curso.curriculo || 'sem curriculo');

// o browser é o "this" inicial
