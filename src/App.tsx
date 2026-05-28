import { useState,useEffect } from 'react'

import './App.css'

function App() {
const [catImage, setCatImage] = useState<string>('')
const [name, setName] = useState<string>('')
const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
fetch('http://api.freeapi.app/api/v1/public/cats/cat/random')
      .then(response => response.json())
      .then(data => {
        setCatImage(data.data.image)
        setName(data.data.name)
        // Handle the API response
      })
      .catch(error => {
        console.error('Error fetching cat image:', error)
      })
  }, [counter])

  return (
    <>
      <h1>Random Cat Image</h1>
      <p>{name}</p>
      <img src={catImage} alt="" />
      <button onClick={() => setCounter(counter + 1)}>Get New Cat Image</button>
    </>
  )
}

export default App
