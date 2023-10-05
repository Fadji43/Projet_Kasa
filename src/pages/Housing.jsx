import React from 'react';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import Description from '../components/Description';
import Tags from '../components/Tags';
import Rate from '../components/Rate';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import logementsData from '../data/logements.json';


function Housing() {
  const logements = logementsData;

  return (
    <main>
      <Header />
      <Slideshow logements={logements} />
      <Description logements={logements} />
      <Tags logements={logements} />
      <Rate logements={logements} />
      <Dropdown logements={logements} />
      <Footer />
    </main>
  );
}

export default Housing;
