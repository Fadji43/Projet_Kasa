import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles.scss';
import '../components/notfound.scss';

function Notfound() {
    return (
    <div className="error_tag">
        <h1 className="error_title">404</h1>
        <p className="error_message">La page que vous recherchez n'existe pas.</p>
        <Link to="/" className="button_error">Retournez sur la page d'accueil</Link>
        </div>
    );
};

export default Notfound;
