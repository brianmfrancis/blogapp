import React from 'react';

import { Link } from 'react-router';


// function based "dumb" component with no state
const Navbar = () => {
  return (
    <div id="nav">
      <Link to="/">Blog Franchise</Link>
      <Link to="/posts/new">New Post</Link>
    </div>
  );
};


export default Navbar;
