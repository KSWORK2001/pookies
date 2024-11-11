import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // Ensure this import is correct
import Month from './pages/Month';
import Timeline from './pages/Timeline';
import Theater from './pages/Theater';
import PhotosVideos from './pages/PhotosVideos';
import TugOfWar from './pages/TugOfWar';
import AboutCharvi from './pages/AboutCharvi';
import AboutKaran from './pages/AboutKaran';
import Poem from './pages/Poem';
import Month2 from './pages/Month2';
import C19B from './pages/C19B';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/weirdo" element={<Home />} /> 
            <Route path="/month" element={<Month />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/theater" element={<Theater />} />
            <Route path="/photos-videos" element={<PhotosVideos />} />
            <Route path="/tug-of-war" element={<TugOfWar />} />
            <Route path="/about-Charvi" element={<AboutCharvi />} />
            <Route path="/about-Karan" element={<AboutKaran />} />
            <Route path="/home" element={<Home />} />
            <Route path="/letter2" element={<Poem />} />
            <Route path="/month2" element={<Month2 />} />
            <Route path="/c19b" element={<C19B />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;