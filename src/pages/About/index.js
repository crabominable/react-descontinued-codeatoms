import React from 'react';
import { Header } from '../../components/index';

class About extends React.Component {
  render() {
    const { handleCategoryClick } = this.props;
    return (
      <div>
        <Header handleCategoryClick={ handleCategoryClick } />
        <h1 style={ { color: 'white', marginTop: '2em', width: '100%', textAlign: 'center' } }>Sobre</h1>
      </div>
    );
  }
}

export default About;