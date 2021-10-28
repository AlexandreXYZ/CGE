class Calibrador {
	constructor(coord, horario, data) {
		this.latitude = toRadian(coord.lat);
		this.longitude = toRadian(coord.lng);
		this.h = anguloHorario(horario.hora, horario.min, horario.seg);
		this.dia_sequencial = diaAno(data.dia, data.mes, data.ano);
	}

	Sunrise() {
		var T = duracaoDia(toDegree(this.latitude), this.dia_sequencial); //day_length()
		var decimal_sunrise = 12 - (toDegree(T) / 2); // Horario formato decimal

		var sunrise = new Object();
		sunrise.hour = Math.trunc(decimal_sunrise);
		sunrise.min = Math.abs((decimal_sunrise - sunrise.hour) * 60);
		sunrise.seg = Math.abs((sunrise.min - Math.trunc(sunrise.min)) * 60);

		// Saída (output)
		var schedule_adjusted = corret_long(toDegree(this.longitude), sunrise);
		document.getElementById("nascer").innerHTML = (schedule_adjusted.hour + "h " + schedule_adjusted.min + "min " + schedule_adjusted.seg + "s");
	}

	Sunset() {
		var T = duracaoDia(toDegree(this.latitude), this.dia_sequencial); //day_length()
		var decimal_sunset = 12 + (toDegree(T) / 2); // Horario formato decimal

		var sunset = new Object();
		sunset.hour = Math.trunc(decimal_sunset);
		sunset.min = Math.abs((decimal_sunset - sunset.hour) * 60);
		sunset.seg = Math.abs((sunset.min - Math.trunc(sunset.min)) * 60);

		// Saída (output)
		var schedule_adjusted = corret_long(toDegree(this.longitude), sunset);
		document.getElementById("por").innerHTML = (schedule_adjusted.hour + "h " + schedule_adjusted.min + "min " + schedule_adjusted.seg + "s");
	}

	// Equação 1
	Altura_Sol() {
		const declination = declinacao(this.dia_sequencial);

		// a = arcsen [cos (h) cos (δ) cos (φ) + sen (δ) sin (φ)]
		const altura_sol = Math.asin(Math.cos(this.h) * Math.cos(declination) * Math.cos(this.latitude) + Math.sin(declination) * Math.sin(this.latitude));
		this.altura_sol = altura_sol;

		// OUTPUT
		document.getElementById("altura").innerHTML = toDegree(altura_sol).toFixed(2);
	}

	// Equação 2
	Azimute_Sol() {
		const declination = declinacao(this.dia_sequencial);

		// A = arccos [(sen(δ) − sen(a) * sen(φ)) / (cos(a) * cos(φ))]
		var azimute_sol = (Math.sin(declination) - Math.sin(this.altura_sol) * Math.sin(this.latitude)) / (Math.cos(this.altura_sol) * Math.cos(this.latitude));

		if (azimute_sol > 1 || azimute_sol < -1) {
			// Checa pra ver se o JS nao colocou número a mais (sim, isso acontece)
			var azimute_sol = Math.trunc(azimute_sol);
		}

		var azimute_sol = Math.acos(azimute_sol);

		if (this.h > 0) {
			// Se for depois do meio dia, subtrai de o azimute de 360
			var azimute_sol = toRadian(360) - azimute_sol;
		}

		this.azimute_sol = azimute_sol;
		document.getElementById("azimute").innerHTML = toDegree(azimute_sol).toFixed(2);
	}

	// Nome da cidade
	CidadeNome() {
		cityName(toDegree(this.latitude), toDegree(this.longitude))
	}

	// Coordenada da cidade
	CidadeCoord() {
		cityCoords(document.getElementById("cidade").value)
	}

	CoordenadasCartesianas() {
		if (this.altura_sol && this.azimute_sol) {
			const coordsGnomonVirtual = toCartesian(this.altura_sol, this.azimute_sol);
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