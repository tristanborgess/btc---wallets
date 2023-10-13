import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import blockIcon from '../assets/block-01.svg';

const Navbar = () => {
    const [blockHeight, setBlockHeight] = useState(null);

    useEffect(() => {
        // Fetch the current Bitcoin block height
        fetch("/api/blocks/tip/height")
            .then(response => response.text())  // Convert response to text
            .then(text => {
                console.log("Raw response:", text);  // Log the raw text response
                
                // Try to parse the text as JSON and set the block height
                try {
                    const data = JSON.parse(text);
                    setBlockHeight(data);
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                }
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);
    

    return (
        <NavContainer>
            <StyledLink to="/">btc---wallets</StyledLink>
            <BlockContainer>
                <Icon src={blockIcon} alt="Block Icon"/> Block: {blockHeight}
            </BlockContainer>
        </NavContainer>
    );
};

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    align-items: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;      
    color: #fff;                
    font-size: 32px;            
    font-weight: bold;         
    letter-spacing: 1px;        
    text-transform: uppercase;
`;

const BlockContainer = styled.div`
    display: flex;
    align-items: center;
`
const Icon = styled.img`
    padding: 10px;
    width: 3vw;
`;

export default Navbar;