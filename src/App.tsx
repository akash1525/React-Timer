import React, {useEffect} from 'react';
import logo from './logo.svg';
import {useTimer} from './useTimer';
import {Timer} from './Timer'
import './App.css';

const App: React.FC = () => {
  const {pause, play, reset, time, timeInSeconds, status} = useTimer({minutes: "3"});
  // play();
useEffect (() => {
 console.log(time);
}, [time]);
  return (

     <div className="App">
      {/* <button>Start Timer</button>
      {timeInSeconds} */}
      < Timer 
      time={time} 
      status={status} 
      onPlay={play} 
      onReset={reset} 
      onPause={pause} 
      />
    </div>
  );
}

export default App;
