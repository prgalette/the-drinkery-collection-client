const CocktailCard = ({ cocktail }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "26rem" }}>
        <img src={cocktail.strDrinkThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{cocktail.strDrink}</h3>
          <p className="card-text">{cocktail.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
