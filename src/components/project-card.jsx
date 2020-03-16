import React from 'react';
import styled from 'styled-components';

// MUI 
import GitHubIcon from '@material-ui/icons/GitHub';

export default function ProjectCard(props) {
    const { 
        project,
        colorScheme
    } = props;

    const ProjectCard = styled.section`
        width: 19rem;
        height: 12.5rem;
        margin-top: 2rem;
        margin-left: 1rem;
        margin-right: 1rem;
        border-radius: 15px;
        background-size: cover;                
        background-repeat: no-repeat;
        background-position: center center; 
        background-image: url(${project.image});
        text-align: center;
    `;

    const ProjectOverlay = styled.section`
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background-color: ${colorScheme.primary};
        opacity: 0;
        transition: .5s ease;

        &:hover {
            opacity 1;
        }
    `;

    const ProjectTitle = styled.h3`
        margin: 0;
        font-size: 1.25rem;
        padding-top: 3.5rem; 
        color: white;
    `;

    const Button = styled.button`
        font-size: 1em;
        width: 8rem;
        padding: 0.5em 0.5em;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        border: 2px solid ${colorScheme.secoondary};
        border-radius: 5px;
        justify-content: center;
        transition: all .2s ease-in-out;
        background-color: ${colorScheme.primary};
        color: white;

        &:hover {
            background-color: ${colorScheme.secondary};
            border: 2px solid ${colorScheme.secondary};
            color: white;
            cursor: pointer;
        }
    `;

    const GitHub = styled.a`
        color: white;
        margin-top: 0.5rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        transition: all .2s ease-in-out;

        &:hover {
            color: ${colorScheme.secondary};
        }
    `;

    const ButtonsWrapper = styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 2rem 0;
    `;

    return (
        <ProjectCard>
            <ProjectOverlay>
                <ProjectTitle>
                    {project.title}
                </ProjectTitle>
                <ButtonsWrapper>
                    <Button>Case Study</Button>
                    {
                        project.github ? 
                        <GitHub href={project.github} target={'_blank'}><GitHubIcon /></GitHub>
                        : null
                    }
                </ButtonsWrapper>
            </ProjectOverlay>
        </ProjectCard>
    )
}