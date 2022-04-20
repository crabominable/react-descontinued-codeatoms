import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

class CartButton extends Component {
  render() {
    const { quantidadeTotal } = this.props;
    return (
      <div className="botão-carrinho">
        <Link
          to="/carrinho"
          className="link-carrinho"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <div className="quantidade-total" data-testid="shopping-cart-size">
          {quantidadeTotal}
        </div>
      </div>
    );
  }
}

CartButton.propTypes = {
  quantidadeTotal: PropTypes.number.isRequired,
};

export default CartButton;
