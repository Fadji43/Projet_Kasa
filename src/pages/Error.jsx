import React from 'react';
import './styles.scss'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notfound from '../components/Notfound';

export default function Error() {
    return (
        <div>
            <main>
                <Header />
                <Notfound />
            </main> 
            <footer>
                <Footer />
            </footer> 
        </div>
            
    )
}
