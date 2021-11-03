function enter() {
    /*---puc---*/ let a = new Calibrador({lat: 3.633056,lng: 6.543333}, {hora: 15,min: 0}, {dia: 29,mes: 10,ano: 2018});
    // /*solarsena*/ let a = new Calibrador({lat: 32.22,lng: -110.9756}, {hora: 14,min: 00,seg: 00}, {dia: 02,mes: 03,ano: 2020});

    a.Sunrise()
    a.Sunset()
    a.Altura_Sol()
    a.Azimute_Sol()
    a.CidadeNome()
    a.CoordenadasCartesianas()
}