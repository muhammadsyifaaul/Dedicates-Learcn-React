export default function Card({ title,genre, image, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>

        <div className="genre">
        {genre.map((genre) => (
          <a href=""  key={genre}>{genre}</a>
        ))}
        </div>

    </div>
  );
}