import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './layout/Layout';
import { Router } from './Router/Router';

interface AppProps {
  children?: React.ElementType;
}

export const App: React.FunctionComponent = (props: AppProps) => (
  <React.Fragment>
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  </React.Fragment>
);
