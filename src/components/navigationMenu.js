import React from 'react';
import {
  Link
} from "react-router-dom";

export const NavigationMenu = () => {
  return (
    <div className="navigationMenu">
      <Link to="/" className="navigation-link">Home</Link> |
      <Link to="/experience" className="navigation-link">Experience</Link> |
      <Link to="/contact" className="navigation-link">Contact</Link>
    </div>
  );
}
