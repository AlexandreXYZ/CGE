class Calibrador {
	constructor(coord, time, date) {
		this.latitude = toRadian(coord.lat);
		this.longitude = toRadian(coord.lng);
		this.hourAngle = hourAngle(time.hour, time.min);
		this.sequentialDay = sequentialDay(date.day, date.month, date.year);
	}

	Sunrise() {
		// mudar nome da variavel
		var T = dayLength(toDegree(this.latitude), this.sequentialDay);
		var decimalSunrise = 12 - (toDegree(T) / 2); // Horario formato decimal

		var sunrise = new Object();
		sunrise.hour = Math.trunc(decimalSunrise);
		sunrise.min = Math.abs((decimalSunrise - sunrise.hour) * 60);
		sunrise.seg = Math.abs((sunrise.min - Math.trunc(sunrise.min)) * 60);

		// Saída (output)
		var scheduleAdjusted = fixLong(toDegree(this.longitude), sunrise);
		document.getElementById("sunrise").innerHTML = (scheduleAdjusted.hour + "h " + scheduleAdjusted.min + "min " + scheduleAdjusted.seg + "s");
	}

	Sunset() {
		// mudar nome da variavel
		var T = dayLength(toDegree(this.latitude), this.sequentialDay);
		var decimalSunset = 12 + (toDegree(T) / 2); // Horario formato decimal

		var sunset = new Object();
		sunset.hour = Math.trunc(decimalSunset);
		sunset.min = Math.abs((decimalSunset - sunset.hour) * 60);
		sunset.seg = Math.abs((sunset.min - Math.trunc(sunset.min)) * 60);

		// Saída (output)
		var scheduleAdjusted = fixLong(toDegree(this.longitude), sunset);
		document.getElementById("sunset").innerHTML = (scheduleAdjusted.hour + "h " + scheduleAdjusted.min + "min " + scheduleAdjusted.seg + "s");
	}

	// Equação 1
	Elevation_Angle() {
		// mudar nome da variavel
		const D = declination(this.sequentialDay);

		// a = arcsen [cos (h) cos (δ) cos (φ) + sen (δ) sin (φ)]
		const elevationAngle = Math.asin(Math.cos(this.hourAngle) * Math.cos(D) * Math.cos(this.latitude) + Math.sin(D) * Math.sin(this.latitude));
		this.elevationAngle = elevationAngle;

		// OUTPUT
		document.getElementById("elevation").innerHTML = toDegree(elevationAngle).toFixed(2);
	}

	// Equação 2
	Azimuth_Angle() {
		// mudar nome da variavel
		const D = declination(this.sequentialDay);

		// A = arccos [(sen(δ) − sen(a) * sen(φ)) / (cos(a) * cos(φ))]
		var azimuthAngle = (Math.sin(D) - Math.sin(this.elevationAngle) * Math.sin(this.latitude)) / (Math.cos(this.elevationAngle) * Math.cos(this.latitude));

		if (azimuthAngle > 1 || azimuthAngle < -1) {
			// Checa pra ver se o JS nao colocou número a mais (sim, isso acontece)
			var azimuthAngle = Math.trunc(azimuthAngle);
		}

		var azimuthAngle = Math.acos(azimuthAngle);

		if (this.hourAngle > 0) {
			// Se for depois do meio dia, subtrai de o azimute de 360
			var azimuthAngle = toRadian(360) - azimuthAngle;
		}

		this.azimuthAngle = azimuthAngle;
		document.getElementById("azimuth").innerHTML = toDegree(azimuthAngle).toFixed(2);
	}

	// Nome da cidade
	City_Name() {
		cityName(toDegree(this.latitude), toDegree(this.longitude))
	}

	// Coordenada da cidade
	City_Coord() {
		cityCoords(document.getElementById("city").value)
	}

	Cartesian_Coordinates() {
		if (this.elevationAngle && this.azimuthAngle) {
			const coordsGnomonVirtual = toCartesian(this.elevationAngle, this.azimuthAngle);
			document.getElementById("coordX").innerHTML = coordsGnomonVirtual.x.toFixed(3);
			document.getElementById("coordY").innerHTML = coordsGnomonVirtual.y.toFixed(3);
			document.getElementById("coordZ").innerHTML = coordsGnomonVirtual.z.toFixed(3);

			const coordsDif = dadosSimulados(coordsGnomonVirtual)
			console.log("Difference:");
			console.log("X:", coordsDif.x);
			console.log("Y:", coordsDif.y);
			console.log("Z:", coordsDif.z);
		}
	}
}