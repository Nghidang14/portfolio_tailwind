import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 py-4">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center">
                    <div className="text-white font-bold text-xl">My Portfolio</div>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-white">Home</a></li>
                        <li><a href="#" className="text-white">About</a></li>
                        <li><a href="#" className="text-white">Portfolio</a></li>
                        <li><a href="#" className="text-white">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
