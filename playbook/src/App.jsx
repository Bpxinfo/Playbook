import React from 'react';
import MainLayout from './layouts/MainLayout';
import CommunicationPlan from './pages/CommunicationPlan';

function App() {
  return (
    <div className="w-full h-full">
      <MainLayout>
        <CommunicationPlan />
      </MainLayout>
    </div>
  );
}

export default App;