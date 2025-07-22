import React, { useState } from 'react';

function DietForm() {
  const [goal, setGoal] = useState('');
  const [health, setHealth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Goal: ${goal}\nHealth Issue: ${health}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <label>Goal:
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="">Select</option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Muscle Gain">Muscle Gain</option>
        </select>
      </label>
      <br />
      <label>Health Issues:
        <select value={health} onChange={(e) => setHealth(e.target.value)}>
          <option value="">None</option>
          <option value="Diabetes">Diabetes</option>
          <option value="BP">Blood Pressure</option>
        </select>
      </label>
      <br />
      <button type="submit">Get Plan</button>
    </form>
  );
}

export default DietForm;