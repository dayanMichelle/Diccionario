import { Input } from '../../atoms/input/Input'
import Word from '../../molecules/word/Word'
import { Meaning } from '../../molecules/meaning/Meaning'
import { useSearch } from '../../../hooks/useSearch'
import { useState } from 'react'
import { Header } from '../header/Header'
import { useLetra } from '../../../hooks/useLetra'

export const HomePage = () => {

  const [word, setWord] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { data } = useSearch()
  const { letra, handleChange } = useLetra()

  const searchWord = (word: string) => {
    setSearchTerm(word)
  }


  return (
    <div className="app" style={{ fontFamily: letra }}>
      <Header handleChange={handleChange} letra={letra} />
      <Input word={word} setWord={setWord} result={data} />
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
