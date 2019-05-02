import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      showMenu: false,
      showHeader: false,

    }
  }
  


  

  render() {
    return (
      <div className="App">
        <div className={this.state.showMenu ? 'menu slide' : 'menu'} >
          <span>SERVICES</span>
          <span>PORTFOLIO</span>
          <span>ABOUT</span>
          <span>TEAM</span>
          <span>CONTACT</span>
        </div>
        <div scrollY={this.state.scrollY}/>
        <div className='top'>
          <header onScroll={() => this.setState({ showHeader: this.state.showHeader })} className={this.state.showHeader ? 'header header2' : 'header'}>
            <div className='title'>
              <h1>Start Bootstrap</h1>
            </div>
            <div className='menu-container'>
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </div>
            <div onClick={() => this.setState ({showMenu: !this.state.showMenu})}  className='ham'>
              <div>MENU  </div>
              <i className="fas fa-bars"></i>
            </div>
          </header>
          <div className='info-container'>
            <h1 className='info1'>Welcome to our Studio!</h1>
            <h1 className='info2'>IT'S NICE TO MEET YOU</h1>
            <button>TELL ME MORE</button>
          </div>
        </div>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore rem earum tempora voluptatum reiciendis voluptate aspernatur nemo, placeat nam reprehenderit perspiciatis maxime eligendi, consequatur voluptates odit eos mollitia non laboriosam!</div>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore rem earum tempora voluptatum reiciendis voluptate aspernatur nemo, placeat nam reprehenderit perspiciatis maxime eligendi, consequatur voluptates odit eos mollitia non laboriosam!</div>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore rem earum tempora voluptatum reiciendis voluptate aspernatur nemo, placeat nam reprehenderit perspiciatis maxime eligendi, consequatur voluptates odit eos mollitia non laboriosam!</div>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore rem earum tempora voluptatum reiciendis voluptate aspernatur nemo, placeat nam reprehenderit perspiciatis maxime eligendi, consequatur voluptates odit eos mollitia non laboriosam!</div>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore rem earum tempora voluptatum reiciendis voluptate aspernatur nemo, placeat nam reprehenderit perspiciatis maxime eligendi, consequatur voluptates odit eos mollitia non laboriosam!</div>

      </div>
    );
  }
}

export default App;
