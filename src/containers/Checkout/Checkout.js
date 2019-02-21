import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

export default class Checkout extends Component {
  state ={
    listIng: [],
    price: 0
  };

  componentWillMount(){
    const query = new URLSearchParams(this.props.location.search);
    let listIng = [], price = 0;

    for(let param of query.entries()){
      if(param[0] === 'price') price = param[1]
      else listIng.push(param[0]);
    }

    this.setState({listIng, price});
  }

  checkCancelHandler = () => {
    this.props.history.goBack();
  }

  checkContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
        listIng={this.state.listIng}
        checkCancel={this.checkCancelHandler}
        checkContinue={this.checkContinueHandler}/>
        <Route 
          path={this.props.match.path + '/contact-data'} 
          render={(props) => <ContactData {...props} ingredients={this.state.listIng} price={this.state.price}/>}/> 
        {/* props.match.path = actual path 
            when rendering like this, we are rendering manually. So the child component don't have props.history available
        */}
      </div>
    );
  }
}
