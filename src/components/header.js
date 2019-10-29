import React from 'react';
import "./css/header.css"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      navStatus: "nav",
      openedClosedRef: "nav-links",
      dropdownStatus: "dropdownClosed"
  }
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        if(this.state.navStatus === "nav"){
          this.setState({navStatus: "navScroll"})
        }
      } else {
        this.setState({navStatus: "nav"})
      }

    }
    )}

    handleClick = () => {
        if(this.state.dropdownStatus === "dropdownClosed"){
            this.setState({dropdownStatus: "dropdownOpen"})
        } else {
            this.setState({dropdownStatus: "dropdownClosed"})
        }
    }
  render(){
    return (
    <div className="App">
      <nav onScroll={this.handleScroll} className={this.state.navStatus}>
            <h1>Start Bootstrap</h1>
            <ul className="nav-links">
                <li>SERVICES</li>
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
            </ul>
            <img id="navHam" onClick={this.handleClick} src="https://icon-library.net/images/menu-icon-white-png/menu-icon-white-png-27.jpg"></img>
            <ul className={this.state.dropdownStatus}>
                <li>SERVICES</li>
                <br></br>
                <li>PORTFOLIO</li>
                <br></br>
                <li>ABOUT</li>
                <br></br>
                <li>TEAM</li>
                <br></br>
                <li>CONTACT</li>
            </ul>
        </nav>
    </div>
  );
}
}
export default App;