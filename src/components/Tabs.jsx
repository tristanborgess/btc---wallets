import React from 'react';
import styled from 'styled-components';

const Tabs = ({ activeCategory, onCategoryChange }) => {
    const categories = ['On-chain', 'Lightning', 'Hardware'];

    return (
        <TabsContainer>
            {categories.map((category, index) => (
                <React.Fragment key={category}>
                    <Tab 
                        isActive={activeCategory === category} 
                        onClick={() => onCategoryChange(category)}
                    >
                        {category}
                        {activeCategory === category && <ActiveIndicator />}
                    </Tab>
                    {index < categories.length - 1 && <Separator>|</Separator>}
                </React.Fragment>
            ))}
        </TabsContainer>
    );
};

const TabsContainer = styled.div`
    display: flex;
    align-items: center;
    color: #F5F5F5;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Tab = styled.div`
    position: relative; 
    cursor: pointer;
    padding: 10px;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
    color: ${({ isActive }) => (isActive ? '#fff' : '#aaa')};

    &:hover {
        color: #fff;
    }
`;

const ActiveIndicator = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;  
    background-color: #fff; 
`;

const Separator = styled.span`
    color: #fff;
`;

export default Tabs;
