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
      <Route path="/totast" component={pages.Totast} />
      <Route path="/alert" component={pages.Alert} />
      <Route path="/switch" component={pages.Switch} />
      <Route path="/radio" component={pages.Radio} />
      <Route path="/" exact render={() => <Redirect to="/button" />} />
    </Switch>
  </div>
);
