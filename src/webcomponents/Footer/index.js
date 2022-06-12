import React from 'react';
import {animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterCopywright, SocialLogo} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                                <FooterLinkTitle to="/signin">About us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>

                                <FooterLinkTitle to="/signin">Contact Us</FooterLinkTitle>
                                <FooterLink to="/signin">Contact</FooterLink>
                                <FooterLink to="/signin">Support</FooterLink>
                                <FooterLink to="/signin">Destinations</FooterLink>
                                <FooterLink to="/signin">Sponsorship</FooterLink>
                            </FooterLinkItems>            
                            <FooterLinkItems>
                                <FooterLinkTitle to="/signin">Videos</FooterLinkTitle>
                                <FooterLink to="/signin">Submit Video</FooterLink>
                                <FooterLink to="/signin">Ambassadors</FooterLink>
                                <FooterLink to="/signin">Agency</FooterLink>
                                <FooterLink to="/signin">Influencer</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle to="/signin">Social Media</FooterLinkTitle>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">Youtube</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                            </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                </FooterWrap>
                                <FooterCopywright>
                                <SocialLogo to='/' onClick={toggleHome}>dolla</SocialLogo>
                                    &copy, {new Date().getFullYear()} Dolla | All right reserved | Terms Of Service | Privacy
                                 </FooterCopywright>
        </FooterContainer>
    ) 
}

export default Footer;