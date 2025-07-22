import React from 'react';
import DietForm from './DietForm';

function Home() {
  return (
    <div style={{ padding: '2rem', background: '#fff8e1', color: '#333' }}>
      <h1 style={{ color: 'goldenrod' }}>🥗 Healthy Mode</h1>
      <p>Select your goal and get a personalized diet & fitness plan!</p>
      <DietForm />
    </div>
  );
}

export default Home;