const Api = () => {

    const times = [
        {
            nome: 'Portfólio',
            corPrimaria: '#D9F7E9',
            corSecundaria: '#57C278'
        },
        {
            nome: '',
            corPrimaria: '#F0F8E2',
            corSecundaria: '#A6D157'
        }

    ]

    const inicial = [

        {
            nome: 'Projeto 1',
            cargo: 'Tecnologias usadas',
            imagem: './imagens/veterinaria.png',
            time: times[0].nome
        },
        {
            nome: 'Projeto 1',
            cargo: 'Tecnologias usadas',
            imagem: './imagens/veterinaria.png',
            time: times[0].nome
        },
        {
            nome: 'Projeto 1',
            cargo: 'Tecnologias usadas',
            imagem: './imagens/veterinaria.png',
            time: times[0].nome
        },
        {
            nome: 'Sub projeto',
            cargo: 'Tecnologias usadas',
            imagem: '',
            time: times[1].nome
        },
        {
            nome: 'Sub projeto',
            cargo: 'Tecnologias usadas',
            imagem: '',
            time: times[1].nome
        },
        {
            nome: 'Sub projeto',
            cargo: 'Tecnologias usadas',
            imagem: '',
            time: times[1].nome
        }
    ]

    const Conteudo = [
        {
            Tecnologia: '',
            imagem: '',

        },
        {
            Tecnologia: '',
            imagem: '',

        },
    ]

    return { times, inicial, Conteudo };
};

export default Api;