import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const portfolioItems = [
    {
        title: 'Portfolio',
        description: 'My Portfolio Website using ReactJS, TailwindCSS, TypeScript. Deployed on Netlify',
        link: 'https://dangkhainghi.netlify.app/',
        imagePath: '/images/portfolio.jpg',
    },
    {
        title: 'Team Project: Near Mars',
        description: 'A blockchain project of my team. Members: 3. My main role: Front-end',
        link: 'https://mintmars.netlify.app/',
        imagePath: '/images/mintmars.jpg',
    },
    {
        title: 'Quiz App',
        description: 'A mini quiz-app',
        link: 'https://quiz-app14.netlify.app/',
        imagePath: '/images/quiz-app.jpg',
    },
];

const PortfolioSection: React.FC = () => {
    return (
        <section id='portfolio' className="py-24">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-white ml-3">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem key={index} title={item.title} description={item.description} link={item.link} imagePath={item.imagePath} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
