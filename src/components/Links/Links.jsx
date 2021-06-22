import React from 'react';
import Linkedin from '../../assets/icons8-linkedin.svg';
import Github from '../../assets/icons8-github.svg';
import './Links.scss';

const Links = () => {
    console.log(window.location)
    return (
        <div className={'links-bar'}>
            <a href="https://www.linkedin.com/in/josephharwood-3/" target='blank'><img className={'home-page-icon'} img src={Linkedin} alt="linkedin" width={20} height={20}/></a>
            <a href="https://github.com/joeharwood96" target='blank' style={{marginTop:-3}}><img className={'home-page-icon'} img src={Github} alt="linkedin" width={25} height={25} style={{marginLeft: 5}}/></a>
            <h2 className={'links-bar-resume'}><a href={window.location.origin + '/resume'} target='blank'>Résumé</a></h2>
        </div>
    )
}

export default Links;   