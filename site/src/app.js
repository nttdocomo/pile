import * as React from 'react';
import { Link } from 'react-router-dom';
import Routes from './roots/routes';

import '../../packages/theme-default/lib/index.css';
import './app.css';

const App = () => (
  <div className="app">
    <div className="header"><h1>pile docs</h1></div>
    <div className="main">
      <div className="nav">
        <ul>
          <li><Link to="/button">Button</Link></li>
          <li><Link to="/icon">Icon</Link></li>
          <li><Link to="/totast">Totast</Link></li>
        </ul>
      </div>
      <div className="content">
        <Routes />
      </div>
    </div>
    <div className="footer"><p>Copyright © 2017-2018 滴滴企业版设计体验技术部联合出品</p></div>
  </div>
);

export default App;
