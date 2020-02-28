import React from 'react';
import styled from 'styled-components';



export default function AboutMe(props) {
    const {
        colorScheme
    } = props;

    const Title = styled.h1`
        margin: 0;
    `;

    const AboutMeWrapper = styled.section`
        width: 100%;
    `;

    return (
        <AboutMeWrapper>
            <Title>About Me</Title>
        </AboutMeWrapper>
    );
}