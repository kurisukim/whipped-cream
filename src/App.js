import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import SweetBuilder from './containers/SweetBuilder/SweetBuilder';
import Checkout from './containers/Checkout/Checkout';
import Auth from './containers/Auth/Auth';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/auth" component={Auth}/>
            <Route path="/" component={SweetBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
