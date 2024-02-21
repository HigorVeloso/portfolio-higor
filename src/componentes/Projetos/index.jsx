import React from "react";
import Colaborador from '../Colaborador';
import Api from "../Api";

const Corpo = () => {
    const { times, inicial } = Api();

    return (
        <section className="grid w-full font-mono">
            {times.map((time, index) => (
                <div className="grid w-full h-full" 
                key={index} style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
                    <h3 className="flex font-bold justify-center h-full w-full pt-6 border-2 text-2xl" style={{ color: time.corSecundaria }}>{time.nome}</h3>
                    <section className='grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3'>
                        {inicial.map((colaborador, index) => (
                            colaborador.time === time.nome &&
                            <Colaborador key={index} colaborador={colaborador} corDeFundo={time.corSecundaria} />
                        ))}
                    </section>
                </div>
            ))}
        </section>
    );
}

export default Corpo;
