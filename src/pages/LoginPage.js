import React from 'react';
import { Form, Header, LoginExplain } from '../components/index';

class LoginPage extends React.Component {
  render() {
    const { handleCategoryClick } = this.props;
    return(
      <div>
        <Header handleCategoryClick={ handleCategoryClick }/>
        <LoginExplain />
        <section className="login-section">
          <div className="title-section">
            <h1>Entrar</h1>
          </div>
          <div className="div-form">
            <Form />
          </div>
        </section>
      </div>
    );
  }
}

export default LoginPage;
