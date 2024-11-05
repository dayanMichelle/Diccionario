import { useState } from 'react'
import Lupa from '../icons/Lupa'
import styles from './Input.module.css'

type InputProps = {
  searchWord: (word: string) => void
}

export const Input = ({ searchWord }: InputProps) => {
  const [word, setWord] = useState<string>('')
  // const meaning = result?.meanings?.[0]?.definitions?.[0]?.definition || 'No definition found'
  return (
    <>
      <div className={styles.input}>
        <input placeholder='buscar...' value={word} onChange={(e) => setWord(e.target.value)} className={styles.search} />
        <Lupa onClick={() => searchWord(word)} className={styles.icon} />
      </div>
    </>
  )
}
