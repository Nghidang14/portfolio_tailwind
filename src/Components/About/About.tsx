import React from 'react';

const About: React.FC = () => {
    return (
        <section id='about' className=" text-white py-24">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg">My name is  
                    <a href='https://www.linkedin.com/in/%C4%91%E1%BA%B7ng-kh%E1%BA%A3i-nghi-1b6253274/' className='pl-1 text-xl text-yellow-400'>
                        Dang Khai Nghi
                    </a>
                </p>
                <p className="text-lg">I am extremely passionate about programming, especially game development.</p>
            </div>
        </section>
    );
};

export default About;
