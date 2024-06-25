import React, { useState } from 'react';
import axios from 'axios';

function TCSorgulama() {
  const [tcKimlikNo, setTCKimlikNo] = useState('');
  const [hastaBilgileri, setHastaBilgileri] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleTCSorgulama = (e) => {
    e.preventDefault();

    // TC Kimlik numarasının geçerliliğini kontrol et
    if (!tcKimlikNo || !/^\d{11}$/.test(tcKimlikNo)) {
      setErrorMessage('Lütfen 11 rakamdan oluşan geçerli bir TC Kimlik numarası giriniz.');
      setHastaBilgileri([]); // Eski hasta bilgilerini temizle
      setSuccessMessage(''); // Başarılı mesajını temizle
      return; // Fonksiyondan çık, sorgulama yapma
    }

    // Geçerli TC Kimlik numarasıyla sorgulama yap
    axios.get(`http://localhost:5000/api/hasta/${tcKimlikNo}`)
      .then((response) => {
        console.log(response.data);
        setHastaBilgileri(response.data); // Hasta bilgilerini state'e atıyoruz
        setErrorMessage(''); // Hata mesajını temizle
        setSuccessMessage('Hasta bilgileri başarıyla bulundu.'); // Başarılı mesajı göster
      })
      .catch((error) => {
        console.error('Hata:', error);
        setHastaBilgileri([]); // Hasta bilgilerini temizle
        setErrorMessage('Sorgulama sırasında bir hata oluştu. Lütfen tekrar deneyin veya sistem yöneticisine başvurun.'); // Hata mesajı göster
        setSuccessMessage(''); // Başarılı mesajını temizle
      });
  };

  return (
    <div className="container">
      <h2>TC ile Hasta Sorgulama</h2>
      
      <form onSubmit={handleTCSorgulama} className="form">
        <input
          type="text"
          placeholder="TC Kimlik No"
          value={tcKimlikNo}
          maxLength="11"
          onChange={(e) => {
            const value = e.target.value;
            // Sadece rakam girişini kabul et ve maksimum uzunluğu kontrol et
            if (/^\d{0,11}$/.test(value)) {
              setTCKimlikNo(value);
            }
          }}
          className="input"
        />
        <button type="submit" className="button">Sorgula</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>

      {hastaBilgileri.length > 0 && (
        <div className="result">
          <h3>Sorgu Sonuçları</h3>
          <ul>
            {hastaBilgileri.map((hasta, index) => (
              <li key={index}>
                <p>Adı: {hasta.adi}</p>
                <p>Soyadı: {hasta.soyadi}</p>
                {/* Diğer hasta bilgileri */}
              </li>
            ))}
          </ul>
        </div>
      )}

      {hastaBilgileri.length === 0 && !errorMessage && !successMessage && (
        <p className="no-result"></p>
      )}
      <style>{`
        .error-message {
          color: red;
          font-weight: bold;
          margin: 10px 0;
        }
        .success-message {
          color: green;
          font-weight: bold;
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
}

export default TCSorgulama;
