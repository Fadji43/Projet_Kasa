import React from 'react';
import './styles.scss';
import Header from'../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <main>
                <Header />
                <Banner />
                <Card />
            </main> 
            <footer>
                <Footer />
            </footer> 
        </div>
       
    )
}

