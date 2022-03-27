import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Produto extends Component {
  constructor() {
    super();

    this.state = {
      quantidade: 1,
    };
  }

  gerenciarQuantidade = ({ target: { id } }) => {
    const { gerenciarQuantidadeTotal } = this.props;
    if (id === 'diminuir') {
      this.setState(({ quantidade }) => ({
        quantidade: quantidade - 1,
      }), () => {
        const { quantidade } = this.state;
        if (quantidade < 1) {
          this.setState({ quantidade: 1 });
        } else {
          gerenciarQuantidadeTotal(id);
        }
      });
    } else if (id === 'aumentar') {
      this.setState(({ quantidade }) => ({
        quantidade: quantidade + 1,
      }), () => gerenciarQuantidadeTotal(id));
    }
  }

  render() {
    const { produto: { id, title, thumbnail, price } } = this.props;
    const { quantidade } = this.state;
    const { removerItemDoCarrinho } = this.props;

    return (
      <div className="cart-item">
        <button
          type="button"
          id="remover"
          onClick={ () => removerItemDoCarrinho(id, quantidade) }
        >
          X
        </button>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <div className="quantity">
          <p data-testid="shopping-cart-product-quantity">{ quantidade }</p>
          <button
            data-testid="product-increase-quantity"
            type="button"
            id="aumentar"
            onClick={ this.gerenciarQuantidade }
          >
            +
          </button>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            id="diminuir"
            onClick={ this.gerenciarQuantidade }
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

Produto.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  removerItemDoCarrinho: PropTypes.func.isRequired,
  gerenciarQuantidadeTotal: PropTypes.func.isRequired,
};

export default Produto;
