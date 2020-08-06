const axios = require("axios");

var BASE_URL = "https://yokoso-api.ohori.me/api/";

class Yokoso {
  constructor(options) {
    this.token = options.token;
    this.instance = axios.create({
      baseURL: options.allowNSFW ? BASE_URL : (BASE_URL += "sfw/"),
      method: "GET",
    });
    if (options.token) {
      this.instance.defaults.headers["Authorization"] = this.token;
    }
  }
  get(endpoint, params) {
    return this.instance(`${endpoint}`, { params: params })
      .then(function (res) {
        return res.data;
      })
      .catch((err) => console.error(err));
  }
}

module.exports = Yokoso;
