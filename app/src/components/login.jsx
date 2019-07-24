import React from 'react';

export function Logout() {
  // call logout, etc
}

export default function Login(props) {
  return (
    <form name="login">
      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />
    </form>
  );
};
