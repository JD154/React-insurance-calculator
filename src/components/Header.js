import React from 'react';

const Header = props => {
  return(
    <header className="main-header">
       <h1>
          {props.titulo}
       </h1>
    </header>
  )
}

export default Header
