import React, { Component } from 'react';
import { getNavbarItems } from './NavbarItems';
import './Navbar.css';

class Navbar extends Component {
    state = {
        navbarItems : getNavbarItems()
    }
    render() { 
        return (
            <nav className="navbar">
            <h1 className="nav-header">Conselio</h1>
            <div className="nav-items">
            <ul>
            {this.state.navbarItems.map(
                navbarItems => <li key={navbarItems.id}>
                <a href={navbarItems.url}>{navbarItems.title}</a></li>)}
            </ul>
            </div>
            </nav>

            
        );
    }
}
 
export default Navbar;