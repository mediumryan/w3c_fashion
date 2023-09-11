import React from 'react';
import styled from 'styled-components';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaSnapchatSquare,
    FaFlickr,
    FaTwitter,
    FaLinkedinIn,
    FaSearch,
} from 'react-icons/fa';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--text-100);
    padding: var(--padding-double-large);
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        display: none;
    }
`;

const HeaderIcons = styled.div`
    display: flex;
    align-items: center;
`;

export default function Header() {
    return (
        <HeaderContainer id="header">
            <HeaderIcons>
                <FaFacebookSquare className="header_icons" />
                <FaInstagramSquare className="header_icons" />
                <FaSnapchatSquare className="header_icons" />
                <FaFlickr className="header_icons" />
                <FaTwitter className="header_icons" />
                <FaLinkedinIn className="header_icons" />
            </HeaderIcons>
            <FaSearch className="header_icons" />
        </HeaderContainer>
    );
}
