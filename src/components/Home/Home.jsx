import React, { Component } from 'react';
import Card from '../Card/Card';

class Home extends Component {
  render() {
    return (
      this.props.searchObject ? this.props.searchObject.map((element, id) => {
        const isFavorited = this.props.favorites.findIndex((favel) => {
          return favel.name == element.name
        }) > -1;
        return (
          <Card key={id} id={'homecard' + id}
            isFavorited = {isFavorited}
            removeFromFavorites = {this.props.removeFromFavorites}
            element = {element}
            addToFavorites = {this.props.addToFavorites}
          />
        );
      }) : null
    );
  }
}

export default (Home);
