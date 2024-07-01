import { Link } from "react-router-dom"



const Colaborador = ({ colaborador, corDeFundo }) => {

    return (
        <span className="colaborador w-full flex flex-col justify-center items-center p-12">
            <div className="flex w-full cabecalho rounded-t-lg" style={{ backgroundColor: corDeFundo }}>
                <Link to={colaborador.url} target="_blank" rel="noreferrer">
                    <img className="flex w-full px-5 items-center rounded-[30px] pb-3 relative bottom-[-50px]"
                        src={colaborador.imagem} alt={colaborador.nome}
                    />
                </Link>
            </div>
            <div className="rodape w-full bg-white rounded-b-lg pb-10">
                <h4 className='flex justify-center pt-16 text-blue-500 font-bold text-lg leading-6 mb-2'>{colaborador.nome}</h4>
                <p className='flex justify-center text-base leading-6 text-gray-700 px-4'>{colaborador.cargo}</p>
                <div className="flex justify-center items-center gap-4 pt-4">
                    <button className="border-4 p-1">Deploy</button>
                    <button className="border-4 p-1">GitHub</button>
                </div>
            </div>
        </span>
    )
}

export default Colaborador