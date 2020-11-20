import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((like) => like._id === currentUser._id);
  const cardDeleteButtonClassName = `button__delete button transition ${
    isOwn ? "button_visible" : ""
  }`;
  const cardLikeButtonClassName = `button__like button transition ${
    isLiked ? "button__like_active" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }
  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <button
        type="button"
        aria-label="удалить карточку"
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <div className="card__info">
        <h3 className="card__title">{props.card.name}</h3>
        <div className="card__like">
          <button
            type="button"
            aria-label="лайкнуть карточку"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <div className="card__like-counter">{props.card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
