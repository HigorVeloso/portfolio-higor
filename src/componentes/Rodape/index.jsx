

const Rodape = () => {
    return (
        <footer className="text-white p-12 flex items-center flex-col sm:flex-row sm:justify-center gap-2 bg-gray-800">
            <section>
                <ul>
                    <li className='w-10'>
                        <a href="https://github.com/HigorVeloso" target="_blank" rel="noreferrer">
                            <img src="/imagens/github.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>

            </section>
            <section>
                <p>
                    © 2024 Higor Veloso. <span className='whitespace-nowrap '>Todos os direitos reservados.</span>
                </p>
            </section>
        </footer>
    )
}

export default Rodape