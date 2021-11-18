class Calibrator {
	constructor(coord, time, date) {
		this.latitude = toRadian(coord.lat);
		this.longitude = toRadian(coord.lng);
		this.hourAngle = getHourAngle(time.hour, time.min);
		this.sequentialDay = getSequentialDay(date.day, date.month, date.year);
	}

	Sunrise() {
		var dayLength = getDayLength(toDegree(this.latitude), this.sequentialDay);
		var decimalSunrise = 12 - (toDegree(dayLength) / 2); // Horario formato decimal

		var sunrise = new Object();
		sunrise.hour = Math.trunc(decimalSunrise);
		sunrise.min = Math.abs((decimalSunrise - sunrise.hour) * 60);
		sunrise.seg = Math.abs((sunrise.min - Math.trunc(sunrise.min)) * 60);

		// Saída (output)
		var scheduleAdjusted = fixLongitude(toDegree(this.longitude), sunrise);
		document.getElementById('sunrise').innerHTML = (scheduleAdjusted.hour + 'h ' + scheduleAdjusted.min + 'min ' + scheduleAdjusted.seg + 's');
	}

	Sunset() {
		var dayLength = getDayLength(toDegree(this.latitude), this.sequentialDay);
		var decimalSunset = 12 + (toDegree(dayLength) / 2); // Horario formato decimal

		var sunset = new Object();
		sunset.hour = Math.trunc(decimalSunset);
		sunset.min = Math.abs((decimalSunset - sunset.hour) * 60);
		sunset.seg = Math.abs((sunset.min - Math.trunc(sunset.min)) * 60);

		// Saída (output)
		var scheduleAdjusted = fixLongitude(toDegree(this.longitude), sunset);
		document.getElementById('sunset').innerHTML = (scheduleAdjusted.hour + 'h ' + scheduleAdjusted.min + 'min ' + scheduleAdjusted.seg + 's');
	}

	// Equação 1
	Elevation_Angle() {
		const declination = getDeclination(this.sequentialDay);

		// a = arcsen [cos (h) cos (δ) cos (φ) + sen (δ) sin (φ)]
		const elevationAngle = Math.asin(Math.cos(this.hourAngle) * Math.cos(declination) * Math.cos(this.latitude) + Math.sin(declination) * Math.sin(this.latitude));
		this.elevationAngle = elevationAngle;

		// OUTPUT
		document.getElementById('elevation').innerHTML = toDegree(elevationAngle).toFixed(2);
	}

	// Equação 2
	Azimuth_Angle() {
		const declination = getDeclination(this.sequentialDay);

		// A = arccos [(sen(δ) − sen(a) * sen(φ)) / (cos(a) * cos(φ))]
		var azimuthAngle = (Math.sin(declination) - Math.sin(this.elevationAngle) * Math.sin(this.latitude)) / (Math.cos(this.elevationAngle) * Math.cos(this.latitude));

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
		document.getElementById('azimuth').innerHTML = toDegree(azimuthAngle).toFixed(2);
	}

	City_Name() {
		getCityName(toDegree(this.latitude), toDegree(this.longitude))
	}

	City_Coord() {
		getCityCoords(document.getElementById('city').value)
	}

	Cartesian_Coordinates() {
		if (this.elevationAngle && this.azimuthAngle) {
			const coordsGnomonVirtual = toCartesian(this.elevationAngle, this.azimuthAngle);
			document.getElementById('coordX').innerHTML = coordsGnomonVirtual.x.toFixed(3);
			document.getElementById('coordY').innerHTML = coordsGnomonVirtual.y.toFixed(3);
			document.getElementById('coordZ').innerHTML = coordsGnomonVirtual.z.toFixed(3);

			const simulatedCoords = getSimulatedData(coordsGnomonVirtual)
			console.log('Simulated Coords:');
			console.log('X:', simulatedCoords.x.toFixed(3));
			console.log('Y:', simulatedCoords.y.toFixed(3));
			console.log('Z:', simulatedCoords.z.toFixed(3));

			const coordsDif = {
				x: Math.abs(Math.abs(simulatedCoords.x) - Math.abs(coordsGnomonVirtual.x)),
				y: Math.abs(Math.abs(simulatedCoords.y) - Math.abs(coordsGnomonVirtual.y)),
				z: Math.abs(Math.abs(simulatedCoords.z) - Math.abs(coordsGnomonVirtual.z))
			};
			console.log('Difference:');
			console.log('X:', coordsDif.x.toFixed(3));
			console.log('Y:', coordsDif.y.toFixed(3));
			console.log('Z:', coordsDif.z.toFixed(3));
		}
	}
}