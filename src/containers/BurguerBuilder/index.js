import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burguer from "../../components/Burguer";
import BuildControls from "../../components/Burguer/BuildControls";
import Modal from "../../components/UI/Modal";
import classes from "./styles.module.css";

import OrderSummary from "../../components/Burguer/OrderSumary";
import api from "../../api";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurguerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4.0, // base price
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState = (updatedIngredients) => {
    const sum = Object.keys(updatedIngredients)
      .map((igKey) => {
        return updatedIngredients[igKey];
      })
      .reduce((accumulator, element) => {
        return accumulator + element;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseContinueHandler = () => {
    // alert("Continuing purchase... (to be implemented)");

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice, // in a real app, we would recalculate the price on the service
      customer: {
        name: "Germain Martins Pereira",
        address: {
          street: "Teststreet 1",
          zipCode: "123456",
          country: "Brazil",
        },
        email: "teste@test",
      },
      deliveryMethod: "fastest",
    };

    api
      .post("/orders.json", order)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  purchaseCancelHandle = () => {
    this.setState({ purchasing: false });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandle}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice.toFixed(2)}
            purchaseCancelled={this.purchaseCancelHandle}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <div className={classes.BurguerBuilder}>
          <Burguer ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            price={this.state.totalPrice.toFixed(2)}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </div>
      </Aux>
    );
  }
}

export default BurguerBuilder;
