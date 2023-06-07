import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openlinks: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState((prevState) => ({
      openlinks: !prevState.openlinks,
    }));
  }

  render() {
    return (
      <nav className="navbar">
        <section className="responsive-nav" id={this.state.openlinks ? 'open' : 'close'}>
          <button onClick={this.toggleNav}>
            <ReorderIcon />
          </button>
          <section className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/DesignSection">Design Section</Link>
            <Link to="/DataArt">Internet Art</Link>
          </section>
        </section>
        <ul className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/DesignSection">Design Section</Link>
          <Link to="/DataArt">Internet Art</Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
