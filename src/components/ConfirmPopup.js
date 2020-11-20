import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmPopup(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onDelete(props.card);
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="delete"
      button="Да"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}

export default ConfirmPopup;
