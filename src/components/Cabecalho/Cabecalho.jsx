import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/img/logo 1.png';
import "./Cabecalho.scss";

const Cabecalho = () => {
  return (
    <div>
      <header>
        <div className="inner">
          <div className="logo">
            <img src={Logo} alt="WWF Logo" />
          </div>
          <div className="burger"></div>
          <nav>
            <Link to="/" className="Link">Home</Link>
            <Link to="/sobre" className="Link">About Us</Link>
            <Link to="/parceiros" className="Link">Partners</Link>
            <Link to="/suporte" className="Link">Support</Link>
          </nav>
          <Link to="/login" className="donate-link">DONATE</Link>
        </div>
      </header>
    </div>
  );
}

export default Cabecalho;
