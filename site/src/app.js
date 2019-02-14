import * as React from 'react';
import { Link } from 'react-router-dom';
import Routes from './roots/routes';

import '../../packages/theme-default/lib/index.css';
import './app.css';

const App = () => (
  <div className="app">
    <div className="header clearfix">
      <h1 className="trademark fl">pile docs</h1>
      <nav className="nav fr">
        <ul className="clearfix">
          <li><a>首页</a></li>
          <li><a>设计</a></li>
          <li><a>组件</a></li>
          <li><a>github</a></li>
        </ul>
      </nav>
    </div>
    <div className="main">
      <div className="sidebar">
        <h2 className="links actived"><a href="/theme">主题</a></h2>
        <h2 className="links"><a href="/language">多语言</a></h2>
        <h2 className="un-links">
components
          {' '}
          <span>
            <i />
            <b />
          </span>
        </h2>
        <ul className="arc-list">
          <li className="links"><Link to="/button">Button</Link></li>
          <li className="links"><Link to="/icon">Icon</Link></li>
          <li className="links"><Link to="/switch">Switch</Link></li>
          <li className="links"><Link to="/radio">Radio</Link></li>
          <li className="sec-nav">
            <dl>
              <dt>交互</dt>
              <dd className="links"><Link to="/totast">Toast</Link></dd>
            </dl>
          </li>
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
