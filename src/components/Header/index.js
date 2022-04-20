import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/atomo.png';

import './style.css'

const arrayLink = ['/', '/produtos', '', '', '/entrar', '/cadastre'];
const arrayTextItem = ['Home', 'Produtos', 'Serviços', 'Entrar', 'Cadastro'];

class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			onClick: '',
		}
	}

	handleClick = ({ target: { value }}) => {
		const { onClick } = this.state;
		if ( onClick === value ) {
			this.setState({
				onClick: '',
			});
		} else {
			this.setState({
				onClick: value,
			})
		}
	}

	renderizaAbaDeNavegaçãoExtra = () => {
		return <div className="sub-menu-1-click fadeIn fadeOut">
			<ul>
				<li><Link className="item-bar" to="/produtos">FiveM</Link></li>
				<li><Link className="item-bar" to="">Empresarial</Link></li>
				<li><Link className="item-bar" to="">Audiovisual</Link></li>
				<li><Link className="item-bar" to="">Softwares e serviços</Link></li>
			</ul>
		</div>;
	}

	renderizaAbaDeNavegaçãoExtra2 = () => {
		return <div className="sub-menu-2-click fadeIn fadeOut">
			<ul>
				<li><Link className="item-bar" to="">FiveM</Link></li>
				<li><Link className="item-bar" to="">Empresarial</Link></li>
				<li><Link className="item-bar" to="">Audiovisual</Link></li>
				<li><Link className="item-bar" to="">Softwares e serviços</Link></li>
			</ul>
		</div>;
	}

	gerenciadorDaBarraDeNavegação = (item, index) => {
		if (index === 1) {
			return <div><button type="button" value="products" onClick={ this.handleClick } className="item-bar" to={ item }> { arrayTextItem[index] }</button></div>; 
		} else if (index === 2) {
			return <div><button type="button" value="services" onClick={ this.handleClick } className="item-bar" to={ item }> { arrayTextItem[index] }</button></div>; 
		} else {
			return <div><Link className="item-bar" to={ item }> { arrayTextItem[index] }</Link></div>;
		}
	}

  /* renderizaCampoDeBusca = () => {
		const { termoBusca } = this.state;
		const { atualizaTermo } = this.props;
		return <div className="principal-topo fadeIn">
		<input
			type="text"
			className="campo-de-busca"
			data-testid="query-input"
			onChange={ atualizaTermo }
			onFocus={ ({ target }) => { target.placeholder = ''; } }
			onBlur={ ({ target }) => {
				target.placeholder = 'Pesquisar produtos, marcas e muito mais...';
			} }
			placeholder="Pesquisar produtos, marcas e muito mais..."
			value={ termoBusca }
		/> 
	</div>;
	} */

  /* gerenciadorDoCampoDePesquisa = () => {
		const { pesquisa } = this.state;
		if ( pesquisa === true) {
			this.setState({
				pesquisa: false,
			});
		} else {
			this.setState({
				pesquisa: true,
			})
		}
	} */

	comparaOnClickDropDownMenu = (onClickState) => {
		if (onClickState === 'products') {
			return this.renderizaAbaDeNavegaçãoExtra();
		} else if (onClickState === 'services') {
			return this.renderizaAbaDeNavegaçãoExtra2();
		}
	}

  render() {
		const { onClick } = this.state;
		return(
			<div className='header-container'>
				<header className="header fadeIn">
          <Link to="/"><img className="logo-img" src={Logo} alt="Code Atoms logo" /></Link>
          {arrayLink.map((item, index) => this.gerenciadorDaBarraDeNavegação(item, index))}
          {/* <button onClick={ this.gerenciadorDoCampoDePesquisa } className="lupa-pesquisa"></button> */}
          {this.comparaOnClickDropDownMenu(onClick)}
				</header>
			</div>
		);
	}
}

export default Header;