const DetailView = function (container, object) {
  this.container = container;
  this.object = object;
}

DetailView.prototype.display = function () {
  console.log(this.object);
};

module.exports = DetailView;
