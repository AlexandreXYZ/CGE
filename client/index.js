function enter() {
    let coord = {
        lat: parseFloat(parseFloat(document.getElementById("latitude").value).toFixed(8)),
        lng: parseFloat(parseFloat(document.getElementById("longitude").value).toFixed(8))
    };

    let data = {
        dia: parseInt((document.getElementById("date").value).split("-")[2]),
        mes: parseInt((document.getElementById("date").value).split("-")[1]),
        ano: parseInt((document.getElementById("date").value).split("-")[0])
    };

    let horario = {
        hora: parseInt((document.getElementById("time").value).split(":")[0]),
        min: parseInt((document.getElementById("time").value).split(":")[1]),
    };

    // let a = new Calibrador({lat: 3.633056,lng: 6.543333}, {hora: 15,min: 0,seg: 0}, {dia: 29,mes: 10,ano: 2018}); //4debug
    // /*solarsena*/ let a = new Calibrador({lat: 32.22,lng: -110.9756}, {hora: 14,min: 00,seg: 00}, {dia: 02,mes: 03,ano: 2020}); //4debug
    let a = new Calibrador(coord, horario, data);
    // console.log(coord, horario, data);

    if (!horario.hora || !data.dia) {
        alert("Missing parameters!")
    } else {
        if (coord.lat && coord.lng) {
            a.Sunrise()
            a.Sunset()
            a.Altura_Sol()
            a.Azimute_Sol()
            a.CidadeNome()
        } else {
            a.CidadeCoord()
        }
    }

    a.CoordenadasCartesianas()
}