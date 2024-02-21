import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CampoTexto from '../CampoTexto'

const Formulario = () => {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log(nome, senha)
    }

    const Botao = ({ texto, onClick }) => {
        return (
            <button className='' onClick={onClick}>{texto}</button>
        );
    };


    const navigate = useNavigate();

    const handleLogin = () => {

        navigate('/');
    };

    return (
        <section className="flex justify-center my-20">
            <form className="max-w-4xl bg-gray-100 shadow-lg rounded-xl p-9" onSubmit={aoSubmeter}>
                <h2 className='font-normal text-2xl'>Login futuro</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />
                <CampoTexto
                    obrigatorio={true}
                    tipo='password'
                    label='Senha'
                    placeholder=''
                    valor={senha}
                    aoAlterado={valor => setSenha(valor)} />
                <Botao texto='Entrar' onClick={handleLogin} />
            </form>
        </section>
    )
}

export default Formulario