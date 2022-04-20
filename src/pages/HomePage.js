import React from 'react';
import { CartButton, Header } from '../components/index';
import barraImg from '../assets/images/barra.png';
import consultsImg from '../assets/images/image-consult.png';
import experienceTeamImg from '../assets/images/image-experience-team.png';
import transparencyImg from '../assets/images/image-transparency.png';
import propertyProjectImg from '../assets/images/image-property-project.png';
import howImageSection from '../assets/images/site-design.png';
import scaleImg from '../assets/images/scale-img.png';
import securityImg from '../assets/images/img3.png';
import easyUseImg from '../assets/images/ims2.png';
import premiereImg from '../assets/images/premiere.png';
import psImg from '../assets/images/photoshop.png';
import afterImg from '../assets/images/after.png';
import aiImg from '../assets/images/ai.png';
import htmlImg from '../assets/images/html.png';
import cssImg from '../assets/images/css.png';
import jsImg from '../assets/images/js.png';
import reactImg from '../assets/images/react-another.png';
import reduxImg from '../assets/images/redux.png';
import jqueryImg from '../assets/images/jquery.png';
import nodeImg from '../assets/images/node.png';
import luaImg from '../assets/images/lua.png';
import likeImg from '../assets/images/polegarzin.png';
import doolImg from '../assets/images/bunequin.png';
import manImg from '../assets/images/homezin.png';
import localImg from '../assets/images/localização.png';
import zapImg from '../assets/images/zap.png';
import instaImg from '../assets/images/instagram.png';
import tiktokImg from '../assets/images/tiktok.png';
import faceImg from '../assets/images/facebook.png';
import zoofleImg from '../assets/images/ZOOFLE.png';
import leftArrowImg from '../assets/images/left-arrow.png';
import rightArrowImg from '../assets/images/right-arrow.png';

class HomePage extends React.Component {
  render() {
    const { handleCategoryClick } = this.props;
    return(
      <div>
        <Header handleCategoryClick={ handleCategoryClick }/>
        <CartButton />
        <section className="hero">
          <div className="img-box" id="img-hero">
          </div>
        </section>
        <section className="section-info-home">
          <div className="div-title">
            <h1>CONTRATE UM <span id="dev-span">DESENVOLVEDOR</span> ADEQUADO ÁS SUAS NECESSIDADES</h1>
          </div>
          <div className="div-info-title">
            <p>Temos desenvolvedores experientes e dedicados que podem projetar, modificar e personalizar seu projeto, desenvolvedores que atendem seus requisitos com qualidade e confiança</p>
          </div>
          <div id="fade-content-container" className="content-container">
            <div className="div-content">
              <img className="image-icon" src={ consultsImg }></img>
              <div className="info-div-content">
                <h3>CONSULTAS COMPLETAS</h3>
                <img src={ barraImg }></img>
                <p>Nossos desenvolvedores especialistas trabalham junto com você para determinar a melhor forma de desenvolver seu projeto. Criamos um documento/plano de projeto detalhado que explica o processo de desenvolvimento em detalhes para você entender.</p>
              </div>
            </div>
            <div className="div-content" id="div-experience">
              <div className="info-div-content2">
                <h3>EQUIPE EXPERIENTE</h3>
                <img src={ barraImg }></img>
                <p>Nossa excelente equipe de desenvolvedores, programadores e designers tem muitos anos de experiência no mercado, trazendo total confiabilidade e tecnologia para seu projeto.</p>
              </div>
              <img className="image-icon2" src={ experienceTeamImg }></img>
            </div>
            <div className="div-content">
            <img className="image-icon" src={ transparencyImg }></img>
              <div className="info-div-content">
                <h3>TOTAL TRANSPARÊNCIA</h3>
                <img src={ barraImg }></img>
                <p>Nossa equipe de desenvolvimento e gerentes de projeto enviarão e-mails e mensagens diárias para mantê-lo informado durante a fase de desenvolvimento do projeto. Entre em contato conosco por Whatsapp ou Discord para que possamos atender todas as suas necessidades e esclarecer quaisquer dúvidas.</p>
              </div>
            </div>
            <div className="div-content">
              <div className="info-div-content2">
                <h3>PROPRIEDADE TOTAL</h3>
                <img src={ barraImg }></img>
                <p>Como cliente, você é o proprietário do projeto que desenvolvemos. Depois de criar seu projeto, entregamos todo o código proprietário, como arquivos e imagens, tudo sem quaisquer taxas de licenciamento associadas ao seu projeto antes ou depois da conclusão. </p>
              </div>
              <img className="image-icon2" src={ propertyProjectImg }></img>
            </div>
          </div>
        </section>
        { /* <section className="categories-section">
          <div className="limiter-line">
            <h2>Categorias</h2>
            <img src={ barraImg }></img>
          </div>
          <div className="categories-card-container">
            <div className="fivem-category">
              <Link to="/produtos">
                <img src={ fivemImg }></img>
              </Link>
            </div>
            <div className="more-categories">
              <div className="vertical-item" id="empresarial"><h3>Empresarial</h3></div>
              <div className="vertical-item" id="audiovisual"><h3>Audiovisual</h3></div>
              <div className="vertical-item" id="softwares"><h3>Softwares</h3></div>
              <div className="vertical-item" id="serviços"><h3>Serviços</h3></div>
            </div>
          </div>
        </section> */ }
        <section className="how-section">
          <div className="div-title1">
            <h1>GARANTIMOS QUE CADA <span id="dev-span">PROJETO</span> QUE REALIZAMOS É...</h1>
          </div>
          <div id="fade-content-container-how-section" className="content-container-how-section">
            <div className="how-image-content-container">
              <img src={ howImageSection }/>
            </div>
            <div className="content-container-horizontal-card">
              <div className="card-content-container">
                <img src={ scaleImg }/>
                <div className="text-how-section-content">
                  <h3>ESCALÁVEL</h3>
                  <img src={ barraImg }></img>
                  <p>Todos nossos projetos são preparados para lidar com um grande fluxo de usuários e aumento do tráfego com facilidade.<br/>Estamos sempre preparados para isso, já que empresas tender a se tornar mais populares depois que a Code Atoms colocou as mãos na solução.</p>
                </div>
              </div>
              <div className="card-content-container">
                <img src={ securityImg }/>
                <div className="text-how-section-content">
                  <h3>SEGURO</h3>
                  <img src={ barraImg }></img>
                  <p>Na Code Atoms, somos extremamentes preocupados com a segurança, o que significa que fazemos tudo ao nosso alcance para proteger seus dados essênciais implementando protocolos de segurança robustos.</p>
                </div>
              </div>
              <div className="card-content-container">
                <img src={ easyUseImg }/>
                <div className="text-how-section-content">
                  <h3>FÁCIL DE USAR</h3>
                  <img src={ barraImg }></img>
                  <p>Nossos desenvolvedores de front-end e back-end trabalham em conjunto com nossa equipe de design para construir interfaces de usuário de acordo com as práticas de mercado e as necessidades dos clientes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="how-tools-section">
          <div className="div-title2">
            <h1>CONTRATE <span id="dev-span">ARTISTAS</span> EXPERIENTES PARA SEU PROJETO</h1>
            <p>Temos profissionais experientes e dedicados que podem projetar, modificar e personalizar seu projeto.<br/>Verifique abaixo algumas das ferramentas utilizadas por nossos designers</p>
          </div>
          <div className="how-tools-artists-images">
            { /* <img id="left-artist-arrow" src={ leftArrowImg }/> */ }
            <img id="premiere" src={ premiereImg }/>
            <img id="ps" src={ psImg }/>
            <img id="after" src={ afterImg }/>
            <img id="ai" src={ aiImg }/>
            { /* <img id="right-artist-arrow" src={ rightArrowImg}/> */ }
          </div>
          <p id="text-dev-tech">Veja abaixo algumas das tecnologias e linguagens de programação que nossos programadores são especializados</p>
          <div className="how-tools-dev-images">
            <img id="left-dev-arrow" src={ leftArrowImg }/>
            <img id="html" src={ htmlImg }/>
            <img id="css" src={ cssImg }/>
            <img id="js" src={ jsImg }/>
            <img id="react" src={ reactImg }/>
            <img id="redux" src={ reduxImg }/>
            <img id="jquery" src={ jqueryImg }/>
            <img id="node" src={ nodeImg }/>
            <img id="lua" src={ luaImg }/>
            <img id="right-dev-arrow" src={ rightArrowImg}/>
          </div>
        </section>
        <section className="how-info-section">
          <div className="div-title3">
            <h1>AQUI VOCÊ TEM TUDO QUE PRECISA PARA TER UMA EMPRESA COMPLETA E DE QUALIDADE</h1>
            <p>Visite nossa aba de produtos para ficar por dentro de todos os nossos serviços e produtos oferecidos.<br/>Você também pode entrar em contato para solicitar um orçamento ou um produto especial.</p>
          </div>
          <div id="fade-info-text-container" className="info-text-container">
            <p>Designs de logotipos, animações de logos, banners, post para redes sociais, flyers, comerciais, videos profissionais, websites, plataformas de vendas, identidade visual, design de interfaces, servidores para streamers, servidores Fivem, motion graphics e muitos mais.</p>
          </div>
          <div id="fade-info-data-container" className="info-data-container">
            <div className="info-data-item">
              <img id="thumbs-up" className="emoji-item" src={ likeImg }/>
              <h2>32 +</h2>
              <h3>PROJETOS FINALIZADOS</h3>
            </div>
            <div className="info-data-item">
              <img id="client-img" className="emoji-item" src={ doolImg }/>
              <h2>62 +</h2>
              <h3>CLIENTES SATISFEITOS</h3>
            </div>
            <div className="info-data-item">
              <img id="man-img" className="emoji-item" src={ manImg }/>
              <h2>12 +</h2>
              <h3>DESENVOLVEDORES NA PLATAFORMA</h3>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div id="first-item" className="footer-item">
            <h2>Contato</h2>
            <div className="footer-item-item">
              <img src={ localImg }/>
              <p>Guaratuba - PR<br/>
              83280-000</p>
            </div>
            <div className="footer-item-item">
              <img src={ zapImg }/>
              <p>(41) 9952-3508</p>
            </div>
          </div>
          <div className="footer-item">
            <h2>Redes</h2>
            <div className="footer-item-redes">
              <img src={ instaImg }/>
              <img src={ tiktokImg }/>
              <img src={ faceImg }/>
            </div>
          </div>
          <div className="footer-item">
            <img src={ zoofleImg }/>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
