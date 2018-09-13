const Munros = require('./models/munros.js');
const ListView = require('./views/list_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const select = document.querySelector('#dropdown');
  const selectView = new SelectView(select);
  selectView.bindEvents();

  const container = document.querySelector('#container');
  const listView = new ListView(container);
  listView.bindEvents();

  const munros = new Munros();
  munros.getData();
  munros.bindEvents();
})
