import "./Card.css";
import { useState } from "react";

export function Card(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavoriteClick() {
    if (isFavorite === false) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }

  return (
    <>
      <div className="people">
        <img src={props.profile} alt="profile-picture" />
        <h2>{props.name}</h2>
        <h3>{props.job}</h3>
        <button className="favorite" onClick={handleFavoriteClick}>
          <img
            className="fav-img"
            src={isFavorite ? "favorite_FILL1.png" : "favorite_FILL0.png"}
            alt={isFavorite ? "favorite person" : "not a favorite person"}
          />
        </button>
      </div>
    </>
  );
}
