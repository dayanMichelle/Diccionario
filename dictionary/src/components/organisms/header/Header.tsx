import styles from './Header.module.css'
import BookIcon from '../../atoms/icons/Book'

type HeaderProps = {
  letra: string
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Header = ({ letra, handleChange }: HeaderProps) => {
  return (
    <div className={styles.header} >
      <BookIcon />
      <select name="letra" id="letra" value={letra} onChange={handleChange}>
        <option value="Inconsolata">Inconsolata</option>
        <option value="Inter">Inter</option>
        <option value="Lora">Lora</option>
      </select>
    </div>
  )
}
