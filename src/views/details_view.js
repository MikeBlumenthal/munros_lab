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
    height.textContent = `${this.object.height}`;
    list.appendChild(height);

    const meaning = document.createElement('li')
    meaning.textContent = `${this.object.meaning}`;
    list.appendChild(meaning);

};

module.exports = DetailView;
