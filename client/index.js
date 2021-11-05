function getValues() {
    let coord = {
        lat: parseFloat(parseFloat(document.getElementById("latitude").value).toFixed(8)),
        lng: parseFloat(parseFloat(document.getElementById("longitude").value).toFixed(8))
    };

    let date = {
        day: parseInt((document.getElementById("date").value).split("-")[2]),
        month: parseInt((document.getElementById("date").value).split("-")[1]),
        year: parseInt((document.getElementById("date").value).split("-")[0])
    };

    let time = {
        hour: parseInt((document.getElementById("time").value).split(":")[0]),
        min: parseInt((document.getElementById("time").value).split(":")[1])
    };

    let cge = new Calibrator(coord, time, date);

    if (!time.hour || !date.day) {
        alert("Missing parameters!");
    } else {
        if (coord.lat && coord.lng) {
            cge.Sunrise()
            cge.Sunset()
            cge.Elevation_Angle()
            cge.Azimuth_Angle()
            cge.City_Name()
        } else {
            cge.City_Coord()
        }
    }

    cge.Cartesian_Coordinates()
}