import { Input } from '../../atoms/input/Input'
import Word from '../../molecules/word/Word'
import { Meaning } from '../../molecules/meaning/Meaning'
import { useSearch } from '../../../hooks/useSearch'
import { useState } from 'react'

export const HomePage = () => {

  const [word, setWord] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { data } = useSearch(searchTerm)

  // Función para manejar la búsqueda
  const searchWord = (word) => {
    setSearchTerm(word) // Actualiza el término de búsqueda solo cuando el usuario hace clic
  }


  return (
    <div className="app">
      <Input word={word} setWord={setWord} result={data} searchWord={searchWord} />
      {
        !data && <p>Search for a word to get its meaning</p>
      }
      {
        data && !data?.meanings && <p>No meanings found</p>
      }
      {
        data && (
          <div>
            <Word word={data?.word} pronunciation={data?.phonetic} sound={data?.phonetics[0].audio} />
            <hr></hr>
            <Meaning searchWord={searchWord} list={data?.meanings} />
          </div>
        )
      }

    </div>
  )
}
