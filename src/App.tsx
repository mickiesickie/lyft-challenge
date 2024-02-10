import { useState,useRef } from 'react';
import './App.css';

import Board from './components/Board/Board';
import Square from './components/Square/Square';
import Button
 from './components/Button/Button';
 type TButton = {
  text :string;
  move: string
}

const  arrayButtons: TButton[] = [
  {
      text: 'top',
      move: 'forward',
  },
  {
      text: 'right',
      move:'forward'
  },
  {
      text: 'bottom',
      move:'backward'
  },
  {
      text: 'left',
      move:'backward'
  }
]

function App() {
 const [axisX, setAxisX] = useState(0);
 const [axisY, setAxisY] = useState(0);
 const squareRef = useRef(null);
 const boardRef = useRef(null);

 const calculateBoundaries = () => {
    const boarderLimit = boardRef.current.getBoundingClientRect(); 
    const squareLimit = squareRef.current.getBoundingClientRect(); 
    const btn = 40 + 10;

    let boundaries = {
        right :  boarderLimit.right - btn >= squareLimit.right ? true : false,
        left : boarderLimit.left + btn <= squareLimit.left ? true : false,
        top: squareLimit.top >= boarderLimit.top  + btn ? true : false,
        bottom: boarderLimit.bottom - btn  >= squareLimit.bottom  ? true : false,
    } 
   
    return boundaries;
 }
const handleClick = (toMove: string): void => {
  const {left, right, top , bottom} = calculateBoundaries();
  if(toMove  === 'left'){
    setAxisX((prevState) =>  left  ? prevState - 10 : prevState)
  }
  if(toMove  === 'right'){
    setAxisX((prevState) =>  right ? prevState + 10 : prevState)
  }
  if(toMove  === 'top'){
    setAxisY((prevState) => top ?  prevState - 10 : prevState)
  }
  if(toMove  === 'bottom'){
    setAxisY((prevState) =>  bottom ? prevState + 10 : prevState)
  }
}

  return (
    <>
      <Board myRef={boardRef}>
        <>
          <Square  myRef={squareRef} axis={{axisX,axisY}}/>
          {
            arrayButtons.map((button,index) => <Button key={index} {...button} onClickEvent={() => handleClick(button.text)}/> )
          }
        </>
      </Board>
    </>
  )
}

export default App
