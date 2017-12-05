import { Beer } from './interfaces';

export function saveBeer(value: Beer) {
  const list = localStorage.getItem('beers');

  if (list === null) {
    localStorage.setItem('beers', JSON.stringify([value]))
  } else {
    const parsedList = JSON.parse(list);
    parsedList.push(value);

    localStorage.setItem('beers', JSON.stringify(parsedList));
  }
}

export function getSavedBeers(): Array<Beer> {
  if (localStorage.getItem('beers') !== null) {
    return JSON.parse(localStorage.getItem('beers'));
  } else {
    return null;
  }
}