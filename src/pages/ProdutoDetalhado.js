import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BotãoCarrinho, Header } from '../components/index';

class ProdutoDetalhado extends Component {
  constructor() {
    super();

    this.state = {
      avaliacaoProduto: '',
      avaliacaoComentario: '',
      lista: [],
    };
  }

  atualizarEstado = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  adicionaAvaliacao = () => {
    const { avaliacaoProduto, avaliacaoComentario } = this.state;
    const novaAvalicao = {
      avaliacaoProduto,
      avaliacaoComentario,
    };
    this.setState(({ lista }) => ({ lista: [...lista, novaAvalicao] }));
  }

  renderAvaliacao = (item) => {
    const { avaliacaoProduto, avaliacaoComentario } = item;
    return (
      <li>
        {avaliacaoProduto}
        {avaliacaoComentario}
      </li>
    );
  }

  render() {
    const {
      handleCategoryClick,
      produto,
      quantidadeTotal,
      gestorDoCarrinho,
    } = this.props;

    const { price, thumbnail, title, category, moreDetails: { description } } = produto;

    const { lista } = this.state;

    return (
      <div>
        <Header handleCategoryClick={ handleCategoryClick } />
        <main className="main">
          <section>
            <div className="title-product-detail">
              <h1>Detalhes do produto</h1>
            </div>
            <section className="product-detail">
              <div className="item">
                <div>
                  <div>
                    <p data-testid="product-detail-name">Nome do { category }: { title }</p>
                    <p>Preço: R${ price }</p>
                    <p id="description">Descrição do produto: { description }</p>
                  </div>
                  <div className="buttons-container">
                    <button
                      type="button"
                      class="btn btn-success"
                      data-testid="product-detail-add-to-cart"
                      onClick={ () => gestorDoCarrinho(produto) }
                    >
                      <BotãoCarrinho quantidadeTotal={ quantidadeTotal } />
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
                <div>
                  <img className="image-container" src={ thumbnail } alt={ title } />
                </div>
              </div>
            </section>
            <form>
              <label htmlFor="1">
                <input
                  type="radio"
                  id="1"
                  name="avaliacaoProduto"
                  value="1"
                  onChange={ this.atualizarEstado }
                />
                1
              </label>
              <label htmlFor="2">
                <input
                  type="radio"
                  id="2"
                  name="avaliacaoProduto"
                  value="2"
                  onChange={ this.atualizarEstado }
                />
                2
              </label>
              <label htmlFor="3">
                <input
                  type="radio"
                  id="3"
                  name="avaliacaoProduto"
                  value="3"
                  onChange={ this.atualizarEstado }
                />
                3
              </label>
              <label htmlFor="4">
                <input
                  type="radio"
                  id="4"
                  name="avaliacaoProduto"
                  value="4"
                  onChange={ this.atualizarEstado }
                />
                4
              </label>
              <label htmlFor="5">
                <input
                  type="radio"
                  id="5"
                  name="avaliacaoProduto"
                  value="5"
                  onChange={ this.atualizarEstado }
                />
                5
              </label>
              <label htmlFor="acaliacaoComentario">
                Comentário:
                <textarea
                  name="avaliacaoComentario"
                  onChange={ this.atualizarEstado }
                  data-testid="product-detail-evaluation"
                />
              </label>
              <button type="button" onClick={ this.adicionaAvaliacao }>Avaliar</button>
            </form>
            <ul>
              {lista.map((item) => this.renderAvaliacao(item))}
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

ProdutoDetalhado.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  quantidadeTotal: PropTypes.number.isRequired,
  gestorDoCarrinho: PropTypes.func.isRequired,
};

export default ProdutoDetalhado;
