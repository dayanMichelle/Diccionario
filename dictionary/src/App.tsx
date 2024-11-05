import { useState } from "react"
import { Input } from "./components/atoms/input/Input"
import { Meaning } from "./components/molecules/meaning/Meaning"
import Word from "./components/molecules/word/Word"
import './index.css'

function App() {
  const [result, setResult] = useState<any>()
  const searchWord = async (word: string) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setResult(data[0])

    } catch (error) {
      setResult(null)
      console.error('Error fetching the word:', error)
    }
  }
console.log(result?.meanings)
  return (
    <div className="app">
      <Input result={result} searchWord={searchWord} />
      <Word word={result?.word} pronunciation={result?.phonetic} sound={result?.phonetics[0].audio}/>
      <i className="text">noun</i>
      <hr></hr>
      <Meaning list={result?.meanings} />
    </div>
  )
}

export default App
