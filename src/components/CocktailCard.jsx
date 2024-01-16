const CocktailCard = ({ cocktail }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "26rem" }}>
        <img src={cocktail.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{cocktail.title}</h3>
          <p className="card-text">{cocktail.tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
