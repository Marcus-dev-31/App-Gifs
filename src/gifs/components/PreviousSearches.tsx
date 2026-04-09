interface PreviousSearchesProps {
  searches: string[];
  onclick: (term: string) => void;
}

export const PreviousSearches = ({ searches, onclick }: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas Previas</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li 
            key={term}
            onClick={ () => onclick(term) }
          >{term}</li>
        ))}
      </ul>
    </div>
  );
};
