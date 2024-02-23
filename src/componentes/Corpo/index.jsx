import React from "react";
import { pdfjs } from 'react-pdf';
import Api from "../Api";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Corpo = () => {
    const downloadPDF = () => {
        const pdfUrl = '/arquivo/curriculo_higor-veloso.pdf';
        fetch(pdfUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'HigorVeloso_curriculo.pdf');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Error fetching PDF:', error);
            });
    };

    const { conteudo } = Api();

    return (
        <section className='w-full h-full pb-10 px-5' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: '#f1f5f9' }}>
            <div className='flex py-4'>
                <button className='flex items-center font-bold font-mono caption-bottom text-white bg-green-700 p-4 rounded-2xl cursor-pointer hover:bg-green-600 hover:ring duration-300 h-1 '
                    onClick={downloadPDF} type="button">Baixar Currículo</button>
            </div>
            <h2 className="flex text-lg font-mono font-bold justify-center pt-1 border-2 sm:text-2xl text-gray-800">Tecnologias do dia a dia</h2>
            <div className='flex font-mono items-center justify-center pt-8 gap-4 flex-wrap mx-3'>
                {conteudo.map((conteudo, index) => (
                    <div key={index} className='flex flex-col gap-0.5 items-center justify-center ' >
                        <img className='w-12' src={conteudo.imagem} alt="" />
                        <p className='text-gray-800'>{conteudo.titulo}</p>
                    </div> 
                ))}
                
            </div>
        </section>
    )
};

export default Corpo;