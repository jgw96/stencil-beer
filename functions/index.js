const visionApi = require('@google-cloud/vision')();
const functions = require('firebase-functions');
const fetch = require('node-fetch');
const cors = require('cors')({origin: true});

const fs = require('fs');

const placesApiRoot = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const geocodeApiRoot = 'https://maps.googleapis.com/maps/api/geocode/json';

const apiKey = 'AIzaSyCb9lhLYxUnRjSp1oIGl6aAsXLODc3o-f4';

exports.googlePlaces = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const data = JSON.parse(req.body);

    fetch(`${placesApiRoot}?key=${apiKey}&location=${data.lat},${data.long}&radius=9000&type=bar`).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data);
      res.send(data.results);
    })

  });
});

exports.googleGeocode = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const data = JSON.parse(req.body);

    fetch(`${geocodeApiRoot}?address=${data.address}&key=${apiKey}`).then((response) => {
      return response.json()
    }).then((data) => {
      res.send(data);
    })
    
  })
});

function decodeBase64Image(dataString) {
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/), response = {};

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  console.log(matches[2]);
  response.data = new Buffer(matches[2], 'base64');

  return response;
};

exports.vision = functions.https.onRequest((request, response) => {
  const data = JSON.parse(request.body);

  const image = decodeBase64Image(data.image);
  console.log(image);

  fs.writeFile('/tmp/image.jpeg', image.data, (err) => {
    if (err) {
      console.error(err);
    } else {
      visionApi.detectText('/tmp/image.jpeg', (err, images, apiResponse) => {
        if (err) {
          console.error(err);
        } else {
          console.log(images);
          console.log(apiResponse.webDetection);
    
          response.send(images);
        }
      })
    }
  })
});