import React, { memo } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { useSession, useDispatch } from 'hooks';
import { signUp } from 'state/actions/userActions';
import SignUpForm from 'components/user/SignUpForm';
import routes from 'constants/routesPaths';
import AuthWrapper from 'components/common/AuthWrapper';

import './SignUpPage.scss';

import './SignUpPage.scss';

const SignUpPage = () => {
  const { authenticated } = useSession();
  const signUpRequest = useDispatch(signUp);

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <AuthWrapper>
      <p>
        <FormattedMessage id="signup.title" />
      </p>
      <SignUpForm onSubmit={signUpRequest} />
      <Link className="signin-link" to={routes.login}>
        <FormattedMessage id="signup.signin" />
      </Link>
    </AuthWrapper>
  );
};

export default memo(SignUpPage);
