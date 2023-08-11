import React from 'react';

interface PortfolioItemProps {
    title: string;
    description: string;
    imageUrl: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default PortfolioItem;
