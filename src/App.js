import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddDoctorDepartment from './pages/AddDoctorDepartment';
import AddPatient from './pages/AddPatient';
import PatientRecords from './pages/PatientRecords';
import Sorgulama from './pages/Sorgulama';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-doctor-department" element={<AddDoctorDepartment />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/patient-records" element={<PatientRecords />} />
        <Route path="/tc-sorgulama" element={<Sorgulama />} /> {/* Küçük harfle düzeltildi */}
      </Routes>
    </Router>
  );
}

export default App;
