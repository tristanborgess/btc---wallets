import React, { useState } from 'react';
import styled from 'styled-components';

const WalletFilter = ({ columns, shownColumns, onColumnToggle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const availableColumns = columns.filter(column => column !== 'Name');
    const toggleColumn = (column) => {
        const newColumns = shownColumns.includes(column)
            ? shownColumns.filter(col => col !== column)
            : [...shownColumns, column];

        onColumnToggle(newColumns);
    };

    return (
        <>
            <FilterButton onClick={() => setIsOpen(!isOpen)}>Add +</FilterButton>
            {isOpen && (
                <Dropdown>
                    <CheckboxContainer>
                        <input type="checkbox" id="selectAll" 
                            checked={availableColumns.length === shownColumns.length - 1} 
                            onChange={() => onColumnToggle(availableColumns.length === shownColumns.length - 1 ? ['Name'] : ['Name', ...availableColumns])} 
                        />
                        <label htmlFor="selectAll">Select All</label>
                    </CheckboxContainer>
                    {availableColumns.map(column => (
                        <CheckboxContainer key={column}>
                            <input type="checkbox" id={column} 
                                checked={shownColumns.includes(column)} 
                                onChange={() => toggleColumn(column)} 
                            />
                            <label htmlFor={column}>{column}</label>
                        </CheckboxContainer>
                    ))}
                </Dropdown>
            )}
        </>
    );
};

const FilterButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #AE33D1;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family:  Bell Centennial Std;
`;

const Dropdown = styled.div`
    position: absolute;
    margin-top: 2.8rem;
    right: 0;
    background: linear-gradient(140deg, #1A0836 14.07%, rgba(24, 3, 56, 0.45) 93.47%);
    max-height: 25rem;   // You can adjust this value as per your requirements
    overflow-y: auto;    // Introduce vertical scrolling for overflowing content
    width: 22rem;        // Optional: You can set a specific width if needed
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family:  Bell Centennial Std;
    align-items: center;

    ::-webkit-scrollbar {
        width: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
        background: #AE33D1;
        border-radius: 0.125rem;
    }
    ::-webkit-scrollbar-track {
        background: #1A0836;
    }
`;

const CheckboxContainer = styled.div`
    margin: 1rem;
    align-items: baseline;
    display: flex;
    gap: 0.5rem;

`;

export default WalletFilter;
