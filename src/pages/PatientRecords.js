import React from 'react';
import PatientRecordForm from '../components/PatientRecordForm';
import SearchByTCKN from '../components/SearchByTCKN';


const PatientRecords = () => {
  return (
    <div>
      <h2>Hasta Kayıtları</h2>
      <SearchByTCKN />
      <PatientRecordForm />
    </div>
  );
};

export default PatientRecords;
