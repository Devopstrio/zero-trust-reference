import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ReferenceDashboard from './pages/ReferenceDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400 max-w-md mx-auto">The Zero Trust reference engine is currently indexing modular security patterns and orchestrating implementation blueprints. This module will be available shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ReferenceDashboard />} />
          <Route path="/identity" element={<Placeholder name="Identity Reference Patterns" />} />
          <Route path="/network" element={<Placeholder name="Network Reference Models" />} />
          <Route path="/policies" element={<Placeholder name="Central Policy Registry" />} />
          <Route path="/app-sec" element={<Placeholder name="Application Security Baseline" />} />
          <Route path="/data" element={<Placeholder name="Data Security & Privacy Patterns" />} />
          <Route path="/incidents" element={<Placeholder name="Incident Response Laboratory" />} />
          <Route path="/library" element={<Placeholder name="Architecture Design Library" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
