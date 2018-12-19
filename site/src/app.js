import * as React from 'react';
import { Link } from 'react-router-dom';
import Routes from './roots/routes';

import '../../packages/theme-default/lib/index.css';

const App = () => (
  <div className="app">
    <div className="header"><h1>pile docs</h1></div>
    <div className="main">
      <div className="nav">
        <ul>
          <li><Link to="/Button">Button</Link></li>
          <li><Link to="/Icon">icon</Link></li>
        </ul>
      </div>
      <div className="content">
        <Routes />
      </div>
    </div>
    <div className="footer"><p>uxdc</p></div>
  </div>
);

export default App;
