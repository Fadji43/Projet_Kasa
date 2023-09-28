import React from 'react';
import logo from '../image/logo_kasa.png';
import '../components/footer.scss';
import '../pages/styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <h5 className="copyright">&copy; 2020. All rights reserved</h5>
    </footer>
  );
}

export default Footer;
