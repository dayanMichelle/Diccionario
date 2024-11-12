
import { Link } from "react-router-dom"

type MeaningProps = {
  list: any[],
  searchWord: (word: string) => void
}
export const Meaning = ({ list = [] }: MeaningProps) => {
  const synonyms = list[1]?.synonyms[0]

  return (
    <div>

      {list?.slice(0, 1).map((meaning, index) => (
        <div key={index}>
          <h3>{meaning.partOfSpeech}</h3>
          <p>Meaning</p>
          <ul>
            {meaning?.definitions.slice(0, 2).map((definition, defIndex) => (
              <li key={defIndex}>
                <p>{definition.definition}</p>
                {definition.example && <p><i>Example: {definition.example}</i></p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {
        synonyms && <p>Synonyms <Link to={`/${synonyms}`}>{synonyms}</Link></p>
      }



      {list?.slice(2, 3).map((meaning, index) => (
        <div key={index}>
          <h3>{meaning.partOfSpeech}</h3>
          <p>Meaning</p>
          <ul>
            {meaning?.definitions.slice(0, 2).map((definition, defIndex) => (
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
