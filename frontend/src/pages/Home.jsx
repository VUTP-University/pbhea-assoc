import React, { useState } from 'react';
import Founding from '../components/Founding';
import SpecialtiesTab from '../components/SpecialtiesTab';
import About from '../components/About';

const Home = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'founding', label: 'Founding' },
    { id: 'bachelor', label: 'Bachelor' },
    { id: 'master', label: 'Master' },
    { id: 'doctor', label: 'Doctor' },
    { id: 'about', label: 'About' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'founding':
        return <Founding />;
      case 'bachelor':
        return <SpecialtiesTab level="bachelor" />;
      case 'master':
        return <SpecialtiesTab level="master" />;
      case 'doctor':
        return <SpecialtiesTab level="doctor" />;
      case 'about':
        return <About />;
      default:
        return <Founding />;
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-gradient-to-br from-[#163A64] to-[#1e4b85]">
      <h1 className="text-4xl font-bold text-center mb-6 primary_text">The Association “Positioning Bulgarian Higher Education Abroad” (PBHEA) </h1>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full font-medium btn_primary`}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mx-auto p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;