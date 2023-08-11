import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section className="bg-blue-800 text-white py-24">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg">Have a project in mind? Let's work together!</p>
                <a href="#" className="bg-white text-blue-800 px-6 py-3 mt-4 inline-block rounded-lg font-semibold transition duration-300 hover:bg-blue-800 hover:text-white">
                    Contact Me
                </a>
            </div>
        </section>
    );
};

export default ContactSection;
