import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const portfolioItems = [
    {
        title: 'Flying Rocket',
        description: "The first game. A game help player skillfully more! Press 'Space' to Thrusting, 'A' to the left side, 'D' to the right side.",
        link: 'https://sharemygame.com/@DangKhaiNghi/flyingrocket',
        imagePath: '/images/flying.png',
    },
    {
        title: 'FlappyMon',
        description: 'I simulated game Flappy Bird with pokemon version',
        link: 'https://sharemygame.com/@DangKhaiNghi/flappy-mon',
        imagePath: '/images/Pokemon_bg.PNG',
    },
    {
        title: 'Shot Plane',
        description: 'I am learning and applying additional knowledge from Udemy to my game project.',
        link: 'https://drive.google.com/file/d/1KrVQC3zkSESXrv1SwTeXioADf4yR-HX5/view?usp=sharing',
        imagePath: '/images/assault.png',
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
