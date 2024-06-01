/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:20:28
*/
import React, { FC, useEffect } from 'react';
import './Portofolio.css';


interface PortofolioProps {
 
}


const Portofolio : FC<PortofolioProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Portofolio">
          Portofolio Component
      </div>
  );
}

export default Portofolio;