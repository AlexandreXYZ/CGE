class Calc {

	constructor(lati, longi, h, declinacao, dia_seq) {
		// Declara 5 atributos
		this.latitude = lati;
		this.longitude = longi;
		this.h = h;
		this.declinacao = declinacao;
		this.dia_sequencial = dia_seq;

	}

	// Equação 1
	Altura_Sol() {
		function conv_degree(degree) {
		    return (degree * (Math.PI/180));
		}
		
		//this.declinacao = 23.45 * Math.sin(conv_degree((360/365)*(284 + this.dia_sequencial)));
		this.declinacao = - 23.45 * Math.cos(284 + this.dia_sequencial);
		document.write("Declinação: ", this.declinacao, "<br/>")
		
		// a = arcsen [cos (h) cos (δ) cos (φ) + sen (δ) sin (φ)]
		var altura_sol = Math.acos(conv_degree(Math.cos(conv_degree(this.getH())) * Math.cos(conv_degree(this.getDeclinacao())) * Math.cos(conv_degree(this.getLatitude())) + Math.sin(conv_degree(this.getDeclinacao())) * Math.sin(conv_degree(this.getLatitude()))));
		this.altura_sol = altura_sol;

		document.write("Altura Sol: ", altura_sol, "<br/>");
	}

	// Equação 2
	Azimute_Sol() {
		function conv_degree(degree) {
		    return (degree * (Math.PI/180));
		}

		// A = arccos [(sen(δ) − sen(a)sen(φ))/(cos(a)cos(φ))]     |     A = arccos [(sen(δ) − sen(a)sen(φ))/(cos(a)cos(φ))]
		var azimute_sol = (Math.sin(conv_degree(this.getH())) - Math.sin(conv_degree(this.altura_sol)) * Math.sin(conv_degree(this.getLatitude()))) / (Math.cos(conv_degree(this.altura_sol)) * Math.cos(conv_degree(this.getLatitude())));

		document.write("Azimute Sol: ", azimute_sol, "<br/>");
	}


	// Métodos Getters e Setters
    getH() {
    	return this.h;
    }
    setH(x) {
    	this.h = x;
    }

    getDeclinacao() {
        return this.declinacao;
    }
    setDeclinacao(x) {
        this.declinacao = x;
    }

    getLatitude() {
        return this.latitude;
    }
    setLatitude(x) {
        this.latitude = x;
    }

    getDia_seq() {
        return this.dia_seq;
    }
    setDia_seq(x) {
        this.dia_seq = x;
    }
}