import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__image"
            src={currentUser.avatar}
            alt="Фото профиля"
          />
          <div className="profile__cover">
            <button
              onClick={props.onEditAvatar}
              type="button"
              className="button profile__button-avatar"
              aria-label="редактировать фотографию пользователя"
            ></button>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            onClick={props.onEditProfile}
            type="button"
            aria-label="редактировать информацию пользователя"
            className="button profile__button-edit transition"
          ></button>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          aria-label="добавить карточку"
          className="button profile__button-add transition"
        ></button>
      </section>
      <section className="places">
        <ul className="places__catalogue">
          {props.cards.map((card) => (
            <Card
              {...card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
              key={card._id}
              card={card}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;