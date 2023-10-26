import React from 'react';
import styled from 'styled-components';

const WalletModal = ({ wallet, onClose }) => {
    const features = Object.keys(wallet).filter(feature => 
        feature !== '_id' && feature !== 'Category' && 
        feature !== 'Link' && feature !== 'Logo' &&
        feature !== 'Name'
    );

    const mapYesNoToSymbols = (text) => {
        if (text === "Yes") {
          return (
            <StyledSymbol className="yes-symbol" role="img" aria-label="Yes">
              ✓
            </StyledSymbol>
          );
        } else if (text === "No") {
          return (
            <StyledSymbol className="no-symbol" role="img" aria-label="No">
              ✗
            </StyledSymbol>
          );
        }
        // Return the original text if it's neither "Yes" nor "No"
        return text;
      };

    return (
        <ModalBackground onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>X</CloseButton>
                <DataContainer>
                <InfoContainer>
                    <LogoImage src={wallet.Logo} alt={wallet.Name + ' Logo'} />
                        <div>
                            <ModalTitle>{wallet.Name}</ModalTitle>
                            <StyledLink href={wallet.Link} target="_blank" rel="noopener noreferrer">Visit Website</StyledLink>
                        </div>
                </InfoContainer>
                    <ModalDetailsContainer>
                        {features.map(feature => (
                            <FeatureColumn key={feature}>
                                <span>{feature}</span>
                                <span>{mapYesNoToSymbols(wallet[feature])}</span>
                            </FeatureColumn>
                        ))}
                    </ModalDetailsContainer>
                </DataContainer>
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
    min-width: 25vw;
    padding: 1.3rem;
    border-radius: 5px;
    position: relative;
    margin-bottom: 10rem;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;      
    right: 10px;    
    background: transparent;
    border: none;
    font-size: 1rem; 
    cursor: pointer;
    color: rgba(255, 255, 255, 0.80);    
`;

const LogoImage = styled.img`
    max-width: 3rem;     
    max-height: 3rem;     
`;

const InfoContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
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

const ModalDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 25rem;
    overflow-y: auto;
    border-top: 1px solid rgba(199, 164, 255, 0.30);
    margin-top: 1.25rem;
    padding-top: 1.25rem;
`;

const FeatureColumn = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    padding-bottom: 1rem;
    align-items: center;
`;

const StyledSymbol = styled.span`
    color: #3CE500;
    font-family: SF Mono;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;

&.no-symbol {
    color: #FF002E;
    font-family: SF Mono;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    }
`;

export default WalletModal;
