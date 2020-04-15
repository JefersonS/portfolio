import React from 'react'
import { NavigationMenu } from './navigationMenu';
import { Experience } from './experience';

export const Experiences = ({ experiences, intro }) => {
  return (
    <div>
      <NavigationMenu />

      <div className="experience-header">
        <div className="experience-header-text">
          {intro.map((paragraph, i) =>
            <span key={i}>{paragraph} <br /></span>
          )}
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
