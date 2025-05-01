import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const portfolioItems = [
    {
        title: 'Flying Rocket',
        description: "The first game. A game help player skillfully more! Press 'Space' to Thrusting, 'A' to the left side, 'D' to the right side.",
        link: 'https://nghixu.itch.io/project-boost',
        imagePath: '/images/flying.png',
    },
    {
        title: 'FlappyMon',
        description: 'I simulated game Flappy Bird with pokemon version',
        link: 'https://nghixu.itch.io/flappy-mon',
        imagePath: '/images/Pokemon_bg.PNG',
    },
    {
        title: 'Cube Running',
        description: 'A game help player skillfully more!!',
        link: 'https://sharemygame.com/@DangKhaiNghi/endless-3d-game',
        imagePath: '/images/Cube_Running.PNG',
    },
    {
        title: 'Dogging Dog',
        description: 'The first Android mini game.',
        link: 'https://drive.google.com/file/d/1-VBMhRtnOwW4y4FsP-NLTM3gaKvnBUtD/view?usp=sharing',
        imagePath: '/images/DoggingDog IMG.PNG',
    },
    {
        title: 'Line Runner',
        description: 'The second Android mini game which I learned in Unity.',
        link: 'https://drive.google.com/file/d/1uvKGcS9eu0bAryZrkcw1nh5WHJmvB7Ak/view?usp=sharing',
        imagePath: '/images/Fake_Screen_Running.PNG',
    },
    {
        title: 'Shooter',
        description: "",
        link: 'https://nghixu.itch.io/flappy-mon',
        imagePath: '/images/shooter.PNG',
    }
    
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
