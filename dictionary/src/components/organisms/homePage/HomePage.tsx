import { Input } from '../../atoms/input/Input'
import Word from '../../molecules/word/Word'
import { Meaning } from '../../molecules/meaning/Meaning'
import { useSearch } from '../../../hooks/useSearch'
import { useState } from 'react'
import { Header } from '../header/Header'
import { useLetra } from '../../../hooks/useLetra'

export const HomePage = () => {

  const [word, setWord] = useState<string>('')
  const [, setSearchTerm] = useState<string>('')
  const { data } = useSearch()
  const { letra, handleChange } = useLetra()

  const searchWord = (word: string) => {
    setSearchTerm(word)
  }

  const renderContent = () => {
    if (!data) {
      return <p>Search for a word to get its meaning</p>;
    }

    if (!data.meanings) {
      return <p>No meanings found</p>;
    }

    return (
      <div>
        <Word word={data.word} pronunciation={data.phonetic} sound={data.phonetics[0].audio} />
        <hr />
        <Meaning searchWord={searchWord} list={data.meanings} />
      </div>
    );
  };

  return (
    <div className="app" style={{ fontFamily: letra }}>
      <Header handleChange={handleChange} letra={letra} />
      <Input word={word} setWord={setWord}/>
      {renderContent()}
    </div>
  )
}
