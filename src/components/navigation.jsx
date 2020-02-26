import React, {useState, useLayoutEffect} from 'react';
import styled from 'styled-components';

// MUI
import Link from '@material-ui/core/Link';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default function Navigation(props) {
    const {
        colorScheme 
    } = props;

    const NavWrapper = styled.section`
        display: flex;
        justify-content: space-between;
        background-color: ${props.colorScheme.tertiary};
        width: 100vw;
    `;

    const NavTitle = styled.h2`
        font-size: 2em;
        padding: 1rem;
        margin-top: 0.75rem;
        margin-left: 10rem;
        color: ${props.colorScheme.secondary};

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

        @media(max-width: 375px) {
            font-size: 0.75em;
            margin-top: 1.75rem;
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
    `;

    const [windowWidth, ] = useWindowSize();
    return (
        <NavWrapper>
            <NavTitle>Joe Harwood <span style={{color: colorScheme.primary}}>| Software Engineer</span></NavTitle>
            {
                windowWidth < 880 ?
                <MenuButton>MENU</MenuButton>
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
