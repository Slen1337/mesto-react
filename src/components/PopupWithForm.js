import React from "react";

function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_open" : ""
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          aria-label="закрыть окно"
          className="button popup__close transition"
          onClick={props.onClose}
        ></button>
        <h3 className="popup__title">{props.title}</h3>
        <form
          name={props.name}
          onSubmit={props.onSubmit}
          className="popup__form"
          action="#"
          method="POST"
          noValidate
        >
          {props.children}
          <button
            type="submit"
            className={`button popup__button-submit ${
              props.isDisabled ? "popup__button-submit_disabled" : ""
            }`}
            disabled={props.isDisabled}
          >
            {props.onClick ? "Сохранение.." : props.button}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;