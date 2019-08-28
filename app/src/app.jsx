import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';

import Base from './components/base';

// STYLES
import './app.css';

const BaseContext = React.createContext({});

const initialState = {
  loggedIn: false,
  user: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const App = () => {
  const routeResult = useRoutes(routes);
  // eslint-disable-next-line
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <BaseContext.Provider value={initialState}>
      <BaseContext.Consumer>
        {/* TODO: Revisit this. */}
        {() => <Base routeResult={routeResult} {...state} />}
      </BaseContext.Consumer>
    </BaseContext.Provider>
  );
};


export default App;
