import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-yellow-500 py-4 sticky top-0 z-50">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center">
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
            </div>
        </header>
    );
};

export default Header;
