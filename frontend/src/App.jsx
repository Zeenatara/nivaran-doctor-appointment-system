import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import MyAppointment from './pages/MyAppointment';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import About from './pages/About';

const App = () => {
  return (
    <>
      <div className="px-4 sm:px-10 md:px-14 lg:px-20">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointment" element={<MyAppointment />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
