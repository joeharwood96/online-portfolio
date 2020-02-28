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

    const NavOptions = ['Projects', 'About Me', 'Resume'];
    const NavLink = {
        'Projects':'/',
        'About Me':'/about-me',
        'Resume':'https://drive.google.com/file/d/12XBR7IokX0VPABrBL0G2CSUovcd4LtuT/view'
    }

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
        padding-top: 1.25rem;
        margin-right: 10rem;
        display: flex;

        @media(max-width: 1408px) {
            margin-right: 2rem;
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

    const NavOption = styled.h3`
        color: ${colorScheme.primary};
        margin-left: 1rem;
        
        &:hover {
            cursor: pointer;
            color: ${colorScheme.secondary};
        }
    `;

    console.log(colorScheme.secondary);

    return (
        <NavWrapper>
            <NavTitle>Joe Harwood <span style={{color: colorScheme.primary}}>| Software Engineer</span></NavTitle>
            {
                windowWidth < 880 ?
                <MenuButton onClick={() => setShowMenu(!showMenu)}>{showMenu ? <CloseIcon />: <MenuIcon />}</MenuButton>
                :
                <LinkWrapper>
                    {
                        NavOptions.map(option => {
                            return (
                                <NavOption>
                                    <Link
                                        href={NavLink[option]}
                                        color={'inherit'}
                                        style={{color: NavLink[option] === window.location.pathname ? '#FCB03A' : null}}
                                        target={option === 'Resume' ? '_blank' : null}
                                    >
                                        {option}
                                    </Link>
                                </NavOption>
                            )
                        })
                    }
                </LinkWrapper>
            }
        </NavWrapper>
    );
}
