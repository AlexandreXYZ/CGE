class Calc{
	constructor(long, lat){
		this.longitude = long;
		this.latitude = lat;
	}

	Nascer_Sol(){
		this.setDia_ano(4);

		document.write(this.getDia_ano()).innertext;
	}

    getDia_ano(){
        return this.dia_ano;
    }
    setDia_ano(x){
        this.dia_ano = x;
    }
}