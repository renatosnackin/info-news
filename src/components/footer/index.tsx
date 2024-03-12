import React from 'react';
import './style.css';
import LogoSmart from '../../assets/logo_smart.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='linkPainel'>
        <a href="https://snackin.tech/" target="_blank" rel="noopener noreferrer">Link para o painel de dados</a>
      </div>
      <div>
        <img src={LogoSmart} alt="Logo Smart" />
      </div>
    </footer>
  );
};

export default Footer;
