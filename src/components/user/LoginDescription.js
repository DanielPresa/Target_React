import React from 'react';

import TargetLogo from 'assets/TargetLogo.png'

import './LoginDescription.scss';


const LoginDescription = () => (

    <div className="container-fluid h-100 justify-content-center hidden-md-down">
        <img src={TargetLogo} className='targetLogo'></img>
        <h1 className='titleLogin'>
            TARGET MVD
        </h1>
        <h2 className='subtitleLogin'>
            Find people near you & Connect
        </h2>
        <p className='descriptionText'>
            Create a  target  wherever on the map, specify your interest: Travel, Dating, Music, etc and start conecting with others who share your interest.
        </p>
    </div>
);

export default LoginDescription;
