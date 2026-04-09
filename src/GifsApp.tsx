import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {

  const [PreviousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handleTermClick = (term: string) => {
    console.log(term)
  }

  const handleSearch = (query: string) => {
    console.log(query)
  }

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      <SearchBar 
        placeholder="Busca lo que quieras" 
        onQuery={handleSearch}  
      />

      <PreviousSearches 
        searches={PreviousTerms} 
        onclick={handleTermClick}
        />

      <GifList gifs={mockGifs} />
    </>
  );
};
