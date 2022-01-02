import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return (
      <div className={'search-box' + (this.props.currentPage == 'home' ? '' : ' disabled')}>
        <input
          className='search-input'
          placeholder={this.props.currentPage == 'home' ? 'Search' : 'Search only available at Home'}
          value={this.props.currentPage == 'home' ? this.props.searchValue : 'Search only available at Home'}
          onChange={(x) => this.props.onSearchChange(x.target.value)}
          onKeyDown={(x) => (x.keyCode === 13 && !this.props.isLoading ? this.props.search() : null) }
          disabled={this.props.currentPage != 'home'}/>

        <div className='search-icon' onClick={() => (!this.props.isLoading ? this.props.search() : null)}></div>
      </div>
    );
  }
}

export default (SearchInput);
