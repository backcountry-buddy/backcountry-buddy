import React from 'react';

import Home from './components/home';
import Login from './components/login';
import Profile from './components/profile';

const routes = {
  '/': () => <Home />,
  '/login': () => <Login />,
  '/profile': () => <Profile />
};

export default routes;
