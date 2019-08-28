import React from 'react';

import Home from './components/home';
import Login, { Logout } from './components/login';
import Profile from './components/profile';

const routes = {
  '/': () => <Home />,
  '/login': () => <Login />,
  '/logout': () => <Logout />,
  '/profile': () => <Profile />
};

export default routes;
