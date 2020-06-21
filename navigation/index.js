import React, { useContext } from 'react';
import AuthNavigator from './Auth/index';
import AppNavigator from './AppFront/index';
import { AppContext } from '~/context';

const index = () => {
  // let isLoggedIn = false;
  const { isLoggedIn } = useContext(AppContext);

  return (
    <>
      {isLoggedIn && <AppNavigator />}
      {!isLoggedIn && <AuthNavigator />}
    </>
  );
};

export default index;
