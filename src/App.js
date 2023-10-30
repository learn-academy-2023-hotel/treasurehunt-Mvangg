import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?", 
    "?"
  ])


  
  // let randomNumber = Math.floor(Math.random() * board.length)
  const [treasureLocation, setTreasureLocation] = useState( 
    // Math.floor rounds it to the lowest number.
    // Math.random gives you an output for 0 - .99.
    Math.floor(Math.random() * board.length)
  ) 
    // console.log('treasure location: ', treasureLocation)
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  )

  const handleSquareClick = (clickedSquareIndex) => {
    // variable holding copy of current state
    let updatedBoard = [...board]
    // set condition for if treasure location is same as clicked square's index, show a treasure
    if(clickedSquareIndex === treasureLocation) {
      // then reassigne state value at that index to treasure emoji
      updatedBoard[clickedSquareIndex] = "👻"
      // setBoard(updatedBoard)
    } else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = "👹"
      // setBoard(updatedBoard)
    } else {
    // use index from clickedSquare to update the current square's value with emoji
    updatedBoard[clickedSquareIndex] = "🎃"
    // update state with the new board
    // setBoard(updatedBoard)
    // alert(clickedSquareIndex)
    }
    setBoard(updatedBoard)
  }
  
  const restartGameClick = () => {
    setBoard(Array(9).fill("?")) // Reset the board to an array of 9 in length with "?" in squares.
    setTreasureLocation(Math.floor(Math.random() * 9)) // Reset treasure location.
    setBombLocation(Math.floor(Math.random() * 9)) // Reset bomb location.
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <p>
       <button className="button" onClick={restartGameClick}>Restart Game</button>
      </p>
      <div className = "board">
      {/* Map over array and return a square for each element. */}
      { board.map((value, index) => {
        console.log(value, index)
        return <Square 
          value={value} 
          index={index} 
          handleSquareClick={handleSquareClick}
        />
      })}
      </div>
    </>
  )
}

export default App
