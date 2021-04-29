class Calibrador {
	constructor(coord, horario, data) {
		this.latitude = toRadian(coord.lat);
		this.longitude = toRadian(coord.lng);
		this.h = anguloHorario(horario.hora, horario.min, horario.seg);
		this.dia_sequencial = diaAno(data.dia, data.mes, data.ano);
	}

	//Equação 1
	Altura_Sol() {
		const declination = declinacao(this.dia_sequencial);
		console.log("Declinação: ", toDegree(declination).toFixed(3));

		// a = arcsen [cos (h) cos (δ) cos (φ) + sen (δ) sin (φ)]
		const altura_sol = Math.asin(Math.cos(this.h) * Math.cos(declination) * Math.cos(this.latitude) + Math.sin(declination) * Math.sin(this.latitude));
		this.altura_sol = altura_sol;

		// OUTPUT
		document.getElementById("altura").innerHTML = toDegree(altura_sol).toFixed(2);
	}
	
	// Equação 2
	Azimute_Sol() {
		// Ângulo da distância zenital
		const declination = declinacao(this.dia_sequencial);
		
		// A = arccos [(sen(δ) − sen(a) * sen(φ)) / (cos(a) * cos(φ))]
		/*pdf*/ var azimute_sol_pdf = (Math.sin(this.latitude) - Math.sin(this.altura_sol) * Math.sin(this.latitude)) / (Math.cos(this.altura_sol) * Math.cos(this.latitude));

		// A = arccos [(sen(δ) * cos(φ) - cos(δ) - sen(φ) * cos(h)) / cos(a)]
		/*net*/ var azimute_sol = (Math.sin(declination) * Math.cos(this.latitude) - Math.cos(declination) * Math.sin(this.latitude) * Math.cos(this.h)) / Math.cos(this.altura_sol);

		if (azimute_sol > 1 || azimute_sol < -1) {
			// Checa pra ver se o JS nao colocou número a mais (sim, isso acontece)
			var azimute_sol = Math.trunc(azimute_sol);
		}
		if (azimute_sol_pdf > 1 || azimute_sol_pdf < -1) {
			var azimute_sol_pdf = Math.trunc(azimute_sol_pdf);
		}

		var azimute_sol = Math.acos(azimute_sol);
		var azimute_sol_pdf = Math.acos(azimute_sol_pdf);

		if (this.h > 0) {
			// Se for depois do meio dia, subtrai de o azimute de 360
			var azimute_sol = toRadian(360) - azimute_sol;
			var azimute_sol_pdf = toRadian(360) - azimute_sol_pdf;
		}

		console.log("ângulo zenital: ", toDegree(Math.acos(Math.sin(this.altura_sol))));
		console.log("pdf:", toDegree(azimute_sol_pdf));
		console.log("net:", toDegree(azimute_sol)); // 246.09
		document.getElementById("azimute").innerHTML = toDegree(azimute_sol).toFixed(2);
	}

	// Nome da cidade
	Cidade() {
		cityName(toDegree(this.latitude), toDegree(this.longitude));
	}
}