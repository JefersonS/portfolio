import React from 'react';
import { NavigationMenu } from './navigationMenu';
import { FollowMeButtons } from './followMeButtons';

export const Intro = ({profile}) => {
  return (
    <div>

      <div className="intro-header">
        <div className="intro-header-text">
          {profile.name}
        </div>
      </div>

      <div className="intro-content">
        <div className="content-text">
          {profile.intro.map((paragraph, i) =>
            <span key={i}>{paragraph} <br /><br /></span>
          )}
        </div>

        <div className="follow-me-section">
            <img className="profile-picture" src={require(`../images/${profile.profilePicture}`)} alt={profile.name}/> 
          <div className="followMeButtons">
            <FollowMeButtons socialMedias={profile.socialMedias}/>
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