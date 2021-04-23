class SunRiseSet {
    constructor(coord, date) {
        this.day_year = diaAno(date.dia, date.mes, date.ano);
		this.latitude = coord.lat;
		this.longitude = coord.lng;
    }

    // Cálculos do nascer do sol
    Sunrise() {
        // Calcula a duração do dia
        var T = duracaoDia(this.latitude, this.day_year);
        var schedule_sunrise = 12 - (T / 2); // Horas de sol (número completo)

        var sunrise = new Object();
        sunrise.hour = Math.trunc(schedule_sunrise);
        sunrise.min = Math.abs((schedule_sunrise - sunrise.hour) * 60);
        sunrise.seg = Math.abs((sunrise.min - Math.trunc(sunrise.min)) * 60);

        // Saída (output)
        var schedule_adjusted = corret_lati(this.getLongitude(), sunrise);
        document.getElementById("nascer").innerHTML = (schedule_adjusted.hour + "h " + schedule_adjusted.min + "min " + schedule_adjusted.seg + "s");
    }

    // Cálculos do pôr do sol
    Sunset() {
        // Calcula a duração do dia
        var T = duracaoDia(this.latitude, this.day_year);
        var schedule_sunset = 12 + (T / 2); // Número completo

        var sunset = new Object();
        sunset.hour = Math.trunc(schedule_sunset);
        sunset.min = Math.abs((schedule_sunset - sunset.hour) * 60);
        sunset.seg = Math.abs((sunset.min - Math.trunc(sunset.min)) * 60);

        // Saída (output)
        var schedule_adjusted = corret_lati(this.getLongitude(), sunset);
        document.getElementById("por").innerHTML = (schedule_adjusted.hour + "h " + schedule_adjusted.min + "min " + schedule_adjusted.seg + "s");
    }

    // Métodos Getters e Setters

    // Longitude
    getLongitude() {
        return this.longitude;
    }
    setLongitude(x) {
        this.longitude = x;
    }

    // Latitude
    getLatitude() {
        return this.latitude;
    }
    setLatitude(x) {
        this.latitude = x;
    }

    // Dia_ano
    getDia_ano() {
        return this.day_year;
    }
    setDia_ano(x) {
        this.day_year = x;
    }
}