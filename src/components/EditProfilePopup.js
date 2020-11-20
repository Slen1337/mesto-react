import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isValid, setIsValid] = React.useState({ name: true, about: true });
  const [validationMessage, setValidationMessage] = React.useState({
    name: "",
    about: "",
  });
  const [inputValue, setInputValue] = React.useState({ name: "", about: "" });
  const isFormValid = Object.values(isValid).every(Boolean);

  React.useEffect(() => {
    setInputValue({
      name: currentUser.name || "",
      about: currentUser.about || "",
    });
  }, [currentUser]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    setIsValid({
      ...isValid,
      [name]: event.target.validity.valid,
    });
    setValidationMessage({
      ...validationMessage,
      [name]: event.target.validationMessage,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateUser({
      name: inputValue.name,
      about: inputValue.about,
    });
  }

  React.useEffect(() => {
    setInputValue({
      name: currentUser.name || "",
      about: currentUser.about || "",
    });
    setValidationMessage({ name: "", about: "" });
  }, [props.isOpen]);

  return (
    <PopupWithForm
      title="Редактировать Профиль"
      name="edit"
      button="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onClick={props.onClick}
      isDisabled={!isFormValid}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          type="text"
          value={inputValue.name}
          onChange={handleInputChange}
          id="name-input"
          className="popup__item"
          name="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
        />
        <span
          id="name-input-error"
          className={!isValid.name ? "popup__item-error" : ""}
        >
          {validationMessage.name}
        </span>
      </label>
      <label className="popup__field">
        <input
          type="text"
          value={inputValue.about}
          onChange={handleInputChange}
          id="about-input"
          className="popup__item"
          name="about"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
        />
        <span
          id="name-input-error"
          className={!isValid.about ? "popup__item-error" : ""}
        >
          {validationMessage.about}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;