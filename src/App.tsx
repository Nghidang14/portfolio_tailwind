import React from 'react';
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";
const App: React.FC = () => {
  return (
      <div className="">
          <Header />
          <About />
          <PortfolioSection />
          <ContactSection />
          <Footer />
      </div>
  );
};

export default App;
