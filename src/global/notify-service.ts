import { urlB64ToUint8Array } from './utils';

declare const firebase: any;


const publicServerKey = urlB64ToUint8Array('BLOkNHCQnqccXgOk2EFVbXsTQ_1U4ZIQHJogWCMwlf_XjpUmR4pnimTdUwMwpzHsx01Y9dxMKwCPWHQnMjXypL0');

export function notify() {
  requestPerm();
}

function requestPerm() {
  // get our service worker registration
  navigator.serviceWorker.getRegistration().then((reg: ServiceWorkerRegistration) => {

    // get push subscription
    reg.pushManager.getSubscription().then((sub: PushSubscription) => {

      // if there is no subscription that means
      // the user has not subscribed before
      if (sub === null) {
        // user is not subscribed
        reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: publicServerKey
        })
          .then((sub: PushSubscription) => {
            // our user is now subscribed
            // lets reflect this in our UI
            console.log('web push subscription: ', sub);
            sendTokenToServer(sub);
          })
      }
    })
  })
}

function sendTokenToServer(token) {
  console.log(token);
}