import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props, enabled) {
  const avatarRef = React.useRef("");
  const [isValid, setIsValid] = React.useState(false);
  const [validationMessage, setValidationMessage] = React.useState("");
  const [disabled, setDisabled] = React.useState(enabled);

  function handleChange(event) {
    if (!event.target.validity.valid) {
      setIsValid(true);
      setValidationMessage(event.target.validationMessage);
      setDisabled(enabled);
    } else {
      setIsValid(false);
      setValidationMessage("");
      setDisabled(!enabled);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateAvatar({
      link: avatarRef.current.value,
    });
  }

  React.useEffect(() => {
    avatarRef.current.value = "";
    setValidationMessage("");
    setDisabled(enabled);
  }, [props.isOpen]);

  return (
    <PopupWithForm
      title="Редактировать Аватар"
      name="avatar"
      button="Сохранить"
      isOpen={props.isOpen}
      onClick={props.onClick}
      isDisabled={disabled}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          ref={avatarRef}
          type="url"
          onChange={handleChange}
          id="link-input"
          className="popup__item"
          name="link"
          placeholder="Ссылка на изображение"
          required
        />
        <span
          id="link-input-error"
          className={isValid ? "popup__item-error" : ""}
        >
          {validationMessage}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
