import Lupa from '../icons/Lupa'
import styles from './Input.module.css'

type InputProps = {
  searchWord: (word: string) => void,
  setWord: (word: string) => void,
  word: string
}

export const Input = ({ searchWord, setWord, word }: InputProps) => {
  return (
    <>
      <div className={styles.input}>
        <input placeholder='buscar...' value={word} onChange={(e) => setWord(e.target.value)} className={styles.search} />
        <Lupa onClick={() => searchWord(word)} className={styles.icon} />
      </div>
    </>
  )
}
