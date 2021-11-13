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
			"latitude": body.latitude,
		})
	})
}

async function getCoordinates(){
		const response = await fetch(`${url}/coordinates?num=3`);
		const data = response.json();
		return data;

}
