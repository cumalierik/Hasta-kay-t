import React, { useState } from 'react';

const DoctorDepartmentForm = () => {
  const [doctor, setDoctor] = useState({ ad: '', soyad: '', uzmanlık: '' });
  const [department, setDepartment] = useState({ ad: '', description: '' });
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [doctorErrorMessage, setDoctorErrorMessage] = useState('');
  const [departmentErrorMessage, setDepartmentErrorMessage] = useState('');

  const handleDoctorChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleDepartmentChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const addDoctor = () => {
    if (!doctor.ad || !doctor.soyad || !doctor.uzmanlık) {
      setDoctorErrorMessage('Lütfen tüm doktor bilgilerini doldurun.');
      setDepartmentErrorMessage('');
      return;
    }

    const newDoctor = {
      id: doctors.length + 1,
      ad: doctor.ad,
      soyad: doctor.soyad,
      uzmanlık: doctor.uzmanlık
    };

    setDoctors([...doctors, newDoctor]);
    setDoctor({ ad: '', soyad: '', uzmanlık: '' });
    setDoctorErrorMessage('');
  };

  const addDepartment = () => {
    if (!department.ad || !department.description) {
      setDepartmentErrorMessage('Lütfen tüm departman bilgilerini doldurun.');
      setDoctorErrorMessage('');
      return;
    }

    const newDepartment = {
      id: departments.length + 1,
      ad: department.ad,
      description: department.description
    };

    setDepartments([...departments, newDepartment]);
    setDepartment({ ad: '', description: '' });
    setDepartmentErrorMessage('');
  };

  const deleteDoctor = (id) => {
    const updatedDoctors = doctors.filter(doc => doc.id !== id);
    setDoctors(updatedDoctors);
  };

  const deleteDepartment = (id) => {
    const updatedDepartments = departments.filter(dep => dep.id !== id);
    setDepartments(updatedDepartments);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Herhangi bir sunucu işlemi veya veritabanı işlemi burada yapılabilir
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Doktor Bilgileri</h3>
        <div className="form-row">
          <input type="text" name="ad" placeholder="İsim" value={doctor.ad} onChange={handleDoctorChange} />
          <input type="text" name="soyad" placeholder="Soyadı" value={doctor.soyad} onChange={handleDoctorChange} />
          <input type="text" name="uzmanlık" placeholder="Uzmanlık" value={doctor.uzmanlık} onChange={handleDoctorChange} />
          <button type="button" onClick={addDoctor}>Doktor Ekle</button>
        </div>
        {doctorErrorMessage && <p className="error-message">{doctorErrorMessage}</p>}
        <ul>
          {doctors.map((doc) => (
            <li key={doc.id}>
              <p>İsim: {doc.ad}</p>
              <p>Soyadı: {doc.soyad}</p>
              <p>Uzmanlık: {doc.uzmanlık}</p>
              <button type="button" onClick={() => deleteDoctor(doc.id)} className="delete-button">Sil</button>
            </li>
          ))}
        </ul>
      </form>

      <form onSubmit={handleSubmit}>
        <h3>Departman Bilgileri</h3>
        <div className="form-row">
          <input type="text" name="ad" placeholder="Adı" value={department.ad} onChange={handleDepartmentChange} />
          <input type="text" name="description" placeholder="Açıklama" value={department.description} onChange={handleDepartmentChange} />
          <button type="button" onClick={addDepartment}>Departman Ekle</button>
        </div>
        {departmentErrorMessage && <p className="error-message">{departmentErrorMessage}</p>}
        <ul>
          {departments.map((dep) => (
            <li key={dep.id}>
              <p>Adı: {dep.ad}</p>
              <p>Açıklama: {dep.description}</p>
              <button type="button" onClick={() => deleteDepartment(dep.id)} className="delete-button">Sil</button>
            </li>
          ))}
        </ul>
      </form>

      {(doctorErrorMessage || departmentErrorMessage) && <p style={{ color: 'red', textAlign: 'center' }}>Lütfen tüm alanları doldurun.</p>}
    </div>
  );
};

export default DoctorDepartmentForm;
