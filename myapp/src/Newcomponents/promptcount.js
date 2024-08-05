import React, { useState, useEffect } from 'react';
import './promptcount.css';

function App() {
  const [promptCount, setPromptCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (promptCount === 10) {
      setShowPopup(true);
    }
  }, [promptCount]);

  const handleUserPrompt = () => {
    setPromptCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 10) {
        setShowPopup(true);
      }
      return newCount;
    });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <p>Prompt Count: {promptCount}</p>
      
      {showPopup && (
        <div className="popup">
            <button onClick={handleUserPrompt}>Simulate User Prompt</button>
          <p>Looks like you ran out of prompts, sign in for Unlimited!</p>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
