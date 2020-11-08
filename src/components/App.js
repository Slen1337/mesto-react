import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard();
  }

  return (
    <>
      <div className="page">
        <Header />
        <div className="container">
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />

          <PopupWithForm
            title="Редактировать профиль"
            name="edit"
            button="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <label className="popup__field">
              <input
                type="text"
                id="name-input"
                className="popup__item popup__item_input-name"
                name="name"
                placeholder="Имя"
                required
                minLength="2"
                maxLength="40"
              />
              <span id="name-input-error" className="popup__item-error"></span>
            </label>
            <label className="popup__field">
              <input
                type="text"
                id="about-input"
                className="popup__item popup__item_input-about"
                name="about"
                placeholder="О себе"
                required
                minLength="2"
                maxLength="200"
              />
              <span id="about-input-error" className="popup__item-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm
            title="Новое место"
            name="create"
            button="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <label className="popup__field">
              <input
                type="text"
                id="title-input"
                className="popup__item popup__item_input-title"
                name="place name"
                placeholder="Название"
                required
                minLength="1"
                maxLength="30"
              />
              <span id="title-input-error" className="popup__item-error"></span>
            </label>
            <label className="popup__field">
              <input
                type="url"
                id="link-input"
                className="popup__item popup__item_input-link"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span id="link-input-error" className="popup__item-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm
            title="Изменить аватар"
            name="avatar"
            button="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <label className="popup__field">
              <input
                type="url"
                id="link-input"
                className="popup__item popup__item_input-avatar"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span id="link-input-error" className="popup__item-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm
            title="Вы уверены?"
            name="confirm"
            button="Да"
            onClose={closeAllPopups}
          ></PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
        </div>
      </div>
    </>
  );
}

export default App;