const urlTeleport = 'https://api.teleport.org/api';

async function getCityName(lat, lng) {
	try {
		const responseCity = await fetch(`${urlTeleport}/locations/${lat}, ${lng}`, {
				mode: 'cors'
			})
		const { _embedded } = await responseCity.json();

		if (_embedded['location:nearest-cities']) {
			const cityProps = _embedded['location:nearest-cities'][0]._links['location:nearest-city'];
			const cityName = cityProps.name;
			const cityID = cityProps.href.split(':')[2];

			try {
				const responseCountry = await fetch(`${urlTeleport}/cities/geonameid:${cityID}`, {
						mode: 'cors'
					})
				const { _links } = await responseCountry.json();
				const country = _links['city:country'].href.slice(-3, -1);

				document.getElementById('city').value = `${cityName}, ${country}`;
				getCityCoords(document.getElementById("city").value, true)
			} catch(err) {
				console.error(`Error in get country name: ${err}`)
			}
		} else {
			document.getElementById('city').value = 'No cities found';
		}
	} catch(err) {
		console.error(`Error in get city name: ${err}`);
    }
}

async function getCityCoords(cityName, redirect = false) {
	try {
    	const responseCityID = await fetch(`${urlTeleport}/cities/?search=${cityName}`, {
            	mode: 'cors'
	        })
		const { _embedded } = await responseCityID.json();
		var cityID = _embedded["city:search-results"][0]._links["city:item"].href.split(':')[2];

		try {
			const responseCoords = await fetch(`${urlTeleport}/cities/geonameid:${cityID}`, {
					mode: 'cors'
				})
			const { location } = await responseCoords.json();

			const coords = {
				lat: location.latlon.latitude,
				lng: location.latlon.longitude
			}

			document.getElementById("latitude").value = coords.lat;
			document.getElementById("longitude").value = coords.lng;

			!redirect? document.getElementById("submit").click(): 0
		} catch(err) {
			console.error(`Error in get city coordinates: ${err}`)
		}
	} catch(err) {
        console.error(`Error in get city id: ${err}`);
    }
}