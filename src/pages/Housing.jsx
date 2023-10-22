import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import Layout from '../components/Layout';
import Description from '../components/Description';
import Tags from '../components/Tags';
import Rate from '../components/Rate';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import logementsData from '../data/logements.json';

function Housing() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifiez si l'ID est valide
    const isValidId = logementsData.some((logement) => logement.id === id);

    if (!isValidId) {
      navigate('./error'); // Redirige vers la page d'erreur si l'ID n'est pas valide
    }
  }, [id, navigate]);

  const logements = logementsData.find((log) => log.id === id);

  return (
    <div>
      <main>
        <Header />
        <Slideshow logements={logements} />
        <Layout className="layout">
          <div className="left-column">
            <Description logements={logements} />
            <Tags logements={logements} />
          </div>
          <div className="right-column">
            <Rate logements={logements} />
          </div>
        </Layout>
        <Dropdown logements={logements} />
      </main>
        <footer>
          <Footer />
        </footer> 
    </div>
  );
}

export default Housing;
