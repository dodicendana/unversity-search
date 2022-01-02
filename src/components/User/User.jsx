import React, { Component } from 'react';

class Home extends Component {
  state = {
    userInput: [
      {name: 'username', type: 'text', label: 'Username', screenState: ['login', 'register', 'userData']},
      {name: 'password', type: 'password', label: 'Password', screenState: ['login', 'register', 'userData']},
      {name: 'email', type: 'text', label: 'Email Address', screenState: ['register', 'userData']},
      {name: 'name', type: 'text', label: 'Full Name', screenState: ['register', 'userData']},
    ]
  }

  UserInput = (props) => {
    return (<div>
      <h5 className='label'>{props.userInputElementData.label}</h5>
      <input className={'user-input' + (this.props.userScreenState == 'userData' ? ' disabled' : '')} type={props.userInputElementData.type}
        placeholder = {'Enter ' + props.userInputElementData.label + ' Here'}
        value={this.props.userData[props.userInputElementData.name]}
        onChange={(x) => this.props.userDataChange(props.userInputElementData.name, x.target.value)}
        disabled={this.props.userScreenState == 'userData'}/>
    </div>);
  }

  render() {
    return (
      <div className='user-box'>
          <h3 className='title'>
            { this.props.userScreenState != 'userData' ? <span className={'title-text ' + (this.props.userScreenState == 'login' ? 'selected' : '')} onClick={() => this.props.changeUserScreenState('login')}>Login</span> : null}
            { this.props.userScreenState != 'userData' ? <span className={'title-text ' + (this.props.userScreenState == 'register' ? 'selected' : '')} onClick={() => this.props.changeUserScreenState('register')}>Register</span> : null}
            { this.props.userScreenState == 'userData' ? <span className={'title-text ' + (this.props.userScreenState == 'userData' ? 'selected' : '')}>Profile</span> : null}
          </h3>
          <hr />
          {
            this.state.userInput.map((el, id) => {
              const shouldDisplay = el.screenState.findIndex(screenStateEl => screenStateEl == this.props.userScreenState) > -1;
              return (shouldDisplay ? <this.UserInput id={'userInput' + id} userInputElementData={el}/> : null )
            })
          }
          {
            this.props.userScreenState == 'login' || this.props.userScreenState == 'register' ?
              <button className='submit-button' onClick ={() => this.props.submit()}>Submit</button> :
              <div>
                <button className='submit-button ' onClick ={() => this.props.newsletter()}>Newsletter</button>
                <button className='submit-button right' onClick ={() => this.props.logout()}>Logout</button>
              </div>
          }
      </div>
    );
  }
}

export default (Home);
