import React from 'react';
import './styles.scss';
import Header from'../components/Header';
import BannerAbout from '../components/BannerAbout';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';

export default function About() {
        return (
            <main>
                <Header />
                <BannerAbout />
                <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. "/>
                <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatries de Kasa. Tout comporteme,nt discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."/>
                <Collapse title="Service" content="La bienveillance fait partie des valeurs fondatries de Kasa. Tout comporteme,nt discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."/>
                <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour noshôtes que pour les voyageurs, chaque logement correspond aux critètes de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos éuiqpes de vérifier que les standard sont bien respectés. nous organisons également des  ateliers sur la sécurité domestique pour nos hôtes." />
                <Footer />
            </main>  
        )
    }
    