import React, { useState } from 'react';
import styled from 'styled-components';

const SearchWallets = ({ onSearch, activeCategory, wallets, hasSearched, onClear }) => {
    const [searchWallet, setSearchWallet] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSearchInput = (e) => {
        setSearchWallet(e.target.value);
        if (e.target.value.length > 1) {
            const filteredSuggestions = wallets.filter(wallet => 
                wallet && wallet.Name && wallet.Name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (wallet) => {
        if (wallet) {
            onSearch(wallet);
            console.log(wallet);
            setSearchWallet("");
            setSuggestions([]);
            setErrorMsg("");
        } else {
            setErrorMsg(`Wallet not in ${activeCategory}`);
        }
    };

    return (
        <Container>
            <Search>
                <SearchInput 
                    value={searchWallet} 
                    onChange={handleSearchInput}
                    placeholder="Search for a wallet..."
                />
                {suggestions.length > 0 && (
                    <SuggestionsList>
                        {suggestions.map(wallet => (
                            <SuggestionItem key={wallet._id} onClick={() => handleSuggestionClick(wallet)}>
                                {wallet.Name}
                            </SuggestionItem>
                        ))}
                    </SuggestionsList>
                )}
            </Search>
            {errorMsg && <Error>{errorMsg}</Error>}
            {hasSearched && <ClearButton onClick={onClear}>Clear Search</ClearButton>}
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: fit-content;
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column; 
        gap: 0;
    }
`;

const Search = styled.div`
    position: relative;
    display: flex;
    padding-bottom: 0.5rem;
`;

const SearchInput = styled.input`
    width: 25.1875rem;
    height: 2.5rem;
    flex-shrink: 0;
    border-radius: 2.5rem;
    border: 2px solid #4000A8;
    background: linear-gradient(140deg, rgba(26, 8, 54, 0.98) 14.07%, rgba(24, 3, 56, 0.44) 93.47%);
    backdrop-filter: blur(40px);
    font-size: 1.125rem;
    padding-left: 1.5rem;
    color: #DEDEDE;
    font-family: Bell Centennial Std;
    font-size: 1.5rem;
    padding-top: 0.3125rem;

    @media (max-width: 768px) {
        width: 20rem;
        font-size: 1.2rem;  
        margin-bottom:0.5rem;
    }
`;

const SuggestionsList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 30rem;
    overflow-y: auto;
    border-top: none;
    border-radius: 0 0 5px 5px;
    z-index: 10;
    border-right: 1px solid rgba(199, 164, 255, 0.30);
    border-bottom: 1px solid rgba(199, 164, 255, 0.30);
    background: linear-gradient(140deg, rgba(26, 8, 54, 0.98) 14.07%, rgba(24, 3, 56, 0.44) 93.47%);
    backdrop-filter: blur(25px);
`;

const SuggestionItem = styled.li`
    padding: 1.3rem;
    cursor: pointer;
    font-family: Bell Centennial Std;
    font-size: 1.5625rem;
    &:hover {
        background-color: #01A097;
    }
    @media (max-width: 768px) {
        font-size: 1.2rem;  
    }
`;

const ClearButton = styled.button`
    background-color: transparent;
    font-family: Bell Centennial Std;
    font-size: 1.3rem;
    height: 2.5rem;
    color: #FF002E;
    border: none;
    border-radius: 3rem;
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 1.2rem;  
        height: 2rem;
    }
`;

const Error = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 10px;
`;
export default SearchWallets;
