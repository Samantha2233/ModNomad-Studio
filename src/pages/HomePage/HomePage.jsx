import React from 'react';
import './HomePage.scss';

import Landing from '../../components/Landing/Landing';
import LandingStatement from '../../components/LandingStatement/LandingStatement';
import LandingSpaces from '../../components/LandingSpaces/LandingSpaces';

const HomePage = () => {
  return (
    <div>
      <Landing />
      <LandingStatement />
      <LandingSpaces />
    </div>
  )
}

export default HomePage;