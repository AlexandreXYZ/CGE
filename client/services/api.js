const url = 'http://localhost:4000';



function postCoordinates(body) {
	fetch(`${url}/coordinates`, {
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

async function getCoordinates(){
		const response = await fetch(`${url}/coordinates?num=3`);
		const data = response.json();
		return data;

}

setInterval(function(){
  elevationAngle(data)
}, 3000)
//300000 = 5min