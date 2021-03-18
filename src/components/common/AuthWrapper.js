import React from 'React';
import LogoImg from 'LogoImg.png'

import './AuthWrapper.scss'

const AuthWrapper = ({children}) => (

    <div class="container-fluid h-100">
        <div class = 'row justify-content-center h-100'>
            <div class = 'col-sm-6 hidden-md-down formContainer'>
                {children}
            </div>
            <div class = 'bg-primary col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                <img src={LogoImg} alt="Target MVD App"></img>
            </div>
        </div>
    </div>
)

export default AuthWrapper