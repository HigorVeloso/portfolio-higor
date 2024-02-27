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
            nome: 'Interface de uma clínica',
            cargo: 'HTML, CSS e SwiperJS',
            imagem: './imagens/veterinaria.png',
            url: 'https://medicina-veterinaria.vercel.app/',
            time: times[0].nome
        },
        {
            nome: 'Projeto 1',
            cargo: 'Tecnologias usadas',
            imagem: '',
            url: '',
            time: times[0].nome
        },
        {
            nome: 'Projeto 1',
            cargo: 'Tecnologias usadas',
            imagem: '',
            url: '',
            time: times[0].nome
        },
        {
            nome: 'Sub projeto',
            cargo: 'Tecnologias usadas',
            imagem: '',
            url: '',
            time: times[1].nome
        },
        {
            nome: 'Sub projeto',
            cargo: 'Tecnologias usadas',
            imagem: '',
            url: '',
            time: times[1].nome
        },
        {
            nome: 'Sub projeto',
            cargo: 'Tecnologias usadas',
            imagem: '',
            url: '',
            time: times[1].nome
        }
    ]

    const hardSkills = [
        {
            imagem: './imagens/assets/react-40.png',
            titulo: 'React'
        },
        {
            imagem: './imagens/assets/html5-48.png',
            titulo: 'HTML5'
        },
        {
            imagem: './imagens/assets/python-48.png',
            titulo: 'Python'
            
        },
        {
            imagem: './imagens/assets/nodejs-48.png',
            titulo: 'Node.js'
        },
        {
            imagem: './imagens/assets/javascript-48.png',
            titulo: 'JavaScript'
        },  
        {
            imagem: './imagens/assets/css3-48.png',
            titulo: 'CSS3'
        },  
        {
            imagem: './imagens/assets/mysql-48.png',
            titulo: 'MySQL'
        },  
        {
            imagem: './imagens/assets/powerbi-48.png',
            titulo: 'PowerBI'
        },  
    ]

    const softSkills = [
        {
            titulo: 'Comunicação eficaz'
        },
        {
            titulo: 'Proatividade'
        },
        {
            titulo: 'Perfil de liderança'
        },
        {
            titulo: 'Pensamento crítico'
        },
        {
            titulo: 'Compreensível'
        },
        {
            titulo: 'Bom humor'
        }
    ]

    return { times, inicial, hardSkills, softSkills };
};


export default Api;