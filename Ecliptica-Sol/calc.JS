class Calibrador {
	constructor(coord, horario, data) {
		this.latitude = toRadian(coord.lat);
		this.longitude = toRadian(coord.lng);
		this.h = anguloHorario(horario.hora, horario.min, horario.seg);
		this.dia_sequencial = diaAno(data.dia, data.mes, data.ano);
	}

	//Equação 1
	Altura_Sol() {
		// DECLINAÇÃO
		const latitude = this.latitude;
		const decli = declinacao(this.dia_sequencial);
		console.log("Declinação: ", toDegree(decli).toFixed(3));

		// ALTURA
		// a = arcsen [cos (h) cos (δ) cos (φ) + sen (δ) sin (φ)]
		const altura_sol = Math.asin(Math.cos(this.h) * Math.cos(decli) * Math.cos(latitude) + Math.sin(decli) * Math.sin(latitude));
		this.altura_sol = altura_sol;

		// OUTPUT
		document.getElementById("altura").innerHTML = toDegree(altura_sol).toFixed(2);
	}
	
	// Equação 2
	Azimute_Sol() {
		// Ângulo da distância zenital
		const latitude = this.latitude;
		const decli = declinacao(this.dia_sequencial);

		// A = arccos [(sen(δ) − sen(a)sen(φ))/(cos(a)cos(φ))]
		// pdf = Math.acos((Math.sin(latitude) - Math.sin(this.altura_sol) * Math.sin(latitude)) / (Math.cos(this.altura_sol) * Math.cos(latitude)));
		/*formula 1*/ var azimute_sol = Math.cos((Math.sin(decli) * Math.cos(latitude) - Math.cos(decli) * Math.sin(latitude) * Math.cos(this.h)) / Math.cos(this.altura_sol));
		// /*formula 2*/ var azimute_sol = Math.acos((Math.sin(decli) * Math.cos(latitude) - Math.cos(decli) * Math.sin(latitude) * Math.cos(this.h)) / Math.cos(this.altura_sol));

		console.log(azimute_sol);
		console.log(toDegree(azimute_sol)); // 246.09
		document.getElementById("azimute").innerHTML = toDegree(azimute_sol).toFixed(2);
	}
}