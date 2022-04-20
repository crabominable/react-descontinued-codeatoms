import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartButton, Header, ProdutosSelecionados } from '../components/index';

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      nomeCompleto: '',
      email: '',
      cpf: '',
      telefone: '',
      cep: '',
      endereço: '',
      pagamento: '',
      redirecionar: false,
    };
  }

  gerenciadorDoForm = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  limparForm = () => {
    const { esvaziarCarrinho } = this.props;
    const {
      nomeCompleto,
      email,
      cpf,
      telefone,
      cep,
      endereço,
      pagamento,
    } = this.state;

    if (
      nomeCompleto && email && cpf && telefone && cep && endereço && pagamento
    ) {
      this.setState({
        nomeCompleto: '',
        email: '',
        cpf: '',
        telefone: '',
        cep: '',
        endereço: '',
        pagamento: '',
      }, () => {
        esvaziarCarrinho();
        this.setState({ redirecionar: true });
      });
    }
  }

  render() {
    const {
      nomeCompleto,
      email,
      cpf,
      telefone,
      cep,
      endereço,
      redirecionar,
    } = this.state;
    const { handleCategoryClick } = this.props;

    const { produtos } = this.props;
    const checkout = () => (
      <section>
        <Header handleCategoryClick={handleCategoryClick} />
        <CartButton />
        <div>
          <h1>Revise seus produtos</h1>
          {produtos
            .map((produto) => (<ProdutosSelecionados
              key={produto.id}
              produto={produto}
            />))}
        </div>
        <form>
          <fieldset>
            <legend>Informações do comprador</legend>
            <input
              type="text"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
              name="nomeCompleto"
              onChange={this.gerenciadorDoForm}
              value={nomeCompleto}
              required
            />
            <input
              type="email"
              data-testid="checkout-email"
              placeholder="Email"
              name="email"
              onChange={this.gerenciadorDoForm}
              value={email}
              required
            />
            <input
              type="type"
              data-testid="checkout-cpf"
              placeholder="CPF"
              name="cpf"
              onChange={this.gerenciadorDoForm}
              value={cpf}
              required
            />
            <input
              type="type"
              data-testid="checkout-phone"
              placeholder="Telefone"
              name="telefone"
              onChange={this.gerenciadorDoForm}
              value={telefone}
              required
            />
            <input
              type="type"
              data-testid="checkout-cep"
              placeholder="CEP"
              name="cep"
              onChange={this.gerenciadorDoForm}
              value={cep}
              required
            />
            <input
              type="type"
              data-testid="checkout-address"
              placeholder="Endereço"
              name="endereço"
              onChange={this.gerenciadorDoForm}
              value={endereço}
              required
            />
          </fieldset>
          <fieldset>
            <legend>Método de pagamento</legend>
            <label htmlFor="boleto">
              Boleto
              <input
                type="radio"
                id="boleto"
                value="boleto"
                name="pagamento"
                onClick={this.gerenciadorDoForm}
                required
              />
            </label>
            <label htmlFor="visa">
              Visa
              <input
                type="radio"
                id="visa"
                value="visa"
                name="pagamento"
                onClick={this.gerenciadorDoForm}
              />
            </label>
            <label htmlFor="mastercard">
              MasterCard
              <input
                type="radio"
                id="mastercard"
                value="mastercard"
                name="pagamento"
                onClick={this.gerenciadorDoForm}
              />
            </label>
            <label htmlFor="elo">
              Elo
              <input
                type="radio"
                id="elo"
                value="elo"
                name="pagamento"
                onClick={this.gerenciadorDoForm}
              />
            </label>
          </fieldset>
          <button type="submit" onClick={this.limparForm}>Comprar</button>
        </form>
      </section>

    );

    return (
      <div>
        {redirecionar ? <Redirect to="/" /> : checkout()}
      </div>
    );
  }
}

Checkout.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  esvaziarCarrinho: PropTypes.func.isRequired,
};

export default Checkout;
