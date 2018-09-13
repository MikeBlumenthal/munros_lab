const PubSub = require('../helpers/pub_sub.js');


const ListView = function (element) {
  this.element = element;
}

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-ready', (event) => {
  console.log(event.detail);
  })
};

module.exports = ListView;
