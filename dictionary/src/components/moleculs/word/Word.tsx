
type WordProps = {
  word?: string
  pronunciation?: string
}
const Word = ({ word, pronunciation }: WordProps) => {
  return (
    <div>{word} {pronunciation}</div>
  )
}

export default Word