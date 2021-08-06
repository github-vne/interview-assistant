import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'routers/AppRouter';

const rootEl = document.getElementById('root');

const App = () => {
  return <AppRouter />;
};

ReactDOM.render(<App />, rootEl);
