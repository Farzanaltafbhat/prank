import React, { useState } from 'react';
import './App.css';

function App() {
  const [buttonToShow, setButtonToShow] = useState(1);

  const handleClick = () => {
    if (buttonToShow < 7) {
      setButtonToShow(buttonToShow + 1);
    } else {
      // Redirect to the Rick Roll video on YouTube
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
  };

  // Generate random positions for the button
  const randomPosition = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { top: `${y}px`, left: `${x}px`, position: 'absolute' };
  };

  return (
    <>
      {buttonToShow === 1 && <button id='btn1' onClick={handleClick} style={randomPosition()}>Click me!</button>}
      {buttonToShow === 2 && <button id='btn2' onClick={handleClick} style={randomPosition()}>Click me!</button>}
      {buttonToShow === 3 && <button id='btn3' onClick={handleClick} style={randomPosition()}>Click me!</button>}
      {buttonToShow === 4 && <button id='btn4' onClick={handleClick} style={randomPosition()}>Click me!</button>}
      {buttonToShow === 5 && <button id='btn5' onClick={handleClick} style={randomPosition()}>Click me!</button>}
      {buttonToShow === 6 && <button id='btn6' onClick={handleClick} style={randomPosition()}>Click me!</button>}
      {buttonToShow === 7 && <button id='btn7' onClick={handleClick} style={randomPosition()}>Click me!</button>}
    </>
  );
}

export default App;
