import React from 'react';
import styled from 'styled-components';

// MUI
import Link from '@material-ui/core/Link';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

// Utils
import useWindowSize from '../utils/useWindowSize';

export default function Navigation(props) {
    const {
        colorScheme,
        setShowMenu,
        showMenu
    } = props;

    const [windowWidth, ] = useWindowSize();

    const NavWrapper = styled.section`
        display: flex;
        justify-content: space-between;
        background-color: ${showMenu && windowWidth < 880 ? 'white' : colorScheme.tertiary};
        width: 100vw;
        height: 6rem;
    `;

    const NavTitle = styled.h2`
        font-size: 2em;
        padding: 1rem;
        margin-top: 0.75rem;
        margin-left: 10rem;
        color: ${colorScheme.secondary};

        @media(max-width: 1408px) {
            margin-left: 1rem;
        }

        @media(max-width: 660px) {
            font-size: 1.5em;
            margin-top: 1.2rem;
        }

        @media(max-width: 545px) {
            font-size: 1.2em;
            margin-top: 1.4rem;
        }

        @media(max-width: 500px) {
            font-size: 0.9em;
            margin-top: 1.5rem;
        }

        @media(max-width: 414px) {
            font-size: 0.9em;
            margin-top: 0.75rem;
        }

        @media(max-width: 375px) {
            font-size: 0.75em;
            margin-top: 1rem;
        }

    `;

    const LinkWrapper = styled.section`
        color: ${colorScheme.primary};
        padding: 2.5rem;
        margin-right: 10rem;

        @media(max-width: 1408px) {
            margin-right: 1rem;
        }
    `;

    const MenuButton = styled.button`
        color: ${colorScheme.primary};
        font-size: 1em;
        height: 3em;
        width: 4em;
        margin: 1.5em;
        padding: 0.5em 0.5em;
        border: 2px solid ${colorScheme.primary};
        border-radius: 3px;

        &:hover {
            background-color: ${colorScheme.tertiary};
            cursor: pointer;
        }

        @media(max-width: 414px) {
            margin-top: 0.75rem;
        }

        @media(max-width: 375px) {
            margin-top: 1rem;
        }
    `;

    return (
        <NavWrapper>
            <NavTitle>Joe Harwood <span style={{color: colorScheme.primary}}>| Software Engineer</span></NavTitle>
            {
                windowWidth < 880 ?
                <MenuButton onClick={() => setShowMenu(!showMenu)}>{showMenu ? <CloseIcon />: <MenuIcon />}</MenuButton>
                :
                <LinkWrapper>
                    <Link color="inherit" href="/" style={{marginLeft: '1rem'}}>
                        Projects
                    </Link>
                    <Link color="inherit" href="/about-me" style={{marginLeft: '1rem'}}>
                        About Me
                    </Link>
                    <Link 
                        color="inherit" 
                        href="https://drive.google.com/file/d/12XBR7IokX0VPABrBL0G2CSUovcd4LtuT/view" 
                        style={{marginLeft: '1rem'}}
                        target='_blank'
                    >
                        Resume
                    </Link>
                </LinkWrapper>
            }
        </NavWrapper>
    );
}
