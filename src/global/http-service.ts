import greenlet from 'greenlet';

const fetchBeers = greenlet(
  function (page: number, style: number) {
    const key = 'c0b90d19385d7dabee991e89c24ea711';
    const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers?key=${key}&p=${page}&styleId=${style}`;

    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      return data.data;
    })
  }
);

const fetchStyles = greenlet(
  function () {
    const key = 'c0b90d19385d7dabee991e89c24ea711';
    const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/styles?key=${key}`;

    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      return data.data;
    })
  }
);

const doSearch = greenlet(
  function(searchTerm: string) {
    const key = 'c0b90d19385d7dabee991e89c24ea711';
    const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?key=${key}&q=${searchTerm}&type=beer`;

    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      return data.data;
    })
  }
);

const getBeerDetail = greenlet(
  function(id: string) {
    const key = 'c0b90d19385d7dabee991e89c24ea711';
    const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/${id}?key=${key}`;

    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      return data.data;
    })
  }
)

export {fetchBeers, doSearch, getBeerDetail, fetchStyles};