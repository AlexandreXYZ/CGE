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

    // /* ------- */ let cge = new Calibrador({lat: 3.633056,lng: 6.543333}, {hour: 15,min: 0}, {day: 29,month: 10,year: 2018}); //4debug
    // /*solarsena*/ let cge = new Calibrador({lat: 32.22,lng: -110.9756}, {hour: 14,min: 00}, {day: 02,month: 03,year: 2020}); //4debug
    let cge = new Calibrador(coord, time, date);
    // console.log(coord, time, date);

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