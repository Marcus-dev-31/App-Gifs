import type { Gif } from "../../mock-data/gifs.mock"

interface GifListProps {
    gifs: Gif[]
}



export const GifList = ({ gifs }: GifListProps) => {
  return (
    <div className="gisf-container">
        {gifs.map((g) => (
          <div key={g.id} className="gif-card">
            <img src={g.url} alt={g.title} />
            <h3>{g.title}</h3>
            <p>
              {g.width}x{g.height} (1.5mb)
            </p>
          </div>
        ))}
      </div>
  )
}
