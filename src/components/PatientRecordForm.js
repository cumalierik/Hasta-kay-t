import React, { useState } from 'react';
import axios from 'axios';

const DoktorBilgileri = () => {
  const [doktor, setDoktor] = useState({
    ad: '',
    soyad: '',
    uzmanlık: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoktor((prevDoktor) => ({
      ...prevDoktor,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/doctors', doktor);
      console.log('Doktor kaydedildi:', response.data);
    } catch (error) {
      console.error('Doktor kaydedilirken hata oluştu:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Doktor Bilgileri</h2>
      <label>
        Ad:
        <input type="text" name="ad" value={doktor.ad} onChange={handleChange} />
      </label>
      <label>
        Soyad:
        <input type="text" name="soyad" value={doktor.soyad} onChange={handleChange} />
      </label>
      <label>
        Uzmanlık:
        <input type="text" name="uzmanlık" value={doktor.uzmanlık} onChange={handleChange} />
      </label>
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default DoktorBilgileri;
