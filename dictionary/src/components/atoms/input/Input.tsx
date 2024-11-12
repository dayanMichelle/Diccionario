import { Link } from 'react-router-dom'
import Lupa from '../icons/Lupa'
import styles from './Input.module.css'

type InputProps = {
  setWord: (word: string) => void,
  word: string
}

export const Input = ({ setWord, word }: InputProps) => {
  return (
    <>
      <div className={styles.input}>
        <input placeholder='buscar...' value={word} onChange={(e) => setWord(e.target.value)} className={styles.search} />
        <Link to={`/${word}`}> <Lupa className={styles.icon} /></Link>


      </div>
    </>
  )
}
