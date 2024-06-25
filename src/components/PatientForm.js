import React, { useState } from 'react';

const PatientForm = () => {
  const [patient, setPatient] = useState({ tckn: '', isim: '', soyisim: '', telefon: '', adres: '' });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit}><input type="text" name="İsim" placeholder="İsim" value={patient.name} onChange={handleChange} />
      <input type="text" name="Soyisim" placeholder="Soyisim" value={patient.surname} onChange={handleChange} />
      <input type="text" name="Telefon" placeholder="Telefon" value={patient.phone} onChange={handleChange} />
      <textarea class="form-control"    placeholder="Adres"rows="3"></textarea>
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default PatientForm;
