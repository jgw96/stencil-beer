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

export function getUserBeers(email) {
  return db.collection('savedBeers').where('author', '==', email).get();
}

export function getUsers() {
  return db.collection('users').get();
}

export async function getCertainUser(name) {
  console.log(name);
  const fullUser = [];
  let userEmail = null;

  const doc = await db.collection('users').where('name', '==', name).get();

  await doc.forEach((user) => {
    console.log(user);
    fullUser.push(user.data());
    userEmail = user.data().email;
  })

  const tempBeers = [];

  const beerDoc = await getUserBeers(userEmail)

  await beerDoc.forEach((doc) => {
    tempBeers.push(doc.data().beer);
  })

  fullUser.push(tempBeers);

  console.log(fullUser);
  return fullUser;
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