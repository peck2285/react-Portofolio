/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:00:56
*/
import React, { FC, useEffect } from 'react';
import './Header.css';


interface HeaderProps {
 
}


const Header : FC<HeaderProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Header">
          Header Component
      </div>
  );
}

export default Header;