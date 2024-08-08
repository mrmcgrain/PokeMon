import React, { useState } from 'react'
import Test from './Test'
import './App.css'
import Pokemon from './Pokemon'
import PokemonList from './PokemonList'
import Counter from './Counter'
import Counter2 from './Counter2'


export default function App() {


  const [message, setMessage] = useState("")


  const inverseData = (input) => {
    console.warn("**********", input)
    setMessage(input)
  }





  return (
    <>
      {console.log("message", message)}
      {/* <Counter2 /> */}

      <Pokemon inverseData={inverseData} />

      {/* <PokemonList /> */}
      {/* <Test user={user} /> */}
    </>
  )
}


