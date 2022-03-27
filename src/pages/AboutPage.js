import React from 'react';
import { Header } from '../components/index';

class AboutPage extends React.Component {
  render() {
    const { handleCategoryClick } = this.props;
    return(
      <div>
        <Header handleCategoryClick={ handleCategoryClick } />
        <h1>Sobre</h1>
      </div>
    );
  }
}

export default AboutPage;
