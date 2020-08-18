import { HomePage } from '@@App/pages/HomePage';
import { ListPage } from '@@App/pages/ListPage';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

interface RouterProps {}

export const Router: React.FunctionComponent<RouterProps> = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/list" component={ListPage} />

      <Route component={() => <Redirect to="/" />} />
    </Switch>
  );
};
