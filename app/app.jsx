import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import Weather from './components/Weather'
import About from './components/About'
import Example from './components/Example'

import 'style!css!foundation-sites/dist/foundation.min.css';
import 'style!css!sass!./styles/app.scss';
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="example" component={Example} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
