import React from 'react'
import { NavigationMenu } from './navigationMenu';
import { Experience } from './experience';

export const Experiences = ({ experiences }) => {
  return (
    <div>
      <div className="intro-footer-content">
        <NavigationMenu />
        <hr className="intro-line"/>
      </div>
      <div className="experience-header">
        <div className="experience-header-text">
          I have experience with a handful of languages, like Python, Java and PHP. <br />
          However my expertise alongside my professional experience lies on JavaScript, where I have built and delivered several applications throughout more than five years of experience.
        </div>
      </div>
      <div className="experiences-container">
        {experiences.map(experience => 
          <Experience key={experience.id} experience={experience} />
        )}
      </div>
    </div>
  )
}
