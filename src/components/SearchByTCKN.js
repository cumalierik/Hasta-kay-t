import React, { useState } from 'react';
import axios from 'axios';

const SearchByTCKN = () => {
  const [tckn, setTckn] = useState('');
  const [patient, setPatient] = useState(null);

  const handleSearch = () => {
    axios.get(`/api/patients/${tckn}`).then(response => setPatient(response.data));
  }; 

  return (
    <form onSubmit={handleSearch}>
    <input
      type="text"
      placeholder="T.C. Kimlik Numarası"
      value={tckn}
      onChange={(e) => setTckn(e.target.value)}
    />
    <button type="submit">Ara</button>
    {patient && (
      <div>
        <h3>{patient.name} {patient.surname}</h3>
        <p>Telefon: {patient.phone}</p>
        <p>Adres: {patient.address}</p>
        {/* Hasta geçmiş kayıtlarını göster */}
      </div>
    )}
  </form>
  );
};

export default SearchByTCKN;
