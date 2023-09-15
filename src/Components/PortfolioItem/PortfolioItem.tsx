import React from 'react';

interface PortfolioItemProps {
    title: string;
    description: string;
    link: string;
    imagePath: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, link, imagePath }) => {
    return (
        <div className="bg-yellow-200 shadow-lg rounded-lg overflow-hidden">
            <a href={link}>
                <img src={imagePath} alt={title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-700">{description}</p>
                </div>
            </a>
        </div>
    );
};

export default PortfolioItem;
