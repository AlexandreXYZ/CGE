class Calc{

	constructor(long, lat){

		this.longitude = long;
		this.latitude = lat;
	}

	Tests(){

	    function roundTo(n, d) {
	    	return Math.floor((n + d - 1) / d) * d;
	    }

	    document.write(roundTo(3, 2));
	}
}