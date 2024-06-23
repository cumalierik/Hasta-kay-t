import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus, faAddressBook, faStethoscope } from '@fortawesome/free-solid-svg-icons';

const AnaSayfa = () => {
  return (
    <div>
      <h1 className='white'>Ana Sayfa</h1>
      <div className='page'>
        <div className='sidebar'>
        <ul className="menu-list">
          <li>
            <Link to="/add-doctor-department">
              <FontAwesomeIcon icon={faStethoscope} size="lg" /> <span className="menu-text">Doktor/Bölüm Ekle</span>
            </Link>
          </li>
          <li>
            <Link to="/add-patient">
              <FontAwesomeIcon icon={faUserPlus} size="lg" /> <span className="menu-text">Hasta Ekle</span>
            </Link>
          </li>
          <li>
            <Link to="/patient-records">
              <FontAwesomeIcon icon={faAddressBook} size="lg" /> <span className="menu-text">Hasta Kayıtları</span>
            </Link>
          </li>
          <li>
            <Link to="/doctor-information">
              <FontAwesomeIcon icon={faUser} size="lg" /> <span className="menu-text">Doktor Bilgileri</span>
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default AnaSayfa;
