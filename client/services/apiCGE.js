const urlCGE = 'http://localhost:4000';

async function postCoordinates({sequentialDay, latitude}) {
	try {
		await fetch(`${urlCGE}/coordinates`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'sequentialDay': sequentialDay,
				'latitude': latitude,
			})
		})
	} catch(err) {
		console.error(`Error: ${err}`)
	}
}

async function getCoordinates() {
	try {
		const response = await fetch(`${urlCGE}/coordinates?num=18`);
		const data = response.json();

		return data;
	} catch(err) {
		console.error(`Error: ${err}`)
	}
}

async function PostCoordinatesWithTime(date = new Date){
	try {
		const response = await fetch(`${urlCGE}/coordinates/time`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"dateISO": date
			})
		});
		const data = response.json();

		return data;
	} catch(err) {
		console.error(`Error: ${err}`)
	}
}