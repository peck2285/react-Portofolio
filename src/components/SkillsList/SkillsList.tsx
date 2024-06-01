/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:20:28
*/
import React, { FC, useEffect } from 'react';
import './SkillsList.css';
import { skills } from '../../api/data';
import { Skill } from '../../models/Skill';
import SkillsItem from '../SkillsItem/SkillsItem';


interface SkillsListProps {
 
}


const SkillsList : FC<SkillsListProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="SkillsList">
          {
            skills.map((skill : Skill, index : number)=>{
              return <SkillsItem key={index} skill={skill}/>
            })
          }
      </div>
  );
}

export default SkillsList;