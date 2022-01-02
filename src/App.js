import React, { Component } from 'react';
import Header from './components/Header/Header.jsx';
import Body from './components/Body/Body.jsx';
import { fetchImage } from './services/mainService.js';
import './scss/main.scss';

class App extends Component {
  state = {
    isLoading: false,
    isError: false,
    error: '',
    currentPage: 'home',
    favorites: [],
    searchObject: [],
    searchValue: '',
    currentearchValue: '',

    // For User Tab
    userData: {
      username: '',
      password: '',
      email: '',
      name: '',
    },
    tempUserDB: [
      {
        username: 'test',
        password: 'testpassword',
        email: 'test@test.com',
        name: 'tester',
      },
    ],
    userScreenState: 'login', // login, register, userData
  };

  onSearchChange(value) {
    this.setState({
      searchValue: value,
    });
  }

  validateSearch() {
    if (this.state.searchValue.length > 3) {
      return true;
    }
    return false;
  }

  search() {
    if (this.validateSearch()) {
      this.setState({
        isLoading: true,
        isError: false,
        currentearchValue: this.state.searchValue,
      }, () => {
        fetchImage(this.state.currentearchValue).then(response => {
          this.setState({
            searchObject: response,
            isLoading: false,
          });
        }).catch(error => {
          this.setState({
            isError: true,
            error: error.toString(),
            isLoading: false,
          })
        })
      });
    } else {
      this.setState({
        isError: true,
        error: 'Search Not Valid',
        isLoading: false,
      });
    }
  }

  addToFavorites(srcObject) {
    let favorites = this.state.favorites.slice();
    favorites.push(srcObject);
    this.setState({
      favorites: favorites
    })
  }

  removeFromFavorites(srcObject) {
    let favorites = this.state.favorites.slice();
    let index = favorites.findIndex((element) => {
      return element.id == srcObject.id
    })
    favorites.splice(index, 1);
    this.setState({
      favorites: favorites
    })
  }

  setCurrentPage(currPage) {
    this.setState({
      currentPage: currPage,
      isLoading: false,
      isError: false,
      error: '',
    })
  }

  userDataChange(type, value) {
    let userData = Object.assign({}, this.state.userData);
    userData[type] = value;
    this.setState({
      userData: userData,
      isLoading: false,
      isError: false,
      error: '',
    });
  }

  changeUserScreenState(type) {
    this.setState({
      userData: {
        username: '',
        password: '',
        email: '',
        name: ''
      },
      userScreenState: type,
      isLoading: false,
      isError: false,
      error: '',
    });
  }

  logout() {
    this.setState({
      userData: {
        username: '',
        password: '',
        email: '',
        name: ''
      },
      userScreenState: 'login',
      isLoading: false,
      isError: false,
      error: '',
    });
  }

  newsletter() {
    let filename = 'users.json';
    let userData = Object.assign({}, this.state.userData);

    let dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(userData));
    let downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', filename);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  submit() {
    // Login / Register is hardcoded since it needs additional backend
    let userData = Object.assign({}, this.state.userData);
    let tempUserDB = this.state.tempUserDB.slice();
    if (this.state.userScreenState == 'register' && userData.username && userData.password && userData.email && userData.name) {
      tempUserDB.push(userData);
      this.setState({
        tempUserDB: tempUserDB,
        userData: {
          username: '',
          password: '',
          email: '',
          name: ''
        },
        isError: false,
        error: 'Submitted Successfully!'
      });
    } else if (this.state.userScreenState == 'login') {
      const validIndex = tempUserDB.findIndex(el => el.username == userData.username && el.password == userData.password);
      if (validIndex > -1) {
        this.setState({
          userScreenState: 'userData',
          userData: tempUserDB[validIndex],
          isError: false,
          error: 'Submitted Successfully!'
        });
      } else {
        this.setState({
          isError: true,
          error: 'Invalid Login Data!'
        });
      }
    } else {
      this.setState({
        isError: true,
        error: 'Error Submitting Data!'
      });
    }
  }

  render() {
    return (
      <div className='app'>
        <Header
          searchValue={this.state.searchValue}
          currentPage={this.state.currentPage}
          onSearchChange={(x) => this.onSearchChange(x)}
          search={() => this.search()}
          isLoading={this.state.isLoading}
          setCurrentPage={(x) => this.setCurrentPage(x)} />

        <Body
          isError={this.state.isError}
          error={this.state.error}
          isLoading={this.state.isLoading}
          searchObject={this.state.searchObject}
          favorites={this.state.favorites}
          currentPage={this.state.currentPage}
          search={() => this.search()}
          searchValue={this.state.searchValue}
          addToFavorites={(x) => this.addToFavorites(x)}
          removeFromFavorites={(x) => this.removeFromFavorites(x)}
          userData={this.state.userData}
          userScreenState={this.state.userScreenState}
          userDataChange={(x, y) => this.userDataChange(x, y)}
          submit={() => this.submit()}
          logout={() => this.logout()}
          newsletter={() => this.newsletter()}
          changeUserScreenState={(x) => this.changeUserScreenState(x)}
        />
      </div>
    );
  }
}

export default App;
