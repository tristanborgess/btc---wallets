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
            <FilterButton onClick={() => setIsOpen(!isOpen)}>+</FilterButton>
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
    font-size: 20px;
    cursor: pointer;
    color: white;  // Adjust the color to fit your design
`;

const Dropdown = styled.div`
    position: absolute;
    margin-top: 20px;
    right: 0;
    background: linear-gradient(140deg, #1A0836 14.07%, rgba(24, 3, 56, 0.45) 93.47%);
    border: 1px solid black;
`;

const CheckboxContainer = styled.div`
    margin: 5px;
`;

export default WalletFilter;
