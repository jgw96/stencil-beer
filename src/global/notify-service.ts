import { urlB64ToUint8Array } from './utils';

// declare const firebase: any;


// const publicServerKey = urlB64ToUint8Array('BLOkNHCQnqccXgOk2EFVbXsTQ_1U4ZIQHJogWCMwlf_XjpUmR4pnimTdUwMwpzHsx01Y9dxMKwCPWHQnMjXypL0');

export async function notify() {
  const perm = await requestPerm();
  console.log('web push sub', perm);

  return perm;
}

function getServerKey() {
  return fetch('https://ionic-beer-push-server.herokuapp.com/publickey').then((res) => {
    return res.json()
  })
}

function requestPerm() {
  // get our service worker registration
  navigator.serviceWorker.getRegistration().then((reg: ServiceWorkerRegistration) => {

    // get push subscription
    reg.pushManager.getSubscription().then((sub: PushSubscription) => {

      // if there is no subscription that means
      // the user has not subscribed before
      if (sub === null) {
        getServerKey().then((data) => {
          console.log(data);

          const serverKey = urlB64ToUint8Array(data);
          console.log(serverKey);

          return reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: serverKey
          })
            .then((sub: PushSubscription) => {
              // our user is now subscribed
              // lets reflect this in our UI
              console.log('web push subscription: ', sub);
              sendTokenToServer(sub);
            })
        })
      }
    })
  })
}

function sendTokenToServer(token) {
  console.log(token);
  fetch('https://ionic-beer-push-server.herokuapp.com/notifysub', {
    method: 'POST',
    body: JSON.stringify({ sub: token }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    return res.json()
  }).then((data) => {
    console.log(data);
  })
}