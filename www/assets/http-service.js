export async function getBeers(page) {
  const key = 'c0b90d19385d7dabee991e89c24ea711';
  const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers?key=${key}&p=${page}&styleId=2`;

  const response = await fetch(url);
  return await response.json();
}