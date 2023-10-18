import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/btcwalletsLogo.png';

const Navbar = () => {

    return (
        <NavContainer>
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
        </NavContainer>
    );
};

const NavContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    padding: 1rem;
    height: 188px;
    width: 100%;
    align-items: center;
    background: linear-gradient(140deg, #1A0836 14.07%, rgba(24, 3, 56, 0.45) 93.47%);
    backdrop-filter: blur(10px);
    margin-bottom: 5vw;
`;

const StyledLink = styled(Link)`
    text-decoration: none;    
    color: rgba(255, 255, 255, 0.80);  
`;

const NavLinks = styled.div`
    display: flex;
    width: 100%;
    max-width: 59.625rem;
    justify-content: space-between;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
`;

const ExternalLink = styled.a`
    text-decoration: none;    
    color: rgba(255, 255, 255, 0.80);  
    cursor: pointer;
    font-size: 1.8rem;
`;

const Logo = styled.img`
    display: flex;
    height: auto;
    width: 100%;
    max-width: 59.625rem;
    flex-shrink: 0;
    margin-top: 35px;
    margin-bottom: 38.83px;
`;
export default Navbar;