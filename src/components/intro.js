import React from 'react';
import { NavigationMenu } from './navigationMenu';
import { FollowMeButtons } from './followMeButtons';
import profilePicture from '../images/intro-picture.jpg'

export const Intro = () => {
  return (
    <div>

      <div className="intro-header">
        <div className="intro-header-text">
          Jeferson Euclides
        </div>
      </div>

      <div className="intro-content">
        <div className="content-text">
          Hi there! My name is Jeferson Euclides, I'm a Software Engineer located in Brazil working sometimes as a freelancer, but mostly as a fulltime employee.
          My career counts with experience in distributed and on-site teams, where the majority of the time was spent as a remote developer.  <br /><br />
          I have a strong technical background in JavaScript and a core knowledge base in Node.js and AWS services; I also build frontend solutions using React or other frontend-based stacks using JS.
          I define business logic and implement solutions that affect the availability, functionality and reliability of applications. Being highly versatile - learning quickly - and available to work in any time zone. <br /><br />
        </div>

        <div className="follow-me-section">
            <img className="profile-picture" src={profilePicture} alt="Jeferson Euclides"/> 
          <div className="followMeButtons">
            <FollowMeButtons />
          </div>
        </div>

        <div className="intro-footer-content">
          <hr className="intro-line"/>
          <NavigationMenu />
        </div>
      </div>
    </div>
  )
}