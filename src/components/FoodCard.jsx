import "../components/css/FoodCard.css";

export default function FoodCard({ image, name, country, article }) {
  return (
    <>
      <div className="card-content">
        <img src={image} />
        <div className="food-text">
          <h2>{name}</h2>
          <h3>{country}</h3>
          <a href={article}>
            <h4>More Info</h4>
          </a>
        </div>
      </div>
    </>
  );
}
