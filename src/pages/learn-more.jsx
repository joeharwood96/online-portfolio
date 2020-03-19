import React from 'react';
import styled from 'styled-components';
import {
    useParams
} from "react-router-dom";

// Images
import crownClothing from '../assets/crown-clothing.png';
import EPH from '../assets/eph.png';
import TourDeManc from '../assets/TourDeManc.png';
import VehicleDatabase from '../assets/vehicle.png';

// MUI 
import GitHubIcon from '@material-ui/icons/GitHub';

const ProjectData = {
    'eph': {
        id: 'eph',
        image: EPH,
        title: 'Early Professionals Hub',
        info: 'Project manager for a web application that allows users to create performance' + 
        'reviews and a news feed for undergraduates. Now being used by all IBM UK Undergraduates.',
        github: null,
        tech: ['React',  'Node.js', 'IBM Cloud']
    },
    'crownClothing': {
        id: 'crownClothing',
        image: crownClothing,
        title: 'Crown Clothing',
        info: 'A mock retial site which allows users to browse clothing items, add to cart and provide card payments through stripe.',
        github: 'https://github.com/joeharwood96/crown-clothing',
        tech: ['React', 'Node.js', 'Firebase']
    },
    'tourDeManc': {
        id: 'tourDeManc',
        image: TourDeManc,
        title: 'Tour De Manc',
        info: 'A web application for a real-world client that allowed photographers to upload' + 
        ' images of riders in a cycling race and using the Google Vision API to store the race number on the rider’s bib.',
        github: 'https://github.com/joeharwood96/Tour-De-Manc',
        tech: ['PHP', 'JavaScript', 'SQL']
    },
    'vehicleDatabase': {
        id: 'vehicleDatabase',
        image: VehicleDatabase,
        title: 'Vehicle Database',
        info: 'A Web and Android Application used to store and visualise data about vehicles which' + 
        ' allows users to add, update and delete vehicles.',
        github: 'https://github.com/joeharwood96/VehicleApp',
        tech: ['Java', 'JSP', 'SQLite']
    }
}


export default function LearnMore(props) {
    const { colorScheme } = props;
    const { id } = useParams();
    const project = ProjectData[id];

    const LearnMoreWrapper = styled.section`
        width: 100%;
    `;

    const LearnMoreTitle = styled.h3`
        font-size: 1.5rem;
        padding: 2rem 0rem;
        display: flex;
        justify-content: center;
        color: ${colorScheme.primary};
    `;

    const LearnMoreImage = styled.div`
        width: 50rem;
        height: 25rem;
        background-size: cover;                
        background-repeat: no-repeat;
        background-position: center center; 
        background-image: url(${project.image});
        margin: 2rem auto;
        box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;

        @media(max-width: 880px) {
            width: 90vw;
            height: 40vh;
            background-position: left;
        }
    `;

    const LearnMoreSummary = styled.h3`
        font-size: 1.5rem;
        width: 50rem;
        font-weight: 400;
        margin: 2rem auto;
        color: ${colorScheme.primary};

        @media(max-width: 880px) {
            width: 90vw;
        }
    `;

    const TechWrapper = styled.section`
        padding: 70px 45px;
        display: block;
        width: 45rem;
        margin: auto;
        flex-basis: 0;
        -webkit-box-flex: 1;
        flex-grow: 1;
        flex-shrink: 1;
        text-align: center;
        background-color: white;
        box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
        justify-content: center;
        color: ${colorScheme.primary};

        border-radius: 15px;
        margin-bottom: 2rem;

        @media(max-width: 880px) {
            width: 75vw;
            height: 40vh;
        }
        
    `;

    const GitHub = styled.a`
        margin-top: 0.5rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        transition: all .2s ease-in-out;
        color: ${colorScheme.primary};

        &:hover {
            color: ${colorScheme.secondary};
            cursor: pointer;
        }
    `;

    const ListTitle = styled.h3`
        padding-bottom: 2rem;
        font-weight: 400;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        color: ${colorScheme.secondary}
    `;

    const ListItem = styled.h3`
        padding-bottom: 1rem;
        font-weight: 400;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `;

    return (
        <LearnMoreWrapper>
            <LearnMoreTitle>{project.title}</LearnMoreTitle>
            <LearnMoreImage />
            <LearnMoreSummary>{project.info}</LearnMoreSummary>
            <TechWrapper>
                <div>
                <ListTitle>Technologies:</ListTitle>
                {
                    project.tech.map(tech => {
                        return <ListItem>{tech}</ListItem>
                    })
                }
                </div>
                <GitHub href={project.github} target={'_blank'}><GitHubIcon /></GitHub>
            </TechWrapper>
        </LearnMoreWrapper>
    )
}