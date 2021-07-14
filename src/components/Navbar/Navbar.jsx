import React, { Component } from 'react';
import { getNavbarItems } from './NavbarItems';
import { Link, Switch, Route } from 'react-router-dom';
import './Navbar.css';
import Services from './Services';


class Navbar extends Component {
    state = {
        navbarItems : getNavbarItems()
    }
    render() { 
        return (
           
            <div>
                <nav className="navbar">
            <h1 className="nav-header">Conselio</h1>
            <div className="nav-items">
            <ul>
            {this.state.navbarItems.map(
                navbarItem => <li key={navbarItem.id}>
                <Link to={"/"+navbarItem.title} href={navbarItem.url}>{navbarItem.title}</Link></li>)}
            </ul>
            </div>
            </nav>
            <Switch>
          
          <Route path="/About Us">
            <About />
          </Route>
          <Route path="/Services" component={Services}>
            
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
        </div>
    

            

        
            

            
        );
    }
     
}
// function Home() {
//     return (
//       <div>
//         <h2>Home</h2>
//       </div>
//     );
//   }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
//   function Services() {
//     return (
//       <div>
//         <h2>services</h2>
//       </div>
//     );
//   }
  function Projects() {
    return (
      <div>
        <h2>projects</h2>
      </div>
    );
  }
  function Contact() {
    return (
      <div>
        <h2>contact</h2>
      </div>
    );
  }
export default Navbar;