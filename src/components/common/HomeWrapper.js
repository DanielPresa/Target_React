import React from 'react';

import HomeMap from 'components/user/HomeMap';

const HomeWrapper = ({ children }) => (
  <div className="container-fluid h-100">
    <div className="row justify-content-center h-100">
      <div className="col-sm-6 hidden-md-down formContainer">{children}</div>
      <div className="bg-primary col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
        <HomeMap />
      </div>
    </div>
  </div>
);

export default HomeWrapper;
