function cityName(lat, lng) {
    fetch('https://api.teleport.org/api/locations/' + lat + '%2C%20' + lng + '/', {
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            if (data._embedded["location:nearest-cities"] != null) {
                document.getElementById("cidade").innerHTML = data._embedded["location:nearest-cities"][0]._links["location:nearest-city"].name;
            } else {
                document.getElementById("cidade").innerHTML = "No cities found";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}