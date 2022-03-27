import React from 'react';
import planejadoImg from '../imagens/Planejado.png';
import reactImg from '../imagens/react.png';
import suporteImg from '../imagens/suporte.png';

class CategoriasFivem extends React.Component {
  constructor() {
    super();
    
    this.state = {
      onClick: '',
    }
  }

  handleClick = ( { target: { value } } ) => {
    const { onClick } = this.state;
    if ( onClick === value ) {
      this.setState({
        onClick: '',
      })
    } else {
      this.setState({
        onClick: value,
      })
    }
  }

  renderizaFiltros = () => {
    const { atualizaFiltro } = this.props;
    return <div className="filtros-aparecendo fadeIn" value="Ativo">
    <div className="filter-class">
      <p>➔ Mods</p>
      <div className="box-filters">
        <button onClick={ atualizaFiltro } id="Modreadytodeliver" className="botao-filtros" type="button">Mods pronta entrega</button>
        <button onClick={ atualizaFiltro } id="Modbyrequest" className="botao-filtros" type="button">Mods sob demanda</button>
      </div>
    </div>
    <div className="filter-class">
      <p>➔ Scripts</p>
      <div className="box-filters">
        <button onClick={ atualizaFiltro } id="Scriptreadytodeliver" className="botao-filtros" type="button">Scripts pronta entrega</button>
        <button onClick={ atualizaFiltro } id="Scriptbyrequest" className="botao-filtros" type="button">Scripts sob demanda</button>
      </div>
    </div>
    <div className="filter-class">
      <p>➔ Nuis</p>
      <div className="box-filters">
        <button onClick={ atualizaFiltro } id="Nuireadytodeliver" className="botao-filtros" type="button">Nuis pronta entrega</button>
        <button onClick={ atualizaFiltro } id="Nuibyrequest" className="botao-filtros" type="button">Nuis sob demanda</button>
        <button onClick={ atualizaFiltro } id="NuiwithReact" className="botao-filtros" type="button">Nuis com React<span className="span-react"></span></button>
      </div>
    </div>
    <div className="filter-class">
      <p>➔ Bases</p>
      <div className="box-filters">
        <button onClick={ atualizaFiltro } id="Basereadytodeliver" className="botao-filtros" type="button">Bases pronta entrega</button>
        <button onClick={ atualizaFiltro } id="Basebyrequest" className="botao-filtros" type="button">Bases sob demanda</button>
      </div>
    </div>
    <div className="filter-class">
      <p>➔ Projeto</p>
      <div className="box-filters">
        <button onClick={ atualizaFiltro } id="Byproject" className="botao-filtros" type="button">Por projeto</button>
      </div>
    </div>
    <div className="filter-class">
      <p>➔ Adicionais</p>
      <div className="box-filters">
        <button onClick={ atualizaFiltro } id="Scriptotimization" className="botao-filtros" type="button">Otimização</button>
        <button onClick={ atualizaFiltro } id="Support" className="botao-filtros" type="button">Suporte</button>
      </div>
    </div>
  </div>;
  }

  render() {
    const { onClick } = this.state;
    const { atualizaFiltro } = this.props;
    return (
      <div className="categorias">
        <div className="cabecalho-pagina">
          <h1>Bem vindo a página de FiveM da Code Atoms</h1>
          <p>Aqui você consegue ver todos nossos produtos e serviços a partir das categorias e filtros abaixo</p>
          {/* IMAGEM GENERICA AQUI */}
          <p>Clique em um item para ver melhor seus respectivos detalhes e informações</p>
          {/* OUTRA IMAGEM GENERICA */}
          <p>Não esqueça de verificar nossos planos exclusivos, tanto para FiveM quanto para serviços empresariais. Fique atento aos items que possam ter um simbolo rosa no card, isso significa que ele está em alta ou em promoção!!<span className="promocao-plano"></span></p>
          <div className="container-planejado">
            <img src={ planejadoImg }></img>
            <p>Significa que esta item é sob demanda e terá um tempo maior para ser preparado</p>
          </div>
          <div className="container-planejado">
            <img src={ reactImg }></img>
            <p>Significa que este item é programado com React</p>
          </div>
          <div className="container-planejado">
            <img src={ suporteImg }></img>
            <p>Significa que este item conta com nosso suporte especializado</p>
          </div>
        </div>
        <div className="all-list">
          <div className="lista-categorias">
            <h3>Categorias</h3>
            <div className="limpar-filtros">
              <button onClick={ atualizaFiltro } id="All" className="botao-filtros" type="button">Limpar filtros</button>
            </div>
            <div>
              <button onClick={ atualizaFiltro } id="Service" className="botao-filtros" type="button">Serviços</button>
              <button onClick={ atualizaFiltro } id="Product" className="botao-filtros" type="button">Produtos</button>
              <button onClick={ atualizaFiltro } id="Supportandextras" className="botao-filtros" type="button">Suporte e adicionais</button>
            </div>
          </div>
          <div className="filtros-class-texts">
              <button value="filter"  className="filtro-button" onClick={ this.handleClick }>Filtros</button>
              { onClick !== 'filter' && <p className="filtros-aparecendo fadeIn" id="texto-aux">⬅ Clique para revelar</p> }
          </div> 
          <div className="filtros">
            { onClick === 'filter' && this.renderizaFiltros() }
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriasFivem;
