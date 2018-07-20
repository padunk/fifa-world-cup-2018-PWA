import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

import wc_2018_logo from './wc_2018_logo.svg';
import './navbar.css';

const NAV_MENU = ['home', 'groups', 'matches', 'live match', 'about'];

export class NavBar extends Component {

  showMenu() {

  }
  render() {
    return (
      <nav className='main-nav'>
        <Link to = '/' title = 'Home'>
          <img src = {wc_2018_logo} alt = 'World Cup 2018 Logo' className='nav-brand-logo' />
        </Link>
        <div className='nav-title-list'>
          <h3 className='nav-title'>2018 FIFA WORLD CUP RUSSIA</h3>
          <input type='checkbox' id='menu' />
          <label htmlFor='menu' className='main-menu-label'>Menu</label>
          <div className='menu-content'>
            <ul className='nav-list-main'>
              {NAV_MENU.map((n, idx) => {
                return (
                  <li key = {idx} className='nav-list'>
                    <NavLink 
                      exact activeClassName = 'active' 
                      to = {n === 'home' ? '/' : `/${n}`} >
                      {n}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
