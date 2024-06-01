/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:06:33
*/
import React, { FC, useEffect,Fragment } from 'react';
// import Loading from '../Loading/Loading';
import './Home.css';
import Header from '../../components/Header/Header';


interface HomeProps {
 
}


const Home : FC<HomeProps> = () =>{


    // const [state, setState] = useState<any>(null)

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    },[])

  return (
    <Fragment>
      <div className="Home container bordered">
<Header/>

</div>
   
    </Fragment>
  );
}

export default Home;