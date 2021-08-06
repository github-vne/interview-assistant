import { GlobalStyle } from '../globalCss.js';
import { Table, Main } from 'pages';
import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Header, Layout } from 'components';
import { Space } from 'antd';

export default () => {
  return (
    <BrowserRouter>
      <Header>
        <Space>
          <Link to="/">Main</Link>
          <Link to="/table">Table</Link>
        </Space>
      </Header>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/table" component={Table} />
        </Switch>
      </Layout>
      <GlobalStyle />
    </BrowserRouter>
  );
};
