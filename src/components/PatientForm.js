import React, { useState } from 'react';

const PatientForm = () => {
  const [patient, setPatient] = useState({ tckn: '', isim: '', soyisim: '', telefon: '', adres: '' });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to save patient
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="tckn" placeholder="T.C. Kimlik Numarası" value={patient.tckn} onChange={handleChange} />
      <input type="text" name="İsim" placeholder="İsim" value={patient.name} onChange={handleChange} />
      <input type="text" name="Soyisim" placeholder="Soyisim" value={patient.surname} onChange={handleChange} />
      <input type="text" name="Telefon" placeholder="Telefon" value={patient.phone} onChange={handleChange} />
      <input type="text" name="Adres" placeholder="Adres" value={patient.address} onChange={handleChange} />
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default PatientForm;
