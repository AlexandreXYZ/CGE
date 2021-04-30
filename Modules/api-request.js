function cityName(lat, lng) {
    fetch('https://api.teleport.org/api/locations/' + lat + '%2C%20' + lng + '/', {
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            if (data._embedded["location:nearest-cities"] != null) {
                var cityProps = data._embedded["location:nearest-cities"][0]._links["location:nearest-city"];
                var city = cityProps.name;
                var cityID = cityProps.href.slice(-8, -1);

                fetch('https://api.teleport.org/api/cities/geonameid:' + cityID + '/', {
                        mode: 'cors'
                    })
                    .then(response => response.json())
                    .then(data => {
                        var country = data._links["city:country"].href.slice(-3, -1);
                        document.getElementById("cidade").innerHTML = city + ', ' + country
                    });
            } else {
                document.getElementById("cidade").innerHTML = "No cities found";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}