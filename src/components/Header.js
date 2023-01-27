import React from 'react';
import PropTypes from "prop-types";

// instead of using props as a parameter we've destructured props to tagline and age
// stateless functional component
const Header = props => (
  <header className="top">
    <h1>Catch
      <span className="ofThe">
        <span className="of"> Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className='tagline'>
      <span>{props.tagline}</span>
    </h3>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
}

export default Header;