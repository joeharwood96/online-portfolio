import React from 'react';
import styled from 'styled-components';

// MUI
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';


export default function Footer(props) {
    const { 
        colorScheme
    } = props;

    const FooterWrapper = styled.section`
        width: 100%;
        background-color: ${colorScheme.secondary};
        display: flex;
        justify-content: center;
        padding: 5rem 0;
    `;

    const TradeMark = styled.h3`
        font-weight: 400;
        color: white;
        margin: 0;
    `;

    const Icons = styled.a`
        margin-left: 1rem;
        color: white;

        &:hover {
            color: ${colorScheme.primary};
            cursor: pointer;
        }
    `;

    return (
        <FooterWrapper>
            <TradeMark>Joe Harwood © 2020</TradeMark>
            <Icons href='https://www.linkedin.com/in/josephharwood-3/' target={'_blank'}><LinkedInIcon /></Icons>
            <Icons href='https://github.com/joeharwood96' target={'_blank'}><GitHubIcon /></Icons>
            <Icons href="mailto:joeharwood3@gmail.com"><EmailIcon /></Icons>
        </FooterWrapper>
    )
}