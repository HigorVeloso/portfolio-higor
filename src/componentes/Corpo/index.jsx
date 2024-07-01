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

    const { hardSkills, softSkills } = Api();

    return (
        <section className='w-full h-full pb-10 px-5' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: '#f1f5f9' }}>
            <div className='flex py-4 sm:px-24 lg:px-44 xl:px-48 2xl:px-96'>
                <button className='flex items-center font-bold font-mono caption-bottom text-white bg-green-700 p-4 rounded-2xl cursor-pointer hover:bg-green-600 hover:ring duration-300 h-1 '
                    onClick={downloadPDF} type="button">Baixar Currículo</button>
            </div>


            <div className='sm:grid sm:justify-center sm:grid-cols-3 sm:max-w-screen-md mx-auto px-1'>
                <h1 className="flex text-lg font-mono font-bold justify-center pt-1 border-2 sm:text-2xl sm:col-span-3 text-gray-800">SOFT SKILLS</h1>
                {softSkills.map((softSkills, index) => (
                    <div key={index} className='flex flex-col font-mono items-center justify-center pt-8 gap-y-4 flex-wrap mx-2'>
                        <p className='text-gray-800'>{softSkills.titulo}</p>
                    </div>
                ))}
            </div>

            <div className='grid justify-center items-center grid-cols-4 sm:max-w-screen-md mx-auto px-1'>
                <h2 className="flex text-lg font-mono font-bold pt-8 justify-center border-2 sm:text-2xl col-span-4 text-gray-800">HARD SKILLS</h2>
                {hardSkills.map((hardSkills, index) => (
                    <div key={index} className='group flex flex-col font-mono items-center justify-center pt-8 gap-y-2 flex-wrap mx-0.5' >
                        <img className='w-12 group-hover:animate-sino' src={hardSkills.imagem} alt="" />
                        <p className='text-gray-800'>{hardSkills.titulo}</p>
                    </div>
                ))}

            </div>
        </section>
    )
};

export default Corpo;