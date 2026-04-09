interface PreviousSearchesProps {
  searches: string[];
  onClick: (term: string) => void;
}

export const PreviousSearches = ({ searches, onClick }: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas Previas</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li 
            key={term}
            onClick={ () => onClick(term) }
          >{term}</li>
        ))}
      </ul>
    </div>
  );
};
