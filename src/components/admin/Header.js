import React from 'react';
import logo from '../image/cumik.jpg'; // Import file gambar logo
import './Header.css'; // Import file CSS

function Header({ handleLogout }) {
  return (
    <header className="header">
      <img src={logo} alt="Kedai Cumik Logo" className="header__logo" /> {/* Tambahkan tag img dengan sumber gambar */}
      <h1 className="header__title">Kedai Cumik</h1>
    </header>
  );
}

export default Header;
