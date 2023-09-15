import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };
    return (
        <header className="bg-yellow-500 py-4 sticky top-0 z-50">
            <div className="container mx-auto">
                <nav className="hidden sm:flex justify-between items-center">
                    <div className="text-white font-bold text-xl">My Portfolio</div>
                    <ul className="text-xl flex space-x-8">
                        <li>
                            <a
                                href="#" className="text-white hover:bg-yellow-300 px-4 py-2 rounded-md hover:text-2xl">Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about" className="text-white  hover:bg-yellow-300 px-4 py-2 rounded-md hover:text-2xl">About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#portfolio" className="text-white  hover:bg-yellow-300 px-4 py-2 rounded-md hover:text-2xl">Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact" className="text-white  hover:bg-yellow-300 px-4 py-2 rounded-md hover:text-2xl">Contact
                            </a>
                            </li>
                    </ul>
                </nav>

                {/* Mobile menu */}
                <div className='sm:hidden flex justify-end mr-2'>
                    <i className="fa-solid fa-bars" onClick={toggleNavbar}></i>
                </div>
                <div className={isNavbarOpen ? "block sm:hidden mt-4" : "hidden sm:hidden mt-4"}>
                    <a href="#" className="block text-center bg-blue-400 rounded-lg m-6 text-white mb-2" onClick={toggleNavbar}>Home</a>
                    <a href="#about" className="block text-center bg-blue-400 rounded-lg m-6 text-white mb-2" onClick={toggleNavbar}>About</a>
                    <a href="#portfolio" className="block text-center bg-blue-400 rounded-lg m-6 text-white mb-2" onClick={toggleNavbar}>Portfolio</a>
                    <a href="#contact" className="block text-center bg-blue-400 rounded-lg m-6 text-white" onClick={toggleNavbar}>Contact</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
