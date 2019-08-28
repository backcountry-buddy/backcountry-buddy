import fetch from 'node-fetch';

export default class BackCountryRequest {
  static baseUrl = 'https://givemeenvar';

  static login(email, password) {
    // do some login stuff from db.
  }

  static signup(email, password) {
    // salt and encrypt password
    // store email and password
    // create profile
  }
}
