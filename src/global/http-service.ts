import { set, get } from 'idb-keyval';

const fetchBeers = async (page: number, style: number = 1) => {
  const key = '0ebd6396901832ee0176a008410ef5d9';
  const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers?key=${key}&p=${page}&styleId=${style}`;

  // return cached data first
  const cachedData = await get('cachedBeerData');
  if (cachedData) {
    return cachedData;
  }

  const response = await fetch(url);
  const data = await response.json();
  await set('cachedBeerData', data.data);

  return data.data;
}

const fetchStyles = () => {
  const key = '0ebd6396901832ee0176a008410ef5d9';
  const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/styles?key=${key}`;

  return fetch(url).then((res) => {
    return res.json()
  }).then((data) => {
    return data.data;
  })
}

const doSearch = (searchTerm: string) => {
  const key = '0ebd6396901832ee0176a008410ef5d9';
  const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?key=${key}&q=${searchTerm}&type=beer`;

  return fetch(url).then((res) => {
    return res.json()
  }).then((data) => {
    return data.data;
  })
}

const getBeerDetail = (id: string) => {
  const key = '0ebd6396901832ee0176a008410ef5d9';
  const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/${id}?key=${key}`;

  return fetch(url).then((res) => {
    return res.json()
  }).then((data) => {
    return data.data;
  })
}

export { fetchBeers, doSearch, getBeerDetail, fetchStyles };