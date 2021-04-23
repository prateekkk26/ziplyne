import React from 'react'
import HomePage from './components/HomePage'
import UseCasePage from './components/UseCasePage/UseCasePage.jsx'
import ProductPage from './components/ProductPage.jsx'
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={HomePage} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/use-case" component={UseCasePage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
