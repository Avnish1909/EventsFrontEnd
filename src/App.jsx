import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Events from './components/Events/Events';
import AddEvent from './components/Events/AddEvent';
import EventItem from './components/Events/EventItem/EventItem';

const Home = () => <h1>Welcome to Thought Lab!</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Events />} /> {/* ✅ Explicit /events route */}
        <Route path="/addevent" element={<AddEvent />} /> {/* ✅ Lowercase route */}
        <Route path="/events/:id" element={<EventItem />} />
        
        {/* Optional: Catch-all for 404s */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
