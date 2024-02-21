import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Banner = () => {

    const navigate = useNavigate();

    const handleLogin = () => {

        navigate('/Login ');
    };

    const handleHome = () => {

        navigate('/Home');
    };

    return (
        <nav className=' bg-gray-800 sm:flex px-8 pt-4 pb-2'>
            <div className="grid grid-cols-3 w-full h-full my-5 px-2 sm:px-3 lg:px-8 relative sm:flex sm:items-center sm:justify-between">
                <p className='group sm:flex col-span-3 justify-self-center'>
                    <button onClick={handleLogin}><img className='w-20 h-20 rounded-full hover:ring group-hover:animate-sino' src="https://github.com/HigorVeloso.png" alt="minha foto" /></button>

                </p>
                <div className='font-mono flex px-10 py-1 text-sm col-span-3 justify-self-center'>
                        <button className='flex items-center caption-bottom bg-green-700 p-5 rounded-2xl cursor-pointer hover:bg-green-400 hover:ring duration-300 h-10' type="button" onClick={handleHome}> Home</button>

                        <Link to="https://www.linkedin.com/in/higor-veloso-3097a724a/" target="_blank" rel="noreferrer">
                            <button className='mx-2 sm:flex sm:items-center caption-bottom bg-green-700 p-2 rounded-2xl cursor-pointer hover:bg-green-400 hover:ring duration-300 h-10' type="button"> Linkedln</button>
                        </Link>

                        <Link to="https://wa.me/5598984800678?text=Ol%C3%A1%2C%20meu%20desenvolvedor!" target="_blank" rel="noreferrer">
                            <button className='sm:flex sm:items-center caption-bottom bg-green-700 p-2 rounded-2xl cursor-pointer hover:bg-green-400 hover:ring duration-300 h-10' type="button"> WhatsAPP</button>
                        </Link>
                </div>

            </div>
        </nav>

    );
}

export default Banner;