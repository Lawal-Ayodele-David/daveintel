import React, {useState} from 'react';
import Navbar from '../webcomponents/Navbar';
import Sidebar from '../webcomponents/Sidebar';
import HeroSection from '../webcomponents/HeroSection';
import Services from '../webcomponents/Services';
import InfoSection from '../webcomponents/InfoSection';
import Footer from '../webcomponents/Footer';
import { homeObjOne, homeObjTwo, homeObjThree } from '../webcomponents/InfoSection/Data';

const Home = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
    
    setIsOpen(!isOpen);
};

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} /> 
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection  {...homeObjOne} />
        <InfoSection  {...homeObjTwo} />
        <Services />
        <InfoSection  {...homeObjThree} />
        <Footer />
        </>
    );
};

export default Home;