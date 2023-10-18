import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import SearchWallets from './SearchWallets';
import WalletFilter from './WalletFilter';
import data from '/data.json';  // Ensure this path is correct

const Wallets = () => {
    const [wallets, setWallets] = useState([]);
    const [activeCategory, setActiveCategory] = useState('On-chain');
    const [shownColumns, setShownColumns] = useState(['Name']);
    const [loading, setLoading] = useState(false);
    const features = wallets.length > 0 ? Object.keys(wallets[0]).filter(feature => feature !== '_id' && feature !== 'Category') : [];
    const [displayAllWallets, setDisplayAllWallets] = useState(true);
    const [searchedWallets, setSearchedWallets] = useState([]);

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

    useEffect(() => {
        const filteredWallets = data.filter(wallet => wallet.Category === activeCategory);
        setWallets(filteredWallets);

        if (filteredWallets.length > 0) {
            const walletFeatures = Object.keys(filteredWallets[0]).filter(key => key !== '_id' && key !== 'Category');
            setShownColumns(['Name', ...walletFeatures.slice(1, 8)]);
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
                                    <StyledTableHeader key={feature}>{feature}</StyledTableHeader>
                                ))}
                                <StyledTableHeader>
                                    <WalletFilter 
                                        columns={features} 
                                        shownColumns={shownColumns} 
                                        onColumnToggle={handleColumnToggle} 
                                    />
                                </StyledTableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            {displayWallets.map(wallet => (
                                <tr key={wallet._id}>
                                    {shownColumns.map(feature => (
                                        <StyledTableCell key={feature}>
                                            {typeof wallet[feature] === "object" ? JSON.stringify(wallet[feature]) : wallet[feature]}
                                        </StyledTableCell>
                                    ))}
                                    <StyledTableCell></StyledTableCell> {/* Added this to align with the "+" column in header */}
                                </tr>
                            ))}
                        </tbody>
                    </StyledTable>
                </TableContainer>
            )}
        </>
    );  
};

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;  // Updated to space-between to move search to the right
    width: 100%;  // Updated to align with the table width
    margin: 20px auto 0;  // Center the container  
`;

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0 2vw 2vw 2vw;
    width: 90vw;
    border-right: 1px solid rgba(199, 164, 255, 0.30);
    border-bottom: 1px solid rgba(199, 164, 255, 0.30);
    background: linear-gradient(140deg, rgba(26, 8, 54, 0.98) 14.07%, rgba(24, 3, 56, 0.44) 93.47%);
    box-shadow: 8px 8px 3px 0px rgba(199, 164, 255, 0.15);
    backdrop-filter: blur(25px);
    margin-left: auto;
    margin-right: auto;
`;

const StyledTable = styled.table`
    width: 90vw;
    border-collapse: collapse;
    padding: 2vw;
    
`;

const StyledTableCell = styled.td`
    padding: 8px 12px;
    text-align: left;
`;

const StyledTableHeader = styled.th`
    padding: 8px 12px;
    text-align: left;
    background: #260C4F;
`;

const LoadingMessage = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
`;

export default Wallets;
