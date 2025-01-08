export default function Card({ title,genre, image, description }) {
  return (
    <a href="/details/{id}">
      <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>

        <div className="genre">
        {genre.map((genre) => (
          <a href="/genre/{genre}"  key={genre}>{genre}</a>
        ))}
        </div>

    </div>
    </a>
  );
}