import React, { Component } from 'react';
import SearchInput from '../SearchInput/SearchInput';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        {/* For larger screens */}
        <div className='navigation-container max'>
          <div style={{margin: 'auto', width: '50%'}}>
            <div className={'navigation-menu title left '} onClick={() => this.props.setCurrentPage('home')}> Uni<b>Search</b> </div>
            <div className={'navigation-menu left ' + (this.props.currentPage == 'home' ? ' selected' : '')} onClick={() => this.props.setCurrentPage('home')}>Search</div>
            <div className={'navigation-menu left ' + (this.props.currentPage == 'favorites' ? ' selected' : '')} onClick={() => this.props.setCurrentPage('favorites')}>Favorites</div>
            <div className={'navigation-menu right' + (this.props.currentPage == 'user' ? ' selected' : '')} onClick={() => this.props.setCurrentPage('user')}>User</div>
          </div>
        </div>

        <SearchInput
          currentPage = {this.props.currentPage}
          searchValue = {this.props.searchValue}
          onSearchChange = {this.props.onSearchChange}
          isLoading = {this.props.isLoading}
          search = {this.props.search}
        />

        {/* For smaller screens */}
        <div className='navigation-container mini'>
          <div className={'navigation-menu left ' + (this.props.currentPage == 'home' ? ' selected' : '')} onClick={() => this.props.setCurrentPage('home')}>Search</div>
          <div className={'navigation-menu left ' + (this.props.currentPage == 'favorites' ? ' selected' : '')} onClick={() => this.props.setCurrentPage('favorites')}>Favorites</div>
          <div className={'navigation-menu right' + (this.props.currentPage == 'user' ? ' selected' : '')} onClick={() => this.props.setCurrentPage('user')}>User</div>
        </div>
      </div>
    );
  }
}

export default (Header);
