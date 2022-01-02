import React, { Component } from 'react';
import Home from '../Home/Home';
import Favorites from '../Favorites/Favorites';
import User from '../User/User';

class Body extends Component {
  render() {
    return (
      <div className='body'>
        {
          this.props.isError ? <div className='error-text'> Sorry, something went wrong :( <br /> {this.props.error} </div> : null
        }
        {
          this.props.currentPage == 'home' && this.props.isLoading && this.props.searchObject.length == 0 ? <div className='error-text'> Please wait, Loading. . . </div> :
            this.props.currentPage == 'home' && !this.props.isLoading && this.props.searchObject.length == 0 ? <div className='error-text'> No Result </div> :
              this.props.currentPage == 'favorites' && this.props.favorites.length == 0 ? <div className='error-text'> No item in favorites </div> :

          <div className='content'>
            {
              this.props.currentPage == 'favorites' ?
              <Favorites
                favorites = {this.props.favorites}
                removeFromFavorites = {this.props.removeFromFavorites} />
                : null
            }
            {
              this.props.currentPage == 'home' ?
                <Home
                  searchObject = {this.props.searchObject}
                  favorites = {this.props.favorites}
                  removeFromFavorites = {this.props.removeFromFavorites}
                  addToFavorites = {this.props.addToFavorites} />
                : null
            }
            {
              this.props.currentPage == 'user' ?
                <User
                  userData={this.props.userData}
                  userScreenState={this.props.userScreenState}
                  userDataChange={this.props.userDataChange}
                  submit={this.props.submit}
                  logout={this.props.logout}
                  changeUserScreenState={this.props.changeUserScreenState}
                  newsletter={this.props.newsletter} />
                : null
            }
          </div>
        }
      </div>
    );
  }
}

export default (Body);
