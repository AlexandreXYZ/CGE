function cityName(lat, lng) {
    fetch('https://api.teleport.org/api/locations/' + lat + '%2C%20' + lng, {
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            if (data._embedded["location:nearest-cities"] != null) {
                var cityProps = data._embedded["location:nearest-cities"][0]._links["location:nearest-city"];
                var city = cityProps.name;
                var cityID = cityProps.href.slice(46, -1);

                fetch('https://api.teleport.org/api/cities/geonameid:' + cityID, {
                        mode: 'cors'
                    })
                    .then(response => response.json())
                    .then(data => {
                        var country = data._links["city:country"].href.slice(-3, -1);
                        document.getElementById("city").value = city + ', ' + country;
                    });
            } else {
                document.getElementById("city").value = "No cities found";
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function cityCoords(cityName) {
    fetch('https://api.teleport.org/api/cities/?search=' + cityName, {
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            var cityID = data._embedded["city:search-results"][0]._links["city:item"].href.slice(-8, -1);

            fetch('https://api.teleport.org/api/cities/geonameid:' + cityID, {
                    mode: 'cors'
                })
                .then(response => response.json())
                .then(data => {
                    var coords = {
                        lat: data.location.latlon.latitude,
                        lng: data.location.latlon.longitude
                    }

                    document.getElementById("latitude").value = coords.lat;
                    document.getElementById("longitude").value = coords.lng;
                    document.getElementById("submit").click();
                });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function elevation() {
    fetch('http://localhost:4000/elevationAngle', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "sequentialDay": 123,
            "time": {
                "hour": 13,
                "min": 12,
            },
            "latitude": 123,
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}