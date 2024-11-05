import Lupa from '../icons/Lupa'
import styles from './Input.module.css'

export const Input = () => {
  return (
    <div className={styles.input}>
      <input placeholder='buscar...' className={styles.search} />
      <Lupa  className={styles.icon} />
    </div>
  )
}
