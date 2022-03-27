import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../imagens/atomo.png';
import lupa from '../imagens/lupa.png'

const arrayLink = ['/', '/sobre', '/produtos', '', 'Entre no nosso Discord!', '', '', '/entrar', '/cadastre'];
const arrayTextItem = ['Home', 'Sobre', 'Produtos', 'Serviços', 'Discord', 'FAQ', 'Contato', 'Entrar', 'Cadastro'];

class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			onClick: '',
			pesquisa: false,
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
		if (item === 'Entre no nosso Discord!') { 
			return <div><a className="item-bar" href="*">Discord</a></div>;
		} else if (index === 2) {
			return <div><button type="button" value="products" onClick={ this.handleClick } className="item-bar" to={ item }> { arrayTextItem[index] }</button></div>; 
		} else if (index === 3) {
			return <div><button type="button" value="services" onClick={ this.handleClick } className="item-bar" to={ item }> { arrayTextItem[index] }</button></div>; 
		} else {
			return <div><Link className="item-bar" to={ item }> { arrayTextItem[index] }</Link></div>;
		}
	}

  renderizaCampoDeBusca = () => {
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
	}

  gerenciadorDoCampoDePesquisa = () => {
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
	}

	comparaOnClickDropDownMenu = (onClickState) => {
		if (onClickState === 'products') {
			return this.renderizaAbaDeNavegaçãoExtra();
		} else if (onClickState === 'services') {
			return this.renderizaAbaDeNavegaçãoExtra2();
		}
	}

  render() {
		const { onClick, pesquisa } = this.state;
		return(
			<div>
				<header className="header fadeIn">
					<div className="img-div">
						<Link to="/"><img className="logo-img" src={ Logo } alt="Code Atoms logo"/></Link>
					</div>
					<div className="nav-div">
						<nav className="nav-bar">
							{ arrayLink.map((item, index) => this.gerenciadorDaBarraDeNavegação(item, index) ) }
							<button onClick={ this.gerenciadorDoCampoDePesquisa } className="lupa-pesquisa"><img src={ lupa }></img></button>
							{ this.comparaOnClickDropDownMenu(onClick) }
						</nav>
					</div>
					{ pesquisa && this.renderizaCampoDeBusca() }
				</header>
			</div>
		);
	}
}

export default Header;
