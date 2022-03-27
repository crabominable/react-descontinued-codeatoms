import React from 'react';
import { Link } from 'react-router-dom';

class LoginExplain extends React.Component {
	render() {
		return(
			<section className="login-explain-section">
          <div className="login-text">
            <p className="login-text-paragraph">Bem vindo a página de Login da Code Atoms! <Link to="/login" className="text-span">Entre</Link> caso já tenha um cadastro ou <Link to="/cadastre" className="text-span">Cadastre-se</Link></p>
          </div>
        </section>
		);
	}
}

export default LoginExplain;
