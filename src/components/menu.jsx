import React from 'react';
import styled from 'styled-components';

// MUI
import Link from '@material-ui/core/Link';


const MenuOptions = ['Projects', 'About Me', 'Resume'];
const MenuLink = {
    'Projects':'/',
    'About Me':'/about-me',
    'Resume':'https://drive.google.com/file/d/12XBR7IokX0VPABrBL0G2CSUovcd4LtuT/view'
};

export default function Menu(props) {

    const {
        colorScheme
    } = props;

    const MenuWrapper = styled.section`
        height: calc(100vh - 6rem);
        width: 100%;
        background-color: ${colorScheme.tertiary};
    `;

    const MenuOption = styled.h1`
        margin: auto;
        width: 10rem;
        font-size: 2em;
        padding: 2rem;
        color: ${colorScheme.primary};
        
        &:hover {
            cursor: pointer;
            color: ${colorScheme.secondary};
        }
    `;

    return (
        <MenuWrapper colorScheme={colorScheme}>
            {
                MenuOptions.map(option => {
                    return (
                        <MenuOption>
                            <Link
                                href={MenuLink[option]}
                                color={'inherit'}
                                style={{color: MenuLink[option] === window.location.pathname ? '#FCB03A' : null}}
                                target={option === 'Resume' ? '_blank' : null}
                            >
                                {option}
                            </Link>
                        </MenuOption>
                    )
                })
            }
        </MenuWrapper>
    );
}
