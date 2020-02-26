import React from 'react';
import styled from 'styled-components';



export default function HomePage(props) {
    const {
        colorScheme
    } = props;

    const Title = styled.h1`
        margin: 0;
    `;

    const HomePageWrapper = styled.section`
        width: 100%;
    `;

    return (
        <HomePageWrapper>
            <Title></Title>
        </HomePageWrapper>
    );
}