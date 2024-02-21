

const CampoTexto = ({ label, tipo, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className='my-10'>
        <label className='mb-10'>{label}</label>
        <input className='p-2 ml-3' value={valor} type={tipo} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
}

export default CampoTexto