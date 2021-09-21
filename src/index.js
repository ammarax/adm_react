import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Main} />
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('root'));