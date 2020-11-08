import React from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main(props) {
  const [userAvatar, patchAvatar] = React.useState();
  const [userName, patchUserName] = React.useState();
  const [userDescription, patchUserDescription] = React.useState();
  const [cards, patchCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([result, data]) => {
        patchUserName(result.name);
        patchUserDescription(result.about);
        patchAvatar(result.avatar);
        patchCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__image" src={userAvatar} alt="Фото профиля" />
          <div className="profile__cover">
            <button
              onClick={props.onEditAvatar}
              type="button"
              className="button profile__button-avatar"
              aria-label="изменить фотографию"
            ></button>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={props.onEditProfile}
            type="button"
            aria-label="изменить информацию"
            className="button profile__button-edit transition"
          ></button>
          <p className="profile__about">{userDescription}</p>
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
          {cards.map((card) => (
            <Card
              {...card}
              onCardClick={props.onCardClick}
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