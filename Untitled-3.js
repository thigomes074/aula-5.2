console.log(this); // objeto contextual

const artista={
    nome: 'legiao urbana',
    albuns: [
        {
            nome: 'as quatro estações',
            cancoes: [
                {
                    titulo: 'pais e filhos',
                    duracao: 5*60+8
                },
                {
                    titulo: 'Mauricio',
                    duracao: 3* 60 + 18
                }
            ]
        },
        {
            nome: 'v',
            cancoes: [
                {
                    titulo: 'metal contra as nuvens',
                    // eslint-disable-next-line no-magic-numbers
                    duracao: 11 * 60 + 30
                }
            ]
        }
    ]
};
console.log(artista);
console.log(artista['albuns'][0]['nome']);
console.log(artista.albuns[0].nome);
console.log(artista['albuns'][0]['cancoes'][0]['duracao']);
