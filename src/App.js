import React from 'react';
import './App.css';
import Landing from "./components/landing"
import Services from "./components/services"
import About from "./components/about"
import Team from "./components/team"
import Contact from "./components/contact"
import Portfolio from "./components/portfolio"
import Footer from "./components/footer"
import Header from "./components/header"

class App extends React.Component{
  constructor(){
    super()

  }

  
  render(){
    return (
    <div className="App">
      <Header />
      <Landing />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
}
export default App;
