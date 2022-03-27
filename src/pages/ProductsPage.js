import React from 'react';
import PropTypes from 'prop-types';
import { CategoriasFivem, Produtos, BotãoCarrinho, Header } from '../components/index'
import data from '../service/data';

class ProductsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      onClick: '',
      produtos: [],
      termoBusca: '',
    };
  }

  atualizaFiltro = ({ target }) => {
    const { id } = target;
    this.setState({ onClick: id }, () => this.atualizaProdutosPeloFiltro());
  }

  atualizaProdutosPeloFiltro = () => {
    const { onClick, produtos } = this.state;
    if ( onClick === 'All') {
      this.setState({
        produtos: [...data],
      })
    } else {
      const filteredProducts = data.filter((item) => {
        if (item.filter === onClick) {
          return item;
        } else if (item.category === onClick) {
          return item;
        }
      });
      this.setState({ produtos: [] }, () => {
        this.setState({ produtos: [...filteredProducts] })
      });
    }
  }

  componentDidMount() {
    this.preencheProdutos();
  }

  preencheProdutos = () => {
    this.setState({
      produtos: [...data],
    })
  }

  renderizaAbaAuxiliarDeBusca = () => {
    const { termoBusca } = this.state;
    return <div className="sub-menu-1-click fadeIn">
    <ul>
      <p>Resultados:</p>
      <li><button type="button" onClick={ this.efetuaBusca(termoBusca) }>{ termoBusca }</button></li>
    </ul>
  </div>;
  }

  mostrarMensagemInicial = () => (
    <p
      className="principal-mensagem-inicial"
      data-testid="home-initial-message"
    >
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  );

  efetuaBusca = (param) => {
    if (param.length !== 0) {
      const dataFIltrada = data.filter((item) => {
        if (item.title === undefined) {
          return null;
        } else if (item.title === param) {
          return item;
        } else if (item.filter === param) {
          return item;
        } else if (item.category === param) {
          return item;
        }
      })
      this.setState({
        produtos: [...dataFIltrada],
      })
    } else {
      this.setState({
        produtos: [...data],
      })
    }
  }

	atualizaTermo = ({ target }) => {
    const { value } = target;
    this.setState({ termoBusca: value });
  }

  render() {
    const { produtos, termoBusca } = this.state;
    const { handleCategoryClick, gestorDoCarrinho, guardaProdutoClicado, quantidadeTotal } = this.props;

    return (
      <main>
        <Header atualizaTermo={ this.atualizaTermo } handleCategoryClick={ handleCategoryClick } gerenciadorDoCampoDePesquisa={ this.gerenciadorDoCampoDePesquisa } />
        { termoBusca.length !== 0 && this.renderizaAbaAuxiliarDeBusca() }
        <div className="principal-main">
          <CategoriasFivem atualizaFiltro={ this.atualizaFiltro }/>
          <div className="principal-container">
            <div className="principal-botao-carrinho">
                <BotãoCarrinho
                  quantidadeTotal={ quantidadeTotal }
                />
            </div>
            <div className="principal-produtos">
              { produtos.length ? null : this.mostrarMensagemInicial() }
              <Produtos
                produtos={ produtos }
                gestorDoCarrinho={ gestorDoCarrinho }
                guardaProdutoClicado={ guardaProdutoClicado }
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

ProductsPage.propTypes = {
  quantidadeTotal: PropTypes.number.isRequired,
  gestorDoCarrinho: PropTypes.func.isRequired,
  guardaProdutoClicado: PropTypes.func.isRequired,
};

export default ProductsPage;
