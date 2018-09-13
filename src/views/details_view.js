const DetailView = function (container, object) {
  this.container = container;
  this.object = object;
}

DetailView.prototype.display = function () {
    const name = document.createElement('h3');
    name.textContent = `${this.object.name}`;
    this.container.appendChild(name);

    const list = document.createElement('ul');
    this.container.appendChild(list);

    const height = document.createElement('li')
    height.textContent = `${this.object.height}m`;
    list.appendChild(height);

    const meaning = document.createElement('li')
    meaning.textContent = `${this.object.meaning}`;
    list.appendChild(meaning);

    const region = document.createElement('li')
    region.textContent = `${this.object.region}`;
    list.appendChild(region);

};

module.exports = DetailView;
