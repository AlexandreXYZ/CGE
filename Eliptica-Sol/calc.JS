import { conv_degree } from '../Formulas-Matematicas/formulas.js';

class Calc {
	constructor(lati, longi, h, declinacao, dia_seq) {
		this.latitude = lati;
		this.longitude = longi;
		this.h = h;
		this.declinacao = declinacao;
		this.dia_sequencial = dia_seq;
	}

	//Equação 1
	Altura_Sol() {
		// DECLINAÇÃO
		//original: this.setDeclinacao(23.45 * Math.sin(conv_degree((360/365)*(284 + this.getDia_seq()))));
		this.setDeclinacao(23.45 * Math.sin(conv_degree(360*(this.getDia_seq()-80)/365))); //usp
		document.write("Declinação (original): -23.011636727869245<br/>");
		document.write("Declinação: ", this.getDeclinacao(), "<br/>");		
		
		// ALTURA
		// a = arcsen [cos (h) cos (δ) cos (φ) + sen (δ) sin (φ)]
		//original: var altura_sol = Math.asin(Math.cos(conv_degree(this.getH())) * Math.cos(conv_degree(this.getDeclinacao())) * Math.cos(conv_degree(this.getLatitude())) + Math.sin(conv_degree(this.getDeclinacao())) * Math.sin(conv_degree(this.getLatitude())));
		var altura_sol = Math.acos(Math.cos(conv_degree(this.getH())) * Math.cos(conv_degree(this.getDeclinacao())) * Math.cos(conv_degree(this.getLatitude())) + Math.sin(conv_degree(this.getDeclinacao())) * Math.sin(conv_degree(this.getLatitude())));
		this.altura_sol = altura_sol;

		// OUTPUT
		document.write("<br/>");		
		document.write("Altura (original - radianos): 0.4920529335892037<br/>");
		document.write("Altura (original - graus): 28.192556391692356<br/>");
		document.write("Altura Sol (radian): ", altura_sol, "<br/>");
		document.write("Altura Sol (grau): ", (altura_sol * 180/Math.PI), "<br/><br/>");
	}

	// Equação 2
	Azimute_Sol() {
		// Ângulo da distância zenital
		// A = arccos [(sen(δ) − sen(a)sen(φ))/(cos(a)cos(φ))]
		var azimute_sol = Math.acos(Math.sin(conv_degree(this.getH())) - Math.sin(conv_degree(this.altura_sol)) * Math.sin(conv_degree(this.getLatitude()))) / (Math.cos(conv_degree(this.altura_sol)) * Math.cos(conv_degree(this.getLatitude())));

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
        return this.dia_sequencial;
    }
    setDia_seq(x) {
        this.dia_sequencial = x;
    }
}