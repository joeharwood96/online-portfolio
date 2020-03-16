import React from 'react';
import styled from 'styled-components';

// Components 
import ProjectCard from '../components/project-card';

// MUI
import Link from '@material-ui/core/Link';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import SettingsInputHdmiOutlinedIcon from '@material-ui/icons/SettingsInputHdmiOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@material-ui/icons/SettingsSystemDaydreamOutlined';

// Images
import crownClothing from '../assets/crownLogo.svg';
import EPH from '../assets/ephLogo.png';
import TourDeManc from '../assets/tourdemancLogo.png';
import VehicleDatabase from '../assets/vehicleLogo.svg';


const ProjectData = [
    {
        image: EPH,
        title: 'Early Professionals Hub',
        info: 'Project manager for a web application that allows users to create performance' + 
        'reviews and a news feed for undergraduates. Now being used by all IBM UK Undergraduates. (React,  Node.js, IBM Cloud)',
        github: null
    },
    {
        image: crownClothing,
        title: 'Crown Clothing',
        info: 'A mock retial site which allows users to browse clothing items, add to cart and provide card payments through stripe. (React, Node.js, Firebase)',
        github: 'https://github.com/joeharwood96/crown-clothing'
    },
    {
        image: TourDeManc,
        title: 'Tour De Manc',
        info: 'A web application for a real-world client that allowed photographers to upload' + 
        ' images of riders in a cycling race and using the Google Vision API to store the race number on the rider’s bib. (PHP, JavaScript, SQL)',
        github: 'https://github.com/joeharwood96/Tour-De-Manc'
    },
    {
        image: VehicleDatabase,
        title: 'Vehicle Database',
        info: 'A Web and Android Application used to store and visualise data about vehicles which' + 
        ' allows users to add, update and delete vehicles. (Java, JSP, SQLite)',
        github: 'https://github.com/joeharwood96/VehicleApp'
    }
]

export default function Projects(props) {
    const {
        colorScheme
    } = props;

    const ProjectsPageWrapper = styled.section`
    `;

    const IntroWrapper = styled.div`
        background-color: ${colorScheme.secondary};
        padding: 5rem 0rem;
        width: calc(100%);
    `;

    const IntroQuote = styled.h1`
        font-size: 2em;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 5rem 1rem;
        font-size: 2rem;
        margin: 0;
        color: white;

        @media(max-width: 1408px) {
            margin-left: 1rem;
        }
    `;

    const Study = styled.h3`
        margin-top: -3rem;
        font-weight: 400;
        color: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        @media(max-width: 1408px) {
            margin-left: 1rem;
        }
    `;

    const Work = styled.h3`
        margin-top: -1rem;
        padding-bottom: 5rem;
        font-weight: 400;
        color: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        @media(max-width: 1408px) {
            margin-left: 1rem;
        }
    `;

    const ProjectTitle = styled.h3`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        font-size: 2rem;
        padding-top: 1rem;
        color: ${colorScheme.primary}
    `;

    const ProjectIntro = styled.h3`
        font-weight: 400;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        color: ${colorScheme.primary}
    `;

    const ProjectWrapper = styled.section`
        width: 100%;
        padding-top: 3rem;
        padding-bottom: 5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `;

    const SkillsWrapper = styled.section`
        margin: auto;
        margin-top: -5rem;
        padding-bottom: 1rem;
        display: flex;
        width: 80vw;
        height: 50rem;

        @media(max-width: 880px) {
            display: block;
            height: 100%;
        }
    `;

    const SkillColumnLeft = styled.div`
        padding: 70px 45px;
        display: block;
        flex-basis: 0;
        -webkit-box-flex: 1;
        flex-grow: 1;
        flex-shrink: 1;
        text-align: center;
        background-color: white;
        border-radius: 15px 0px 0px 15px;
        box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
        justify-content: center;
        color: ${colorScheme.primary};

        @media(max-width: 880px) {
            border-radius: 15px;
            margin-bottom: 2rem;
        }
    `;

    const SkillColumnMiddle = styled.div`
        padding: 70px 45px;
        display: block;
        flex-basis: 0;
        -webkit-box-flex: 1;
        flex-grow: 1;
        flex-shrink: 1;
        text-align: center;
        background-color: white;
        box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
        justify-content: center;
        color: ${colorScheme.primary};

        @media(max-width: 880px) {
            border-radius: 15px;
            margin-bottom: 2rem;
        }
    `;

    const SkillColumnRight = styled.div`
        padding: 70px 45px;
        display: block;
        flex-basis: 0;
        -webkit-box-flex: 1;
        flex-grow: 1;
        flex-shrink: 1;
        text-align: center;
        background-color: white;
        border-radius: 0px 15px 15px 0px;
        box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
        justify-content: center;
        color: ${colorScheme.primary};

        @media(max-width: 880px) {
            border-radius: 15px;
            margin-bottom: 2rem;
        }
    `;

    const SkillTitle = styled.h3`
        font-size: 1.5rem;
    `;

    const SkillIntro = styled.h3`
        padding-bottom: 5rem;
        font-weight: 400;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

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
        <ProjectsPageWrapper>
            <IntroWrapper>
                <IntroQuote>Using code to create experiences.</IntroQuote>
                <Study>Currently studying at <span style={{width: 5}}> </span>
                    <Link 
                        style={{fontWeight: 700, cursor:'pointer', color: colorScheme.primary}}
                        href='https://www2.mmu.ac.uk'
                        target='_blank'
                    >
                     Manchester Metropolitian University
                    </Link>
                </Study>
                <Work>Previosuly worked at <span style={{width: 5}}> </span>
                    <Link 
                        style={{fontWeight: 700, cursor:'pointer', color: colorScheme.primary}}
                        href='https://www.ibm.com/uk-en'
                        target='_blank'
                    >
                     IBM
                    </Link> 
                    , <span style={{width: 5}}> </span>
                    <Link 
                        style={{fontWeight: 700, cursor:'pointer', color: colorScheme.primary}}
                        href='https://www.mybuzztechnologies.co.uk/'
                        target='_blank'
                    >
                     MyBuzz Technologies
                    </Link>
                    <span style={{width: 5}}> </span> and the <span style={{width: 5}}> </span>
                    <Link 
                        style={{fontWeight: 700, cursor:'pointer', color: colorScheme.primary}}
                        href='https://cred.org.uk/'
                        target='_blank'
                    >
                     CRED Foundation
                    </Link>
                </Work>
            </IntroWrapper>
            <SkillsWrapper>
                <SkillColumnLeft>
                    <SettingsInputHdmiOutlinedIcon style={{ color: colorScheme.secondary, fontSize: 40 }}/>
                    <SkillTitle>Frameworks</SkillTitle>
                    <SkillIntro>
                        I use frameworks to quickly produce reusable and robust software components.
                    </SkillIntro>
                    <ListTitle>Frameworks I use:</ListTitle>
                    <ListItem>React</ListItem>
                    <ListItem>Angular</ListItem>
                    <ListItem>Node.js</ListItem>
                    <ListItem>Apache Spark</ListItem>
                </SkillColumnLeft>
                <SkillColumnMiddle>
                    <CodeOutlinedIcon style={{ color: colorScheme.secondary, fontSize: 40 }} />
                    <SkillTitle>Languages</SkillTitle> 
                    <SkillIntro>
                        Every programmer needs an arsenal of Object-orientated programming languages.
                    </SkillIntro>
                    <ListTitle>Languages I speak:</ListTitle>
                    <ListItem>Python</ListItem>
                    <ListItem>JavaScript</ListItem>
                    <ListItem>Java</ListItem>
                    <ListItem>SQL</ListItem>
                </SkillColumnMiddle>
                <SkillColumnRight>
                    <SettingsSystemDaydreamOutlinedIcon style={{ color: colorScheme.secondary, fontSize: 40 }} />
                    <SkillTitle>Systems</SkillTitle>
                    <SkillIntro>
                        Ready made software systems help me efficently solve real world problems.
                    </SkillIntro>
                    <ListTitle>Systems I can't live without:</ListTitle>
                    <ListItem>Git</ListItem>
                    <ListItem>Kubernetes</ListItem>
                    <ListItem>Docker</ListItem>
                </SkillColumnRight>
            </SkillsWrapper>
            <ProjectTitle>My Recent Work</ProjectTitle>
            <ProjectIntro>Here are a few of my favourite projects.</ProjectIntro>
            <ProjectWrapper>
            {
                ProjectData.map((project, index)=> {
                    return (
                        <ProjectCard 
                            project={project}
                            colorScheme={colorScheme}
                        />
                    )
                })
            }
            </ProjectWrapper>
        </ProjectsPageWrapper>
    );
}