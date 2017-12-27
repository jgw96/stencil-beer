import { Beer } from './interfaces';

declare const firebase: any;

// const firebase.firestore() = firebase.firestore();
//const user = firebase.auth().currentUser;

export function saveBeer(value: Beer) {
  firebase.firestore().collection('savedBeers').add({
    author: firebase.auth().currentUser.email,
    beer: value
  });
}

export function getSavedBeers() {
  return firebase.firestore().collection('savedBeers').where('author', '==', firebase.auth().currentUser.email).get();
}

export function getUserBeers(email) {
  return firebase.firestore().collection('savedBeers').where('author', '==', email).get();
}

export function getUsers() {
  return firebase.firestore().collection('users').get();
}

export function getCertainUser(email) {
  return firebase.firestore().collection('users').where('email', '==', email).get();
}

export async function getFullUser(name) {
  console.log(name);
  const fullUser = [];
  let userEmail = null;

  const doc = await firebase.firestore().collection('users').where('name', '==', name).get();

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
  const doc = await firebase.firestore().collection('savedBeers')
    .where('beer.name', '==', passedBeer)
    .where('author', '==', firebase.auth().currentUser.email)
    .get();

  doc.forEach((beer) => {
    console.log(beer);
    console.log(beer.data());
    beer.ref.delete().then(() => {
      console.log('deleted');
    })
  })
}