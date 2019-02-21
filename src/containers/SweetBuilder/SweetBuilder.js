import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Sweet from '../../components/Sweet/Sweet';
import BuildControls from '../../components/Sweet/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Sweet/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import axios from '../../axios-orders';
import classes from './SweetBuilder.module.css';

//global consts
const INGREDIENT_PRICES = {
  whippedCream: 0.2,
  layer: 0.5,
  secretCream: 0.5
};

class SweetBuilder extends Component {
  state = {
    ingredients: null,
    listIng: [],
    totalPrice: 2,
    purchaseEnable: false,
    showModal: false,
    loading: false,
    error: false
  }


  componentDidMount() {
    axios.get('https://puff-pastry.firebaseio.com/ingredients.json')
      .then(resp => {
        this.setState({ ingredients: resp.data })
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

  updatePurchaseState(updatedList) {
    if (updatedList.length > 0) {
      return this.setState({ purchaseEnable: true });
    } else { return this.setState({ purchaseEnable: false }); }
  }

  //-----ADDING AND REMOVING INGREDIENTS - AFFECT BUILD CONTROLS-----
  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const updatedPrice = this.state.totalPrice + priceAddition;

    const updatedList = [...this.state.listIng];
    updatedList.push(type);

    this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredients, listIng: updatedList });
    this.updatePurchaseState(updatedList);
  }

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] <= 0) {
      return;
    }

    const updatedCount = this.state.ingredients[type] - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const priceRemotion = INGREDIENT_PRICES[type];
    const updatedPrice = this.state.totalPrice - priceRemotion;

    const oldList = [...this.state.listIng];

    const reversedList = oldList.slice().reverse();
    const remove = reversedList.findIndex(currElement => {
      return currElement === type;
    });
    reversedList.splice(remove, 1);
    const updatedList = reversedList.reverse();

    this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredients, listIng: updatedList });
    this.updatePurchaseState(updatedList);
  }

  //-----MODAL HANDLER-----
  modalHandler = () => {
    if (this.state.purchaseEnable === true) {
      return this.setState({ showModal: true });
    }
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  //-----ORDER PAGE CONTROL-----
  purchaseContinueHandler = () => {
    const queryParams = [];
    queryParams.push(this.state.listIng.join('&'));
    // console.log(queryParams);
    queryParams.push('price=' + this.state.totalPrice); 
    const queryString = queryParams.join('&');

    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  render() {
    const disabledInfoL = {
      ...this.state.ingredients
    };
    for (let key in disabledInfoL) {
      disabledInfoL[key] = disabledInfoL[key] <= 0;
    }

    let counter = 0;
    for (let key in this.state.ingredients) {
      counter += this.state.ingredients[key];
    }

    //Submit order
    let orderSummary = null;
    let sweet = this.state.error ? <p style={{ color: "var(--rose)" }}><strong>Something went wrong:</strong> Ingredients can't be loaded! :(</p> : <Spinner />;
    if (this.state.ingredients) {
      sweet = (
        <div className={classes.SweetBuilder}>
          <Sweet
            ingredients={this.state.ingredients}
            listIng={this.state.listIng} />

          <BuildControls
            ingAdded={this.addIngredientHandler}
            ingRemoved={this.removeIngredientHandler}
            purchasable={this.state.purchaseEnable}
            disabledLess={disabledInfoL}
            disabledMore={counter <= 8 ? false : true}
            totalPrice={this.state.totalPrice}
            showModal={this.modalHandler} />
        </div>
      );

      orderSummary = <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCancelled={this.closeModal}
        purchaseContinued={this.purchaseContinueHandler}
        total={this.state.totalPrice} />;
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal showModal={this.state.showModal} modalClosed={this.closeModal}>
          {orderSummary}
        </Modal>
        {sweet}
      </Aux>
    );
  }
}

export default ErrorHandler(SweetBuilder, axios);