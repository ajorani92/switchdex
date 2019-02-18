import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { WalletConnectionStatusContainer } from '../account';

const ToolbarWrapper = styled.div`
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    height: 64px;
    justify-content: space-between;
    padding: 0 20px;
    position: sticky;
`;

const MyWalletLink = styled(Link)`
    color: #333333;
    font-size: 16px;
    font-weight: 500;
    margin: 0 35px 0 0;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const ToolbarEnd = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
`;

export const Toolbar = () => (
    <ToolbarWrapper>
        <Logo />
        <ToolbarEnd>
            <MyWalletLink to="/my-wallet">My Wallet</MyWalletLink>
            <WalletConnectionStatusContainer />
        </ToolbarEnd>
    </ToolbarWrapper>
);
