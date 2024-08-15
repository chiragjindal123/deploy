import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

  const getJokes = () => {
    axios.get('/api/jokes')
    .then((response) => {
      setjokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  // useEffect(()=>{
  //   axios.get('/api/jokes')
  //   .then((response) => {
  //     setjokes(response.data)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // })

  return (
    <>
     <h1>React + Vite</h1>
     <button onClick={getJokes}>Click me To get Jokes</button>
     <p>JOKES:{jokes.length}</p>

     {
      jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
        </div>
      ))
     }

      <button onClick={() => setjokes([]) }>Click me To remove Jokes</button>
    </>
  )
}

export default App
