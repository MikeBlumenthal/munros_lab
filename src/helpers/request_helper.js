const RequestHelper = function (url) {
  this.url = url
}

RequestHelper.prototype.get = function () {
  const myPromise = fetch(this.url)
  return myPromise.then(response => response.json() );
};

module.exports = RequestHelper;
