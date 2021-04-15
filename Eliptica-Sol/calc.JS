class Calibrador {
	constructor(coord, h, date) {
		this.latitude = coord.lat;
		this.longitude = coord.lng;
		this.h = h;
		this.dia_sequencial = diaAno(date.dia, date.mes, date.ano);
	}

	//Equação 1
	Altura_Sol() {
		// DECLINAÇÃO
		// Declinação (original): -23.011636727869245
		const decli = declinacao(this.dia_sequencial);
		console.log("Declinação: ", decli);

		// ALTURA
		// a = arcsen [cos (h) cos (δ) cos (φ) + sen (δ) sin (φ)]
		//original: Math.asin(Math.cos(conv_degree(this.h)) * Math.cos(conv_degree(decli)) * Math.cos(conv_degree(this.latitude)) + Math.sin(conv_degree(decli)) * Math.sin(conv_degree(this.latitude)))
		const altura_sol = Math.acos(Math.cos(conv_degree(this.h)) * Math.cos(conv_degree(decli)) * Math.cos(conv_degree(this.latitude)) + Math.sin(conv_degree(decli)) * Math.sin(conv_degree(this.latitude)));
		this.altura_sol = altura_sol;

		// OUTPUT
		console.log("-");
		console.log("Altura (original - radianos): ", 0.4920529335892037);
		console.log("Altura (original - graus): ", 28.192556391692356);
		console.log("Altura Sol (radian): ", altura_sol);
		console.log("Altura Sol (grau): ", (altura_sol * 180/Math.PI));
	}

	// Equação 2
	Azimute_Sol() {
		// Ângulo da distância zenital
		// A = arccos [(sen(δ) − sen(a)sen(φ))/(cos(a)cos(φ))]
		var azimute_sol = Math.acos(Math.sin(conv_degree(this.h)) - Math.sin(conv_degree(this.altura_sol)) * Math.sin(conv_degree(this.latitude))) / (Math.cos(conv_degree(this.altura_sol)) * Math.cos(conv_degree(this.latitude)));

		console.log("-");
		console.log("Azimute Sol: ", azimute_sol);
	}
}