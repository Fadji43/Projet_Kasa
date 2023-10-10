import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import Description from '../components/Description';
import Tags from '../components/Tags';
import Rate from '../components/Rate';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import logementsData from '../data/logements.json';

function Housing() {
  let { id } = useParams();
  console.log(id);
  const logements = logementsData.filter((log) => log.id == id)[0];
  console.log(logements);

  return (
    <main>
      <Header />
      <Slideshow logements={logements} />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Description logements={logements} />
          <Tags logements={logements} />
        </div>
        <div style={{ flex: 1 }}>
          <Rate logements={logements} />
        </div>
      </div>
      <Dropdown logements={logements} />
      <Footer />
    </main>
  );
}

export default Housing;
