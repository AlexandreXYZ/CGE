class Calibrador {
	constructor(coord, horario, data) {
		this.latitude = coord.lat;
		this.longitude = coord.lng;
		this.h = anguloHorario(horario.hora, horario.min, horario.seg);
		this.dia_sequencial = diaAno(data.dia, data.mes, data.ano);
	}

	//Equação 1
	Altura_Sol() {
		// DECLINAÇÃO
		// Declinação (original): -23.011636727869245
		const decli = declinacao(this.dia_sequencial);
		console.log("Declinação: ", decli);

		// ALTURA
		// a = arcsen [cos (h) cos (δ) cos (φ) + sen (δ) sin (φ)]
		//original: Math.asin(Math.cos(this.h) * Math.cos(toRadian(decli)) * Math.cos(toRadian(this.latitude)) + Math.sin(toRadian(decli)) * Math.sin(toRadian(this.latitude)))
		const altura_sol = Math.asin(Math.cos(this.h) * Math.cos(toRadian(decli)) * Math.cos(toRadian(this.latitude)) + Math.sin(toRadian(decli)) * Math.sin(toRadian(this.latitude)));
		this.altura_sol = altura_sol;
		
		// OUTPUT
		console.log("Altura (original - radianos): ", 0.4920529335892037);
		console.log("Altura (original - graus): ", 28.192556391692356);
		console.log("Altura Sol (radian): ", altura_sol);
		document.getElementById("altura").innerHTML = (altura_sol * 180/Math.PI).toFixed(2);
	}
	
	// Equação 2
	Azimute_Sol() {
		// Ângulo da distância zenital
		// A = arccos [(sen(δ) − sen(a)sen(φ))/(cos(a)cos(φ))]
		var azimute_sol = Math.acos(Math.sin(this.latitude) - Math.sin(toRadian(this.altura_sol)) * Math.sin(toRadian(this.latitude))) / (Math.cos(toRadian(this.altura_sol)) * Math.cos(toRadian(this.latitude)));
		document.getElementById("azimute").innerHTML = (azimute_sol).toFixed(2);
	}
}