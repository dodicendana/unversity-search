import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className='search-object-card'>
        <div className={'love-icon ' + (this.props.isFavorited ? 'selected' : '')} onClick={() => (this.props.isFavorited ? this.props.removeFromFavorites(this.props.element) : this.props.addToFavorites(this.props.element))}/>
        {this.props.element ? <div className='search-object-text'>{this.props.element.name} - {this.props.element.country}</div> : null}
        {this.props.element ? <div className='search-object-text'>{this.props.element.web_pages[0]}</div> : null}
        {
          this.props.isFavorited ?
              this.props.removeFromFavorites ? <div className='search-object-text-small' onClick={() => this.props.removeFromFavorites(this.props.element)}>- Remove From Favorites</div> : null :
            this.props.addToFavorites ? <div className='search-object-text-small' onClick={() => this.props.addToFavorites(this.props.element)}>+ Add To Favorites</div> : null
        }
      </div>
    );
  }
}

export default (Card);
