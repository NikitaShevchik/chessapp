import { useEffect, useState } from 'react';
import './App.scss';
import BoardComponent from './components/board/BoardComponent';
import { Board } from './models/Board';

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard)
  }

  return <div className='app'>
    <BoardComponent />
  </div>
}

export default App;
