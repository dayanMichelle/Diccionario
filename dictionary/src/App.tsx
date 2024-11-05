import { useState } from "react"
import { Input } from "./components/atoms/input/Input"
import Word from "./components/moleculs/word/Word"

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

  return (
    <>
      <h1>Dictionary</h1>
      <Input result={result} searchWord={searchWord} />
      <Word word={result?.word}/>
    </>
  )
}

export default App
