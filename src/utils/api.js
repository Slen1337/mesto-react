export class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    _getResponseData(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
  
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
      }).then(this._getResponseData);
    }
  
    getUserData() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
      }).then(this._getResponseData);
    }
  
    postNewCard(data) {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        }),
      }).then(this._getResponseData);
    }
  
    setUserData(data) {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      }).then(this._getResponseData);
    }
  
    setUserAvatarData(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          avatar: data.link,
        }),
      }).then(this._getResponseData);
    }
  
    deleteCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        headers: this._headers,
        method: "DELETE",
      }).then(this._getResponseData);
    }
  
    changeLikeStatus(cardId, like) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: like ? "PUT" : "DELETE",
        headers: this._headers,
      }).then(this._getResponseData);
    }
  }
  
  export const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-16",
    headers: {
      authorization: "25dd548a-76f5-431f-bb9b-9c75ffdf9efb",
      "Content-Type": "application/json",
    },
  });