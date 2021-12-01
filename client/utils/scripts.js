function getSequentialDay(day, month, year) {
    var jan = mar = may = jul = aug = oct = 31;
    var apr = jun = sep = nov = 30;
    var feb = (isBicesto(year) == true) ? 28 : 29;

    switch(month) {
        case 01: var totalMonth = 0; break;
        case 02: var totalMonth = jan; break;
        case 03: var totalMonth = jan + feb; break;
        case 04: var totalMonth = jan + feb + mar; break;
        case 05: var totalMonth = jan + feb + mar + apr; break;
        case 06: var totalMonth = jan + feb + mar + apr + may; break;
        case 07: var totalMonth = jan + feb + mar + apr + may + jun; break;
        case 08: var totalMonth = jan + feb + mar + apr + may + jun + jul; break;
        case 09: var totalMonth = jan + feb + mar + apr + may + jun + jul + aug; break;
        case 10: var totalMonth = jan + feb + mar + apr + may + jun + jul + aug + sep; break;
        case 11: var totalMonth = jan + feb + mar + apr + may + jun + jul + aug + sep + oct; break;
        case 12: var totalMonth = jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov; break;
        default: var totalMonth = 0; break;
    }
    return day + totalMonth;
}

function toRadian(degree) {
    var radian = degree * (Math.PI / 180);
    return radian;
}

function toDegree(radian) {
    var degree = radian * (180 / Math.PI);
    return degree;
}

function isBicesto(year) {
    var step1 = year % 4;

    if (step1 == 0) {
        var step2 = year % 100;

        if (step2 == 0) {
            var step3 = year % 400;

            if (step3 == 0) {
                var verify = true;
            } else {
                var verify = false;
            }
        } else {
            var verify = true;
        }
    } else {
        var verify = false;
    }
    return verify;
}

function convertApiTime(time){
    return `${time.hour}:${time.min}`
}

const filterDate = (date = 0) => {
	const dateToday = new Date;
	let dateCustom = new Date;
	
	if(date){
		dateCustom = new Date(date);
		dateCustom.setHours(20) // fix error 
	}

	return {
		'today': new Date(dateToday.setDate(dateToday.getDate())),
		'yesterday': new Date(dateToday.setDate(dateToday.getDate() - 1)),
		'custom': new Date(dateCustom.setDate(dateCustom.getDate() + (date ? 1 : 0)))
	}
}
