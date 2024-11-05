import Audio from '../../atoms/icons/Audio';
import styles from './Word.module.css'

type WordProps = {
  word?: string,
  pronunciation?: string,
  sound?: string
}
const Word = ({ word, pronunciation, sound }: WordProps) => {
  const playAudio = () => {
    const audio = new window.Audio(sound);
    audio.play();
  }
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.word}> {word} </h3>
        <p className={styles.pronunciation}>{pronunciation}</p>
      </div>
      <Audio onClick={playAudio} />
    </div>
  )
}

export default Word