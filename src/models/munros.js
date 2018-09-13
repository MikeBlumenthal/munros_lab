const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.data = null;
  this.regions = null;
}

Munros.prototype.getData = function () {
  const url = `https://munroapi.herokuapp.com/api/munros`;
  const request = new RequestHelper(url);
  request.get()
  .then((data) => {
    this.data = data;
    this.fixHand();
    const regions = this.getRegions();
    this.regions = regions;
    PubSub.publish('Munros:data-ready', regions);
  })
};

Munros.prototype.bindEvents = function() {
  PubSub.subscribe('SelectView:change', (event) => {
    this.sendData(event.detail);
  });
};

// Loch Tay to Rannoch Moor
//

Munros.prototype.fixHand = function() {
  this.data.find((element) => {
    return element.region === " hand";
  }).region = "Loch Tay to Rannoch Moor";
}

Munros.prototype.getRegions = function() {
  return this.data.map(munro => munro.region)
    .filter((region, index, regions) => regions.indexOf(region) === index);
}

Munros.prototype.sendData = function(index) {
  const regionData = this.data.filter((munro) => {
    const region = this.regions[index];
    return munro.region === region;
  })
  PubSub.publish('Munros:region-ready', regionData);
}


module.exports = Munros;
