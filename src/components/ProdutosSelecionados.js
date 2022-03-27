import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProdutosSelecionados extends Component {
  render() {
    const { produto: { thumbnail, title, price } } = this.props;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <p>{title}</p>
        <p>{`R$ ${price}`}</p>
      </div>
    );
  }
}

ProdutosSelecionados.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProdutosSelecionados;
