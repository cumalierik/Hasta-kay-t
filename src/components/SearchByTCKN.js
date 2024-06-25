import React, { useState } from 'react';
import axios from 'axios';

function HastaKayit() {
  const [tcKimlikNo, setTCKimlikNo] = useState('');
  const [hastaAdi, setHastaAdi] = useState('');
  const [hastaSoyadi, setHastaSoyadi] = useState('');
  const [telefonNo, setTelefonNo] = useState('');
  const [adres, setAdres] = useState('');
  const [secilenDoktor, setSecilenDoktor] = useState('');
  const [secilenBolum, setSecilenBolum] = useState('');
  const [ekBilgiler, setEkBilgiler] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleHastaKayitSubmit = (e) => {
    e.preventDefault();

    // Form doğrulama
    if (!tcKimlikNo || !hastaAdi || !hastaSoyadi || !telefonNo || !adres || !secilenDoktor || !secilenBolum) {
      setErrorMessage('Lütfen tüm alanları doldurun.');
      return;
    }

    if (tcKimlikNo.length !== 11) {
      setErrorMessage('TC Kimlik No 11 haneli olmalıdır.');
      return;
    }

    if (telefonNo.length !== 10) {
      setErrorMessage('Telefon No 10 haneli olmalıdır.');
      return;
    }

    // Axios ile POST isteği gönder
    axios.post('/api/hasta', {
      tcKimlikNo,
      hastaAdi,
      hastaSoyadi,
      telefonNo,
      adres,
      secilenDoktor,
      secilenBolum,
      ekBilgiler,
    }).then((response) => {
      console.log(response.data);
      setSuccessMessage('Hasta başarıyla kaydedildi.');
      setErrorMessage('');
      // Formu temizle
      setTCKimlikNo('');
      setHastaAdi('');
      setHastaSoyadi('');
      setTelefonNo('');
      setAdres('');
      setSecilenDoktor('');
      setSecilenBolum('');
      setEkBilgiler('');
    }).catch((error) => {
      console.error('Error:', error);
      setErrorMessage('Kayıt sırasında bir hata oluştu.');
      setSuccessMessage('');
    });
  };

  const handleNumberInput = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      e.target.name === 'tcKimlikNo' ? setTCKimlikNo(value) : setTelefonNo(value);
    }
  };

  return (
    <div>
      <form onSubmit={handleHastaKayitSubmit}>
        <h2>Hasta Kaydı Açma</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <input
          type="text"
          placeholder="TC Kimlik No"
          value={tcKimlikNo}
          name="tcKimlikNo"
          onChange={handleNumberInput}
          maxLength="11"
        />
        <input
          type="text"
          placeholder="Hasta Adı"
          value={hastaAdi}
          onChange={(e) => setHastaAdi(e.target.value)}
        />
        <input
          type="text"
          placeholder="Hasta Soyadı"
          value={hastaSoyadi}
          onChange={(e) => setHastaSoyadi(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefon No"
          value={telefonNo}
          name="telefonNo"
          onChange={handleNumberInput}
          maxLength="10"
        />
        <input
          type="text"
          placeholder="Adres"
          value={adres}
          onChange={(e) => setAdres(e.target.value)}
        />
        <input
          type="text"
          placeholder="Seçilen Doktor"
          value={secilenDoktor}
          onChange={(e) => setSecilenDoktor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Seçilen Bölüm"
          value={secilenBolum}
          onChange={(e) => setSecilenBolum(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ek Bilgiler"
          value={ekBilgiler}
          onChange={(e) => setEkBilgiler(e.target.value)}
        />
        <button type="submit">Kaydet</button>
      </form>
      <style jsx>{`
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

export default HastaKayit;
