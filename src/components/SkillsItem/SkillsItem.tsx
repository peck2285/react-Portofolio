/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:20:28
*/
import React, { FC, useEffect } from 'react';
import './SkillsItem.css';
import { Skill } from '../../models/Skill';


interface SkillsItemProps {
  skill: Skill

}


const SkillsItem: FC<SkillsItemProps> = ({ skill }) => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="SkillsItem">
      <img src={skill.imgUrl} alt="maquette creation site e-commerce"/>
        <h3>{skill.name.toUpperCase()}</h3>
        <p>{skill.status}</p>
    </div>
  );
}

export default SkillsItem;