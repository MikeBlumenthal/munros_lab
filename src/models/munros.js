const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.data = null;
}

Munros.prototype.getData = function () {
  const url = `https://munroapi.herokuapp.com/api/munros`;
  const request = new RequestHelper(url);
  request.get()
  .then((data) => {
    this.data = data;
    PubSub.publish('Munros:data-ready', this.data);
  })
};

module.exports = Munros;
