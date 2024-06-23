import React, { useState } from 'react';

const DoctorDepartmentForm = () => {
  const [doctor, setDoctor] = useState({ ad:'', soyad: '', uzmanlık: '' });
  const [department, setDepartment] = useState({ name: '', description: '' });

  const handleDoctorChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleDepartmentChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Doktur Bilgileri</h3>
      <input type="text" name="name" placeholder="İsim" value={doctor.name} onChange={handleDoctorChange} />
      <input type="text" name="surname" placeholder="Soyisim" value={doctor.surname} onChange={handleDoctorChange} />
      <input type="text" name="specialization" placeholder="Uzmanlık" value={doctor.specialization} onChange={handleDoctorChange} />
      
      <h3>Departman Bilgileri</h3>
      <input type="text" name="isim" placeholder="isim" value={department.name} onChange={handleDepartmentChange} />
      <input type="text" name="Tanım " placeholder="Tanım" value={department.description} onChange={handleDepartmentChange} />
      
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default DoctorDepartmentForm;
