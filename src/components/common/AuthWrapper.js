import React from 'React';
import LoginImg from 'assets/LoginImg.png';

import './AuthWrapper.scss';

const AuthWrapper = ({ children }) => (
  <div className="container-fluid h-100">
    <div className="row justify-content-center h-100">
      <div className="col-sm-6 hidden-md-down formContainer">{children}</div>
      <div className="bg-primary col-sm-6 col-md-6 col-lg-6 col-xl-6 appImgContainer">
        <img src={LoginImg} alt="Target MVD App" className='appImgContainer__mockAppImg' />
      </div>
    </div>
  </div>
);

export default AuthWrapper;
