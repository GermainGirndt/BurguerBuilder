import React, { Component } from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("order summary will apdate");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>
              {igKey}: {this.props.ingredients[igKey]}
            </span>
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burguer with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
