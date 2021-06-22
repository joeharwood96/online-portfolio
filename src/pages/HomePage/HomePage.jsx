import React from 'react';
import './HomePage.scss';
import Me from '../../assets/joe.jpg';
import Folder from '../../assets/folder_white_48dp.svg';
import LinkIcon from '../../assets/link_white_48dp.svg';
import Github from '../../assets/icons8-github.svg';

function HomePage() {
    const projects = [
        {
            title: 'Databot',
            description: 'A natural language interface to databases, allows users to share and find data.',
            tech: 'Python React Firebase Google Cloud SQL MongoDB AWS Docker Node.js',
            url: 'https://databotapp.com'
        },
        {
            title: 'Cardiomyopathy Platform',
            description: 'A platform that allows users to add, search and delete data about cardiomyopathy.',
            tech: 'VUE Firebase Google Cloud Node.js',
            github: '',
            url: 'https://cardiomyopathy-platform-bb5e5.web.app/'
        },
        {
            title: 'Tour De Manc',
            description: 'A web application for real-world client. Allows users to upload images of bike race and using Google Vision API, store details from images.',
            tech: 'JavaScript HTML CSS Google Vision API SQL PhpMyAdmin',
            url: 'https://www.tourdemanc.co.uk/',
            github: 'https://github.com/joeharwood96/Tour-De-Manc'
        },
        {
            title: 'Films App',
            description: 'A web and Andriod application that allows users to keep track of their film inventory.',
            tech: 'JavaScript Java Kotlin Google Cloud SQL MySQL',
            github: '',
            url: ''
        },
        {
            title: 'Early Professionals Hub',
            description: 'A web platform for IBM that improved how performance reviews are conducted, now used by all undergraduates IBM UK.',
            tech: 'React IBM Cloud Node.js'
        },
        {
            title: 'Crown Clothing',
            description: 'A fully functional mock retail website with Stripe API.',
            tech: 'React Firebase Node.js',
            github: 'https://github.com/joeharwood96/crown-clothing'
        },
    ];

    return (
        <div className={'home-page'}>
            <div className={'home-page-info'}>
                <div>
                <img src={Me} alt="Joseph Harwood" className={'home-page-image'}/>
                <h2 style={{fontSize: 28}}>Joseph Harwood</h2>
                <h2>Software Engineer, currently @ <a href="https://www.kainos.com/" target='blank'>Kainos</a></h2>
                <h2>Ex <a href="https://www.ibm.com" target='blank'>IBM</a>, <a href="https://www.reply.com" target='blank'>Reply</a> and <a href="https://www.jpmorgan.com/global" target='blank'>JP Morgan Chase</a></h2>
                </div>
            </div>
            <h2>Projects</h2>
            <div className={'home-page-projects'}>
            {
                projects.map(project => {
                    return (
                        <div className={'home-page-projects-card'}>
                            <div className={'home-page-projects-card-header'}>
                                <img src={Folder} alt=""/>
                                <div className={'home-page-projects-card-header-links'}>
                                {
                                    project.github ? <a href={project.github} target='blank' className={'home-page-projects-card-header-link'}><svg xmlns="http://www.w3.org/2000/svg" role="img" height="24" color="white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                                    :
                                    null
                                }
                                {
                                    project.url ? <a href={project.url} target='blank' style={{marginLeft: '1rem'}} className={'home-page-projects-card-header-link'}><svg xmlns="http://www.w3.org/2000/svg" role="img" height="24" color="white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>

                                    :
                                    null
                                }
                                </div>
                            </div>
                            <h3 className={'home-page-projects-card-title'}>{project.title}</h3>
                            <p className={'home-page-projects-card-text'}>{project.description}</p>
                            <p className={'home-page-projects-card-tech'}>{project.tech}</p>
                            <button className={'home-page-projects-card-button'}>Learn More</button>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default HomePage;