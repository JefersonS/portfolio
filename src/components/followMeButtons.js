import React from 'react';
import linkedinImg from '../images/linkedin.svg'
import githubImg from '../images/github.svg'
import instagramImg from '../images/instagram.svg'

export const FollowMeButtons = () => {
  return (
    <>
      <a href="www.google.com"><img src={linkedinImg} className="social-media-picture" alt="LinkedIn"/></a>
      <a href="www.google.com"><img src={githubImg} className="social-media-picture" alt="Github"/></a>
      <a href="www.google.com"><img src={instagramImg} className="social-media-picture" alt="Instagram"/></a>
    </>
  )
}
