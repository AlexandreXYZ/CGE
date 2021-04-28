function cityName(lat, lng) {
    fetch('https://api.teleport.org/api/locations/' + lat +' %2C%20' + lng + '/', {
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        var name = "No cities found.";

        if (!data.http_status_code) {
            var name = data._embedded["location:nearest-cities"][0]._links["location:nearest-city"].name;
        }
        
        console.log(name);
        // return (name);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}