import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
        <header data-test="headerComponent">
            <div className="wrap" style={{color:'white', paddingTop:'2.5%', marginBottom:'2.5%'}}>
               <h1> Albums </h1>
            </div>
        </header>
        )
    }
  }
  
  export default Header;
  