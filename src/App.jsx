import React from 'react';
import Header from './components/layout/Header/Header.jsx'; // Corrected extension
import Footer from './components/layout/Footer/Footer.jsx'; // New import
import LandingPage from './pages/LandingPage/LandingPage.jsx'; // Corrected extension

import './index.css'; // Main application styles

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LandingPage />
        {/* Other pages/sections would go here based on routing */}
      </main>
      <Footer />
    </div>
  );
}

export default App;