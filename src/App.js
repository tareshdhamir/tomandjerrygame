import Board from './components/board';
import React, {useState, useEffect, useRef} from 'react'
import Button from './components/button';

function App() {
  const [isStart, setStart] = useState(false);
  const intervalId = useRef();
  useEffect(() =>{
    if(isStart){
      let random;
    intervalId.current = setInterval(() => {
      document.querySelectorAll("[data-cell]").forEach((elem) => {
        elem.innerHTML="";
      });
      random = random ? getRandomInt(1,16) : 13;
      const cell = document.querySelectorAll(`[data-cell="${random}"]`)[0];
      cell.innerHTML = "<img class='mouseImage' src='data:image/png;base64,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' alt='JerryMouse' />";
      if(random === 4){
        clearInterval(intervalId.current);
        setStart(false);
      }
    }, 1200);
  }
    return () => {
      clearInterval(intervalId.current);
    };
  },[isStart]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function declareWinner(event){
  const cellNumber = event.currentTarget.dataset.cell;
  const cell = document.querySelectorAll(`[data-cell="${cellNumber}"]`)[0];
  if(cell.innerHTML.indexOf("<img") !== -1 && cellNumber !== "4"){
    clearInterval(intervalId.current);
    setStart(false);
    alert("You have won!!");
  }
}

function handleButtonClick(){
  setStart(!isStart);
}

  return (
    <div className="App">
      <Board declareWinner={declareWinner} />
      <Button handleButtonClick={handleButtonClick} value="Start" />
    </div>
  );
}

export default App;
