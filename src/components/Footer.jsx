import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/btcwalletsLogo.png';

const Footer = () => {
    return (
        <FooterContainer>
            <Link to='/'>
                <Logo src={logo} alt="BTC Wallets" />
            </Link>
            <NavLinks>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/glossary">Glossary</StyledLink>
                <ExternalLink href="https://github.com/tristanborgess/btc---wallets" target="_blank" rel="noopener noreferrer">
                    GitHub
                </ExternalLink>
            </NavLinks>
            <CreditsContainer>Designed, created and maintained by Tristan Borges Solari.
                <LinksContainer>
                    <CreditLink href="https://github.com/tristanborgess" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </CreditLink>
                    <CreditLink href="https://twitter.com/TristanBorgess" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </CreditLink>
                    <CreditLink href="https://twitter.com/TristanBorgess" target="_blank" rel="noopener noreferrer">
                        Donate
                    </CreditLink>
                </LinksContainer>
            </CreditsContainer>
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    padding: 1rem;
    height: 188px;
    width: 100%;
    align-items: center;
    background: linear-gradient(140deg, #1A0836 14.07%, rgba(24, 3, 56, 0.45) 93.47%);
    backdrop-filter: blur(10px);
    margin-top: 5vw;
    font-family: "Public Pixel";
`;

const StyledLink = styled(Link)`
    text-decoration: none;    
    color: rgba(255, 255, 255, 0.80);  
`;

const NavLinks = styled.div`
    display: flex;
    width: 100%;
    max-width: 29.375rem;
    justify-content: space-between;
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
`;

const ExternalLink = styled.a`
    text-decoration: none;    
    color: rgba(255, 255, 255, 0.80);  
    cursor: pointer;
    font-size: 1.0625rem;
`;

const Logo = styled.img`
    display: flex;
    height: auto;
    width: 100%;
    max-width: 29.375rem;
    flex-shrink: 0;
    margin-top: 35px;
    margin-bottom: 1.46rem;
`;

const CreditsContainer = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(255, 255, 255, 0.80);
    font-size: 0.5rem;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    margin-top: 2.13rem;
    width: 29.375rem;
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 25px;
    margin-top: 15px;  
`;

const CreditLink = styled.a`
    text-decoration: none;
    color: rgba(255, 255, 255, 0.80);
`;

export default Footer;
