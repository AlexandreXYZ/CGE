class SunRiseSet {
    constructor(coord, date) {
        this.day_year = diaAno(date.dia, date.mes, date.ano);
		this.latitude = coord.lat;
		this.longitude = coord.lng;
    }

    Sunrise() {
        var T = duracaoDia(this.latitude, this.day_year); //day_length()
        var decimal_sunrise = 12 - (toDegree(T) / 2); // Horario formato decimal
        
        var sunrise = new Object();
        sunrise.hour = Math.trunc(decimal_sunrise);
        sunrise.min = Math.abs((decimal_sunrise - sunrise.hour) * 60);
        sunrise.seg = Math.abs((sunrise.min - Math.trunc(sunrise.min)) * 60);
        
        // Saída (output)
        var schedule_adjusted = corret_long(this.longitude, sunrise);
        document.getElementById("nascer").innerHTML = (schedule_adjusted.hour + "h " + schedule_adjusted.min + "min " + schedule_adjusted.seg + "s");
    }

    Sunset() {
        var T = duracaoDia(this.latitude, this.day_year); //day_length()
        var decimal_sunset = 12 + (toDegree(T) / 2); // Horario formato decimal

        var sunset = new Object();
        sunset.hour = Math.trunc(decimal_sunset);
        sunset.min = Math.abs((decimal_sunset - sunset.hour) * 60);
        sunset.seg = Math.abs((sunset.min - Math.trunc(sunset.min)) * 60);

        // Saída (output)
        var schedule_adjusted = corret_long(this.longitude, sunset);
        document.getElementById("por").innerHTML = (schedule_adjusted.hour + "h " + schedule_adjusted.min + "min " + schedule_adjusted.seg + "s");
    }

	// Nome da cidade
	Cidade() {
		cityName(this.latitude, this.longitude);
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