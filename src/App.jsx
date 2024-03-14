const TURNS = {
  x: 'x',
  o: 'o'
}

const board = Array(9).fill(null)

const Square = ({children, updateBoard, index}) =>{
  return(
    <div className="square">
      {index}
    </div>
  )
}

function App() {
  
  const [board, setBoard] = useState(Array(9).fill(null))
  cosnt [turn, setTurn]

  return (
  <main className='board'>
    <h1>Titac toe</h1>
    <section className="game">
      {
      board.map((_, index) => {
        return(
          <Square
          key={index}
          index={index}
          >
            {index}
          </Square>
        )
        })
      }        
    </section>
  </main>  
  )
}
export default App
