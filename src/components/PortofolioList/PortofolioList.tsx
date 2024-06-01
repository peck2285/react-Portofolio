/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:20:28
*/
import React, { FC, useEffect } from 'react';
import './PortofolioList.css';


interface PortofolioListProps {
 
}


const PortofolioList : FC<PortofolioListProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="PortofolioList">
          PortofolioList Component
      </div>
  );
}

export default PortofolioList;