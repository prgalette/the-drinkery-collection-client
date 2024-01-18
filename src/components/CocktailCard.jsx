const CocktailCard = ({ cocktail }) => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="card"
        style={{
          width: "26rem",
          backgroundColor: "rgb(108, 117, 125)",
          color: "white",
          margin: "20px"
        }}
      >
        <img src={cocktail.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{cocktail.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
