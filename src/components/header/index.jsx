import React from 'react';
import './index.scss';



const Header = (props) => {
    return (
      <header>
        <h1>{props.headline || 'Enter headline'}</h1>
      </header>
    );
}


export default Header;
