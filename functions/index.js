const functions = require('firebase-functions');

const fetch = require('node-fetch');
const cors = require('cors')({origin: true});


const placesApiRoot = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const geocodeApiRoot = 'https://maps.googleapis.com/maps/api/geocode/json';

const apiKey = 'AIzaSyCb9lhLYxUnRjSp1oIGl6aAsXLODc3o-f4';

exports.googlePlaces = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const data = JSON.parse(req.body);

    fetch(`${placesApiRoot}?key=${apiKey}&location=${data.lat},${data.long}&radius=9000&type=bar`).then((response) => {
      return response.json()
    }).then((data) => {
      res.json(data.results);
    })

  });
});

exports.googleGeocode = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const data = JSON.parse(req.body);

    fetch(`${geocodeApiRoot}?address=${data.address}&key=${apiKey}`).then((response) => {
      return response.json()
    }).then((data) => {
      res.json(data);
    })
    
  })
})