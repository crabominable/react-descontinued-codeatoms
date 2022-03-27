import React from 'react';
import { CadastreForm, Header, LoginExplain } from '../components/index';

class Cadastre extends React.Component {
  render() {
    const { handleCategoryClick } = this.props;
    return(
      <div>
        <Header handleCategoryClick={ handleCategoryClick } />
        <LoginExplain />
        <section className="login-section">
          <div className="title-section">
              <h1>Cadastro</h1>
          </div>
          <div className="div-form">
            <CadastreForm />
          </div>
        </section>
      </div>
    );
  }
}

export default Cadastre;
