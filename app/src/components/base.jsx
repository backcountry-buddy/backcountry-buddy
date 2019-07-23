import React from 'react';
import { A } from 'hookrouter';

const Base = (props) => {
  const { routeResult } = props;
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
          <li>
            <A href="/profile">Profile</A>
          </li>
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
