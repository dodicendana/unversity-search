import React, { Component } from 'react';
import Card from '../Card/Card';

class Favorites extends Component {
  render() {
    return (
      this.props.favorites ? this.props.favorites.map((element, id) => {
        return (
          <Card key={id} id={'favorites' + id}
            isFavorited = {true}
            removeFromFavorites = {this.props.removeFromFavorites}
            element = {element}
          />
        );
      }) : null
    );
  }
}

export default (Favorites);
