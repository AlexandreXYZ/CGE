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

		// A = arccos [(sen(δ) − sen(a)sen(φ))/(cos(a)cos(φ))]
		/*pdf*/ var azimute_sol_pdf = Math.acos((Math.sin(this.latitude) - Math.sin(this.altura_sol) * Math.sin(this.latitude)) / (Math.cos(this.altura_sol) * Math.cos(this.latitude)));
		/*net*/ var azimute_sol = Math.acos((Math.sin(declination) * Math.cos(this.latitude) - Math.cos(declination) * Math.sin(this.latitude) * Math.cos(this.h)) / Math.cos(this.altura_sol));

		if (this.h > 0) {
			// Se for depois do meio dia, subtrai de o azimute de 360
			var azimute_sol = toRadian(360) - azimute_sol;
			var azimute_sol_pdf = toRadian(360) - azimute_sol_pdf;
		}

		console.log("net:", toDegree(azimute_sol)); // 246.09
		console.log("pdf:", toDegree(azimute_sol_pdf));
		document.getElementById("azimute").innerHTML = toDegree(azimute_sol).toFixed(2);
	}
}