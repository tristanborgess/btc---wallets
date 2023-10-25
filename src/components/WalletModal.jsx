import React from 'react';
import styled from 'styled-components';

const WalletModal = ({ wallet, onClose }) => {
    return (
        <ModalBackground onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>X</CloseButton>
                <LogoImage src={wallet.Logo} alt={wallet.Name + ' Logo'} />
                <InfoContainer>
                    <ModalTitle>{wallet.Name}</ModalTitle>
                    <StyledLink href={wallet.Link} target="_blank" rel="noopener noreferrer">Visit Website</StyledLink>
                </InfoContainer>
            </ModalContent>
        </ModalBackground>
    );
};

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    border-right: 1px solid rgba(199, 164, 255, 0.30);
    border-bottom: 1px solid rgba(199, 164, 255, 0.30);
    background: linear-gradient(140deg, rgba(26, 8, 54, 0.98) 14.07%, rgba(24, 3, 56, 0.44) 93.47%);
    box-shadow: 8px 8px 3px 0px rgba(199, 164, 255, 0.15);
    backdrop-filter: blur(25px);
    height: auto;
    width: 25vw;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    display: flex;
    gap: 2rem;
    
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;      
    right: 10px;    
    background: transparent;
    border: none;
    font-size: 1.2rem; 
    cursor: pointer;
    color: #FFF;    
`;

const LogoImage = styled.img`
    width: 10vw;     
    height: auto;     
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const StyledLink = styled.a`
    color: rgba(255, 255, 255, 0.80);             
    text-decoration: none;     
    font-weight: normal;          
    
    &:hover {
        color: #01706a;                
    }
`;

const ModalTitle = styled.div`
    text-align: left;
    font-size: 2rem; 
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export default WalletModal;
