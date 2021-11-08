const url = 'http://localhost:4000';

function elevationAngle(body) {
    fetch(`${url}/elevationAngle`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "sequentialDay": body.sequentialDay,
            "time": {
                "hour": body.time.hour,
                "min": body.time.min,
            },
            "latitude": body.latitude,
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log({
          "ElevationAngle": data,
        });
    })
}

//Input Exemple
const data = {
  "sequentialDay": 123,
  "time": {
    "hour": 12,
    "min": 12,
  },
  "latitude": 123,
}

setInterval(function(){
  elevationAngle(data)
}, 3000)
//300000 = 5min