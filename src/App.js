import React from 'react';
import App1 from './App1';
import App2 from './App2';

function App() {
    return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
      <App1 />
      <App2 />
    </div>
    );
};

export default App;