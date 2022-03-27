import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AboutPage, Cadastre, Carrinho, Checkout,  HomePage, LoginPage, ProductsPage, ProdutoDetalhado } from './pages/index';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      onClickCategory: '',
    }
    if (!JSON
      .parse(localStorage.getItem('carrinho'))) {
      localStorage
        .setItem('carrinho', JSON.stringify([]));
    }
    this.state = {
      carrinho: JSON.parse(localStorage.getItem('carrinho')),
      produtoClicado: '',
      quantidadeTotal: 0,
    };
  }

componentDidMount() {
  this.inserirQuantidadeTotal();
}

inserirQuantidadeTotal = () => {
  this.setState(({ carrinho }) => ({
    quantidadeTotal: carrinho.length,
  }));
}

addAoCarrinho = (produto) => {
  this.setState(({ carrinho }) => ({
    carrinho: [...carrinho, produto],
  }), () => {
    this.setState(({ carrinho }) => ({
      quantidadeTotal: carrinho.length,
    }));
    const { carrinho } = this.state;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  });
};

gerenciarQuantidadeTotal = (operação) => {
  if (operação === 'diminuir') {
    this.setState(({ quantidadeTotal }) => ({
      quantidadeTotal: quantidadeTotal - 1,
    }));
  } else {
    this.setState(({ quantidadeTotal }) => ({
      quantidadeTotal: quantidadeTotal + 1,
    }));
  }
}

removerItemDoCarrinho = (id, quantidade) => {
  const { carrinho } = this.state;
  const carrinhoFiltrado = carrinho.filter((produto) => produto.id !== id);
  this.setState(({ quantidadeTotal }) => ({
    carrinho: carrinhoFiltrado,
    quantidadeTotal: quantidadeTotal - quantidade,
  }), () => {
    localStorage.setItem('carrinho', JSON.stringify(carrinhoFiltrado));
  });
}

esvaziarCarrinho = () => {
  this.setState({ carrinho: [] });
  localStorage.removeItem('carrinho');
  this.inserirQuantidadeTotal();
}

guardaProdutoClicado = (produto) => {
  this.setState({ produtoClicado: produto });
}

renderHome = () => {
  const { quantidadeTotal } = this.state;
  return (<ProductsPage
    quantidadeTotal={ quantidadeTotal }
    gestorDoCarrinho={ this.addAoCarrinho }
    guardaProdutoClicado={ this.guardaProdutoClicado }
  />);
};

renderProdutoDetalhado = () => {
  const { produtoClicado, quantidadeTotal } = this.state;
  return (<ProdutoDetalhado
    produto={ produtoClicado }
    quantidadeTotal={ quantidadeTotal }
    gestorDoCarrinho={ this.addAoCarrinho }
  />);
};

handleCategoryClick = ({ target: { value } }) => {
  const { onClickCategory } = this.state;
  if ( onClickCategory === value ) {
    this.setState({
      onClickCategory: '',
    });
  } else {
    this.setState({
      onClickCategory: value,
    })
  }
}

  render() {
    const { carrinho } = this.state;
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => (
            <HomePage 
              handleCategoryClick={ this.handleCategoryClick }
            />
          ) }/>
          <Route exact path="/sobre" render={ () => (
            <AboutPage 
              handleCategoryClick={ this.handleCategoryClick }
            />
          ) }/>
          <Route exact path="/cadastre" render={ () => (
            <Cadastre 
              handleCategoryClick={ this.handleCategoryClick }
            />
          ) }/>
          <Route exact path="/entrar" render={ () => (
            <LoginPage 
              handleCategoryClick={ this.handleCategoryClick }
            />
          ) }/>
          <Route path="/carrinho" render={ () => (
            <Carrinho
              handleCategoryClick={ this.handleCategoryClick }
              gerenciarQuantidadeTotal={ this.gerenciarQuantidadeTotal }
              removerItemDoCarrinho={ this.removerItemDoCarrinho }
              produtos={ carrinho }
            />
          ) }
          />
          <Route path="/checkout" render= { () => (
            <Checkout
              esvaziarCarrinho={ this.esvaziarCarrinho }
              produtos={ carrinho }
            />
          ) }
          />
          <Route path="/produto/:id" render={ () => this.renderProdutoDetalhado() }/>
          <Route exact path="/produtos" render={ () => this.renderHome() } />
          { /* <Route exact path="/produtos/detalhes" render={ () => (
            <ProdutoDetalhado 
              handleCategoryClick={ this.handleCategoryClick }
            />
          ) }/> */ }
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
