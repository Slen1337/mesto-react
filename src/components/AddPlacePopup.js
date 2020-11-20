import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [inputValue, setInputValue] = React.useState({ name: "", link: "" });
  const [isValid, setIsValid] = React.useState({ name: false, link: false });
  const [validationMessage, setValidationMessage] = React.useState({
    name: "",
    link: "",
  });
  let isFormValid = Object.values(isValid).every(Boolean);

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
    props.onAddPlace({
      name: inputValue.name,
      link: inputValue.link,
    });
  }

  React.useEffect(() => {
    setInputValue({ name: "", link: "" });
    setValidationMessage({ name: "", link: "" });
    setIsValid({ name: false, link: false });
  }, [props.isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      button="Создать"
      isOpen={props.isOpen}
      onClick={props.onClick}
      onClose={props.onClose}
      isDisabled={!isFormValid}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          type="text"
          value={inputValue.name}
          id="title-input"
          className="popup__item"
          name="name"
          placeholder="Название места"
          required
          minLength="1"
          maxLength="30"
          onChange={handleInputChange}
        />
        <span
          id="title-input-error"
          className={!isValid.name ? "popup__item-error" : ""}
        >
          {validationMessage.name}
        </span>
      </label>
      <label className="popup__field">
        <input
          type="url"
          value={inputValue.link}
          id="link-input"
          className="popup__item"
          name="link"
          placeholder="Ссылка"
          required
          onChange={handleInputChange}
        />
        <span
          id="title-input-error"
          className={!isValid.link ? "popup__item-error" : ""}
        >
          {validationMessage.link}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
