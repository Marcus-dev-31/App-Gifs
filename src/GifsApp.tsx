import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query";

export const GifsApp = () => {

  const [PreviousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handleTermClick = (term: string) => {
    console.log(term)
  }

  const handleSearch = async (query: string) => {
    query = query.trim().toLocaleLowerCase();

    if (query.length === 0) return;

    if (PreviousTerms.includes(query)) return;

    setPreviousTerms([query, ...PreviousTerms].splice(0,7));

    const gifs = await getGifsByQuery(query);

    console.log(gifs);
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
        onClick={handleTermClick}
        />

      <GifList gifs={mockGifs} />
    </>
  );
};
