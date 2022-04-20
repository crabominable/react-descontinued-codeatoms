import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import requestIcon from '../assets/images/Planejado.png';
import reactIcon from '../assets/images/react.png';
import supportIcon from '../assets/images/suporte.png';
import starCard from '../assets/images/level-up-icon.png';
import goldStar from '../assets/images/GoldStar.png';

class Produtos extends React.Component {
  renderProduto = (produto) => {
    const { id, title, imagePath, price, byRequest, containReact, containSupport, onTheRise, rating } = produto;
    const { gestorDoCarrinho, guardaProdutoClicado } = this.props;

    if (byRequest) {
      if (containReact) {
        if (containSupport) {
          return (
          <li key={ id } data-testid="product">
            <div className="rating-container">
              { rating.map(() => <img className="gold-star" src={ goldStar }></img>)}
            </div>
            <Link
            className="produto-detalhes-link"
                to={ `/produto/${id}` }
                onClick={ () => guardaProdutoClicado(produto) }
                data-testid="product-detail-link"
            >
            <div className="produto-container">
              <div className="produto-thumb-container">
                { onTheRise ? <div className="produto-thumb" style={{ backgroundImage: `url(${imagePath})` }} alt={ title }>
                  { onTheRise && <img className="star-card" src={ starCard }></img>}
                  <span className="produto-titulo">{ title }</span>
                  <div></div>
                </div> :  <div className="produto-thumb-sem-icon" style={{ backgroundImage: `url(${imagePath})` }} alt={ title }>
                  { onTheRise && <img className="star-card" src={ starCard }></img>}
                  <span className="produto-titulo-sem-up">{ title }</span>
                  <div></div>
                </div>}
              </div>
              <div className="card-icon-container">
                <img className="card-icon" src={ requestIcon }></img>
                <img className="card-icon2" src={ reactIcon }></img>
                <img className="card-icon3" src={ supportIcon }></img>
              </div>
              <span className="produto-preço">{ `Preço R$${price}` }</span>
              <button
                className="produto-botão-add"
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => gestorDoCarrinho(produto) }
              >
                Adicionar ao 🛒
              </button>
            </div>
            </Link>
          </li>
          );
        }
        return (
          <li key={ id } data-testid="product">
            <div className="rating-container">
              { rating.map(() => <img className="gold-star" src={ goldStar }></img>)}
            </div>
            <Link
            className="produto-detalhes-link"
                to={ `/produto/${id}` }
                onClick={ () => guardaProdutoClicado(produto) }
                data-testid="product-detail-link"
            >
            <div className="produto-container">
              <div className="produto-thumb-container">
              { onTheRise ? <div className="produto-thumb" style={{ backgroundImage: `url(${imagePath})` }} alt={ title }>
                  { onTheRise && <img className="star-card" src={ starCard }></img>}
                  <span className="produto-titulo">{ title }</span>
                  <div></div>
                </div> :  <div className="produto-thumb-sem-icon" style={{ backgroundImage: `url(${imagePath})` }} alt={ title }>
                  { onTheRise && <img className="star-card" src={ starCard }></img>}
                  <span className="produto-titulo-sem-up">{ title }</span>
                  <div></div>
                </div>}
              </div>
              <div className="card-icon-container">
                  <img className="card-icon" src={ requestIcon }></img>
                  <img className="card-icon2" src={ reactIcon }></img>
                </div>
              <span className="produto-preço">{ `Preço R$${price}` }</span>
              <button
                className="produto-botão-add"
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => gestorDoCarrinho(produto) }
              >
                Adicionar ao 🛒
              </button>
            </div>
            </Link>
          </li>
        );
      }
      return (
        <li key={ id } data-testid="product">
          <div className="rating-container">
              { rating.map(() => <img className="gold-star" src={ goldStar }></img>)}
          </div>
          <Link
            className="produto-detalhes-link"
                to={ `/produto/${id}` }
                onClick={ () => guardaProdutoClicado(produto) }
                data-testid="product-detail-link"
          >
            <div className="produto-container">
              <div className="produto-thumb-container">
              { onTheRise ? <div className="produto-thumb" style={{ backgroundImage: `url(${imagePath})` }} alt={ title }>
                  { onTheRise && <img className="star-card" src={ starCard }></img>}
                  <span className="produto-titulo">{ title }</span>
                  <div></div>
                </div> :  <div className="produto-thumb-sem-icon" style={{ backgroundImage: `url(${imagePath})` }} alt={ title }>
                  { onTheRise && <img className="star-card" src={ starCard }></img>}
                  <span className="produto-titulo-sem-up">{ title }</span>
                  <div></div>
                </div>}
              </div>
              <div className="card-icon-container">
                <img className="card-icon" src={ requestIcon }></img>
              </div>
              <span className="produto-preço">{ `Preço R$${price}` }</span>
              <button
                className="produto-botão-add"
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => gestorDoCarrinho(produto) }
              >
                Adicionar ao 🛒
              </button>
            </div>
          </Link>
        </li>
      );
    }
    return (
      <li key={ id } data-testid="product">
        <div className="rating-container">
              { rating.map(() => <img className="gold-star" src={ goldStar }></img>)}
            </div>
        <Link
        className="produto-detalhes-link"
            to={ `/produto/${id}` }
            onClick={ () => guardaProdutoClicado(produto) }
            data-testid="product-detail-link"
        >
        <div className="produto-container">
          <div className="produto-thumb-container">
          { onTheRise ? <div className="produto-thumb" style={{ backgroundImage: `url(${imagePath})` }} alt={ title }>
                  { onTheRise && <img className="star-card" src={ starCard }></img>}
                  <span className="produto-titulo">{ title }</span>
                  <div></div>
                </div> :  <div className="produto-thumb-sem-icon" style={{ backgroundImage: `url(${imagePath})` }} alt={ title }>
                  { onTheRise && <img className="star-card" src={ starCard }></img>}
                  <span className="produto-titulo-sem-up">{ title }</span>
                  <div></div>
                </div>}
          </div>
          <div></div>
          <span className="produto-preço-sem-icone">{ `Preço R$${price}` }</span>
          <button
            className="produto-botão-add"
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => gestorDoCarrinho(produto) }
          >
            Adicionar ao 🛒
          </button>
        </div>
        </Link>
      </li>
    )
  };

  render() {
    const { produtos } = this.props;

    return (
      <ul className="produto-lista">
        { produtos.map((produto) => produto.title === undefined ? null : this.renderProduto(produto)) }
      </ul>
    );
  }
}

Produtos.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  gestorDoCarrinho: PropTypes.func.isRequired,
  guardaProdutoClicado: PropTypes.func.isRequired,
};

export default Produtos;
