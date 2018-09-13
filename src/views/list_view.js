const PubSub = require('../helpers/pub_sub.js');
const DetailView = require('./details_view.js');


const ListView = function (element) {
  this.element = element;
}

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:region-ready', (event) => {
    this.data = event.detail;
    this.element.innerHTML = "";
    this.render();
  })
};

ListView.prototype.render = function () {
  this.data.forEach( (munro) => {
    const  detailView = new DetailView(this.element, munro);
    detailView.display();
  })
};

module.exports = ListView;
