import { Beer } from './interfaces';

declare const firebase: any;

const db = firebase.firestore();
const user = firebase.auth().currentUser;

export function saveBeer(value: Beer) {
  db.collection('savedBeers').add({
    author: user.email,
    beer: value
  });
}

export function getSavedBeers() {
  return db.collection('savedBeers').where('author', '==', user.email).get();
}

export async function deleteBeer(passedBeer: Beer) {
  const doc = await db.collection('savedBeers')
    .where('beer.name', '==', passedBeer.name)
    .where('author', '==', user.email)
    .get();

  doc.forEach((beer) => {
    console.log(beer);
    console.log(beer.data());
    beer.ref.delete().then(() => {
      console.log('deleted');
    })
  })
}