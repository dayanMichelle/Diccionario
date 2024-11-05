
type MeaningProps = {
  list: any[]
}
export const Meaning = ({ list }: MeaningProps) => {
  return (
    <div>
    {list?.map((meaning, index) => (
      <div key={index}>
        <h3>{meaning.partOfSpeech}</h3>
        <ul>
          {meaning?.definitions.map((definition, defIndex) => (
            <li key={defIndex}>
              <p>{definition.definition}</p>
              {definition.example && <p><i>Example: {definition.example}</i></p>}
            </li>
          ))}
        </ul>
      </div>
    ))}
    </div>
  )
}
