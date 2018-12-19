/**
 * root routes
 * @author renmaomin@126.com
 */
import React from 'react';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import pages from '../pages';

export default () => (
  <div style={{ height: '100%' }}>
    <Switch>
      <Route path="/button" component={pages.Button} />
      <Route path="/icon" component={pages.Icon} />
      <Route path="/" exact render={() => <Redirect to="/Button" />} />
    </Switch>
  </div>
);
