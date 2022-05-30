import { useState } from 'react'
import './App.css'
import { Card } from './Components/QuoteBox'
import Phrase from './Components/Json/Phraseson.json'

const arrayColors = [
  '#B7408A', '#A071D5', '#FDB872', '#96F9AD', '#F00B31', '#B92BF3', '#F67259', 
  '#B1B9E5', '#FD7C96', '#2EAAEC', '#06CC65', '#CB7F65', '#EA1611', '#6E826F'
]

function App() {

  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }
  
  const getRandom = array =>{
    const i = createNumberRandom (array)
    return array [i]
  }

  const [phraseRandom, setPharseRandom] = useState (getRandom(Phrase))
  const [colorRandom, setColorRandom] = useState (getRandom(arrayColors))

  const clickButtom = () => {
    setPharseRandom (getRandom(Phrase))
    setColorRandom (getRandom(arrayColors))
  }

  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <Card
      phraseRandom={phraseRandom}
      colorRandom={colorRandom}
      clickButtom={clickButtom}
      />
    </div>
  )
}

export default App
