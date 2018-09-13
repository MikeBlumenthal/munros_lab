const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-ready', (event) => {
    const allMunros = event.detail;
    this.populate(allMunros);
  })
  this.element.addEventListener('change', (event) => {
    const selectedIndex =  event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  })
}

SelectView.prototype.populate = function (data) {
  data.forEach((region, index) => {
    const option = document.createElement('option');
    option.textContent = region;
    option.value = index;
    this.element.appendChild(option);
  });

};

module.exports = SelectView;
