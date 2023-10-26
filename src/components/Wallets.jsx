import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import SearchWallets from './SearchWallets';
import WalletFilter from './WalletFilter';
import data from '/data.json';  // Ensure this path is correct
import WalletModal from './WalletModal';

const Wallets = () => {
    const [wallets, setWallets] = useState([]);
    const [activeCategory, setActiveCategory] = useState('On-chain');
    const [shownColumns, setShownColumns] = useState(['Name']);
    const [loading, setLoading] = useState(false);
    const features = wallets.length > 0 ? Object.keys(wallets[0]).filter(feature => feature !== '_id' && feature !== 'Category' && feature !== 'Link' && feature !== 'Logo') : [];
    const [displayAllWallets, setDisplayAllWallets] = useState(true);
    const [searchedWallets, setSearchedWallets] = useState([]);
    const [selectedWallet, setSelectedWallet] = useState(null);
    const openModal = (wallet) => {
        setSelectedWallet(wallet);
    };
    const closeModal = () => {
        setSelectedWallet(null);
    };
    const handleSearch = (wallet) => {
        if (!searchedWallets.some(w => w._id === wallet._id)) {
            setSearchedWallets(prevWallets => [...prevWallets, wallet]);
            setDisplayAllWallets(false);
        }
    };
    const handleClearSearch = () => {
        setSearchedWallets([]);
        setDisplayAllWallets(true);
    };
    const displayWallets = displayAllWallets ? wallets : searchedWallets;
    const handleColumnToggle = (newShownColumns) => {
        setShownColumns(newShownColumns);
    };
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
            return text;
    };
    

    useEffect(() => {
        const filteredWallets = data.filter(wallet => wallet.Category === activeCategory);
        setWallets(filteredWallets);

        if (filteredWallets.length > 0) {
            const walletFeatures = Object.keys(filteredWallets[0]).filter(key => key !== '_id' && key !== 'Category' && key !== 'Link' && key !== 'Logo');
            setShownColumns(['Name', ...walletFeatures.slice(1, 6)]);
        }
    }, [activeCategory]);
    
    

    return (
        <>
            {loading ? (
                <LoadingMessage>Loading wallets...</LoadingMessage>
            ) : (
                <TableContainer>
                            <FilterContainer>
                                <Tabs 
                                    activeCategory={activeCategory} 
                                    onCategoryChange={setActiveCategory} 
                                />
                                <SearchWallets 
                                    onSearch={handleSearch} 
                                    onClear={handleClearSearch} 
                                    activeCategory={activeCategory}
                                    wallets={wallets}
                                    hasSearched={!displayAllWallets}
                                />
                            </FilterContainer>
                    <StyledTable>
                        <thead>
                            <tr>
                                {shownColumns.map(feature => (
                                    <StyledTableHeader 
                                        key={feature}
                                        className={feature === 'Name' ? 'name-column-cell' : ''}>
                                        {feature}
                                    </StyledTableHeader>
                                ))}
                                <StyledTableHeader>
                                    <MoreContainer>
                                    <WalletFilter 
                                        columns={features} 
                                        shownColumns={shownColumns} 
                                        onColumnToggle={handleColumnToggle} 
                                    />
                                    </MoreContainer>
                                </StyledTableHeader>
                            </tr>
                        </thead>
                        {selectedWallet && <WalletModal wallet={selectedWallet} onClose={closeModal} />}
                        <StyledTableBody>
                            {displayWallets.map(wallet => (
                                <StyledTableRow key={wallet._id} onClick={() => openModal(wallet)}>
                                    {shownColumns.map(feature => (
                                        <StyledTableCell 
                                            key={feature}
                                            className={feature === 'Name' ? 'name-column-cell' : ''}
                                        >
                                                {mapYesNoToSymbols(wallet[feature])}
                                        </StyledTableCell>
                                    ))}
                                </StyledTableRow>
                            ))}
                        </StyledTableBody>
                    </StyledTable>
                </TableContainer>
            )}
        </>
    );  
};

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;  
    width: 100%;  
    height: auto;
    margin: 1.25rem auto 0;  

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

const MoreContainer = styled.div`
    margin-left: 1.5rem;
`;

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0 2vw 2vw 2vw;
    max-width: 78.75rem;
    max-height: 41.8125rem; 
    border-right: 1px solid rgba(199, 164, 255, 0.30);
    border-bottom: 1px solid rgba(199, 164, 255, 0.30);
    background: linear-gradient(140deg, rgba(26, 8, 54, 0.98) 14.07%, rgba(24, 3, 56, 0.44) 93.47%);
    box-shadow: 8px 8px 3px 0px rgba(199, 164, 255, 0.15);
    backdrop-filter: blur(25px);
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        max-width: 75rem;
    }
    
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    overflow-x: auto;  // Added overflow-x for horizontal scroll
    display: block;    // Added to make overflow properties effective
    
`;

const StyledTableHeader = styled.th`
    padding: 1.3rem 0 1.1rem 12px;
    text-align: left;
    background: #260C4F;
    color: #F5F5F5;
    font-family: Bell Centennial Std;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: sticky;  // Added to freeze the header
    top: 0;            // Aligns the header to the top of the table container
    z-index: 1;        // Ensure headers appear above the table rows
    min-width:9rem;
    width: 100%;

    &.name-column-cell {
        position: sticky;
        left: 0;
        z-index: 2; // Ensure it appears above other cells
        background-color: #260C4F; // Same color as your header's background to ensure it’s not transparent
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const StyledTableBody = styled.tbody`
    max-height: 31.25rem; 
    overflow-y: auto;
    width: 100%;
`;

const StyledTableCell = styled.td`
    padding: 1.5rem 12px;
    text-align: left;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    min-width:9rem;

    &.name-column-cell {
        font-size: 2rem; 
        width:9rem;
        position: sticky;
        left: 0;
        z-index: 1; // Ensure it appears above other cells
        background-color: #1a0837; // To cover the cells behind when scrolling
        box-shadow: 2px 0 5px rgba(0,0,0,0.1);
        
    }

    @media (max-width: 768px) {
        font-size: 1rem;

        &.name-column-cell {
            font-size: 1.5rem;
        }
    }
`;

const StyledTableRow = styled.tr`
    &:hover {
        background-color: #01706a;  // Adjust color as per your theme
        cursor: pointer;
    }
`;

const LoadingMessage = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const StyledSymbol = styled.span`
    color: #3CE500;
    font-family: SF Mono;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;

&.no-symbol {
    color: #FF002E;
    font-family: SF Mono;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;

        &.no-symbol {
            font-size: 1.5rem;
        }
    }
`;

export default Wallets;
