import React from 'react'

export const Experience = ({experience}) => {
  const textAlign = experience.id % 2 === 0 ? 'right' : 'left';
  const float = experience.id % 2 === 0 ? 'right' : 'left';
  const startDate = formatDate(experience.start);
  const endDate = formatDate(experience.end);
  const diff = getDatesDiff(experience.start, experience.end)
  const formattedDiff = formatDateDiff(diff);

  return (
    <div style={{textAlign, float}} className="experience-container">
      <span className="experience-title">
        {experience.jobTitle}
      </span> <br />
      <span className="experience-company">
        {experience.company}
      </span> <br />
      <span className="experience-duration">
        {startDate} - {endDate} | {formattedDiff}
      </span> <br />
      <span className="experience-location">
        {experience.location}
      </span> <br /><br />
      <span className="experience-description">
        {experience.description}
      </span> <br /><br />
      <span className="experience-technologies">
        Technologies: {experience.technologies.join(', ')}
      </span> <br /><br />
    </div>
  )
}

const formatDate = (date) => {
  if(!date) return 'Current';
  const currentDate = new Date(date);
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString('en-us', { month: 'short' });

  return `${month} ${year}`;
}

const getDatesDiff = (start, end) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  const diff = Math.abs(endDate - startDate);

  return diff;
}

const formatDateDiff = (dateDiff) => {
  const years = (dateDiff / ( 1000 * 60 * 60 * 24 * 30 * 12 ));
  const months = (years - Math.floor(years)) * 10;

  if(Math.floor(years) === 0){
    return `${Math.ceil(months)} mos`;
  }
  return `${Math.floor(years)} yr ${Math.ceil(months)} mos`;
}