import React from "react";
import { pdfjs } from 'react-pdf';

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
    return (
        <section className='' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: '#f1f5f9' }}>
            <button onClick={downloadPDF}>Download PDF</button>
        </section>
    )
};

export default Corpo;