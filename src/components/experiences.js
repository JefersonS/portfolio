import React from 'react'
import { NavigationMenu } from './navigationMenu';
import { Experience } from './experience';

export const Experiences = ({ experiences }) => {
  return (
    <div>
      <NavigationMenu />
      {experiences.map(experience => 
        <Experience key={experience.id} experience={experience} />
      )}
    </div>
  )
}
