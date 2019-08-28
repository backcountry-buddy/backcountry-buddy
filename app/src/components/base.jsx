import React from 'react';
import { A } from 'hookrouter';

const Base = props => {
  const { routeResult, loggedIn } = props;
  const profileLink = loggedIn ?
  (
    <li>
      <A href="/profile">Profile</A>
    </li>
  ) : null;
  return (
    <div className="bc-buddy">
      <nav>
        <ul>
          <li>
            <A href="/">Home</A>
          </li>
          <li>
            <A href="/login">Login</A>
          </li>
          {profileLink}
        </ul>
      </nav>
      <header className="header">
        <h1>BackCountry Buddy</h1>
      </header>
      {routeResult}
    </div>
  );
};

export default Base;
