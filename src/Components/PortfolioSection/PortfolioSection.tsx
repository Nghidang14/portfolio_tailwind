import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const portfolioItems = [
    {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://via.placeholder.com/300',
    },
    {
        title: 'Project 2',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: 'https://via.placeholder.com/300',
    },
    // Add more portfolio items here
];

const PortfolioSection: React.FC = () => {
    return (
        <section id='portfolio' className="py-24">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-8">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem key={index} title={item.title} description={item.description} imageUrl={item.imageUrl} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
