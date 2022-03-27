import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Produto, Header } from '../components/index';
import boxImg from '../imagens/OIP.png';

class Carrinho extends React.Component {
  render() {
    const {
      handleCategoryClick,
      produtos,
      removerItemDoCarrinho,
      gerenciarQuantidadeTotal,
    } = this.props;

    const carrinhoVazio = () => (
      <div>
      <Header handleCategoryClick={ handleCategoryClick } />
        <div className="cart">
          <h1>Opa, seu carrinho está vazio, adicione algum item para compra que ele aparecera aqui</h1>
          <img src={ boxImg } className="box-img"></img>
        </div>
      </div>
    );

    const mostrarCarrinho = () => (
      <div>
        <Header />
        <div className="cart">
          <h1>Bem vindo ao carrinho</h1>
          {produtos
            .map((produto) => (<Produto
              gerenciarQuantidadeTotal={ gerenciarQuantidadeTotal }
              removerItemDoCarrinho={ removerItemDoCarrinho }
              key={ produto.id }
              produto={ produto }
            />))}
          <Link
            data-testid="checkout-products"
            to="/checkout"
          >
          <button type="button" id="finish-buy" class="btn btn-success">Finalizar compra</button>
          </Link>
        </div>
      </div>
    );

    return (
      <section>
        { produtos[0] ? mostrarCarrinho() : carrinhoVazio() }
      </section>
    );
  }
}

Carrinho.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  removerItemDoCarrinho: PropTypes.func.isRequired,
  gerenciarQuantidadeTotal: PropTypes.func.isRequired,
};

export default Carrinho;
