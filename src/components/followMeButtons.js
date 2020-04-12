import React from 'react';

export const FollowMeButtons = ({socialMedias}) => {
  return (
    <>
      {Object.keys(socialMedias).map((key, i) =>
        <span key={i}>
          <a href={socialMedias[key]} target="_blank" rel="noopener noreferrer">
            <img src={require(`../images/${key}.svg`)} className="social-media-picture" alt={key}/>
          </a>
        </span>
      )}
    </>
  )
}
