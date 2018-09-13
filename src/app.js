const Munros = require('./models/munros.js');
const ListView = require('./views/list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const munros = new Munros();
  munros.getData();

  const container = document.querySelector('#container');
  const listView = new ListView(container);
  listView.bindEvents();

})
