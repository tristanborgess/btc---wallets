// About.jsx
import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <AboutContainer>
            <TextContainer>
                <Title>Welcome to Bitcoin---Wallets!</Title>
                    <Subtitle>About This Website</Subtitle>
                        <Text>
                            This is the only comprehensive resource for exploring Bitcoin wallet options. This website is designed to educate you on the many wallet options out there and empower you to take proper control of your Bitcoin through self-custody.
                        </Text>
                    <Subtitle>What You'll Find:</Subtitle>
                        <Ul>
                            <li>
                                Diverse Wallet Features: Bitcoin wallets come in all shapes and sizes, offering a plethora of features to cater to different needs. From security enthusiasts to beginners, there is a wide range of wallet options.
                            </li>
                            <li>
                                Encouraging Self-Custody: I believe in the power of self-custody. Managing your own Bitcoin funds provides greater control and security. This directory is here to help you find a wallet that aligns with your self-custody goals.
                            </li>
                            <li>
                                Learning and Exploration: Bitcoin is a fascinating world, and there's always something new to discover. Whether you're interested in hardware wallets, multisignature setups, Lightning or simply storing your Bitcoin safely, this directory encourages you to explore and learn.
                            </li>
                        </Ul>
                    <Subtitle>How to Use:</Subtitle>
                    <Ol>
                        <li>
                            Discover Wallet Types: All the info is there, whether you're looking to inform yourself on Lightning, On-chain or Hardware wallets. Simply select the category you wish to dive into.
                        </li>
                        <li>
                            Explore Wallet Features: Browse through the rich array of Bitcoin wallet features. From cold storage capabilities to advanced encryption, each wallet offers unique attributes. Add or remove features you wish to compare using the feature dropdown list. Compare them all!
                        </li>
                        <li>
                            Discover Self-Custody: Self-custody means you're in charge of safeguarding your Bitcoin. Find a wallet that suits your level of self-custody comfort and enhances your control.
                        </li>
                        <li>
                            Choose Your Wallet: Select a Bitcoin wallet that aligns with your preferences and requirements. Detailed information is provided to help you make an informed decision.
                        </li>
                        <li>
                            Begin Your Bitcoin Journey: Whether you're new to Bitcoin or a seasoned enthusiast, this directory is a valuable resource for embarking on your journey.
                        </li>
                    </Ol>
                <Text>
                    Bitcoin---Wallets is a great companion for navigating the world of Bitcoin wallets. Empower yourself with the right tools, embrace self-custody, and embark on a journey of learning and discovery!
                </Text>
                <H3>Acknowledgements</H3>
                <Text>
                    This project began back in 2019 when <StyledLink href="https://twitter.com/gustavojfe" target="_blank" rel="noopener noreferrer"> Gustavo Flores Echaiz</StyledLink>, 
                    fellow co-founder at Veriphi, began putting together the data surrounding Bitcoin wallets. With the help of 
                    <StyledLink href="https://twitter.com/CepnikMaciej" target="_blank" rel="noopener noreferrer"> Maciek Cepnik </StyledLink> 
                    and I, it turned into the <StyledLink href="https://docs.google.com/spreadsheets/d/1aZ1zbaUEzCo9NCctN8-eL2VLIiSdY009tTJvRXDUWEw/edit#gid=0" target="_blank" rel="noopener noreferrer"> Veriphi Wallet Comparison Table</StyledLink>. Having recently honed my web development skills, I decided to bring the idea back to life by creating this site and updating the content.
                </Text>

            </TextContainer>
        </AboutContainer>
    );
};

const AboutContainer = styled.div`
    padding: 2vw;
    max-width: 60rem;
    border-right: 1px solid rgba(199, 164, 255, 0.30);
    border-bottom: 1px solid rgba(199, 164, 255, 0.30);
    background: linear-gradient(140deg, rgba(26, 8, 54, 0.98) 14.07%, rgba(24, 3, 56, 0.44) 93.47%);
    box-shadow: 8px 8px 3px 0px rgba(199, 164, 255, 0.15);
    backdrop-filter: blur(25px);
    margin-left: auto;
    margin-right: auto;
`;

const TextContainer = styled.div`
    padding: 3rem 3rem 0 3rem;
`;

const Text = styled.p`
    margin-bottom: 2rem;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: rgba(255, 255, 255, 0.80);
`;

const Title = styled.h1`
    text-align: center;
    font-weight: 700;
    font-size: 2.25rem; 
    margin-bottom: 5rem;
`;

const Subtitle = styled.h2`
    text-align: left; 
    margin-bottom: 1rem;
    font-size: 1.7rem;
    font-weight: 400;
    color: #F5F5F5;
`;

const H3 = styled.h3`
    text-align: center; 
    margin-bottom: 1rem;
    color: #F5F5F5;
`;

const Ul = styled.ul`
    margin-bottom: 2rem;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: rgba(255, 255, 255, 0.80);

    li {
        margin-bottom: 1rem;
    }
`;

const Ol = styled.ol`
    margin-bottom: 2rem;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: rgba(255, 255, 255, 0.80);

    li {
        margin-bottom: 1rem;
    }
`;

const StyledLink = styled.a`
    color: rgba(255, 255, 255, 0.80); 
    text-decoration: underline; 

    &:hover {
        color: #F5F5F5; 
    }
`;



export default About;
