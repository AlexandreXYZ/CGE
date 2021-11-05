function sequentialDay(day, month, year) {
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

function declination(sequentialDay) {
    var declination = 23.45 * Math.sin(toRadian((360 / 365) * (284 + sequentialDay)));
    return toRadian(declination);
}

function dayLength(latitude, sequentialDay) {
    var T = 2 / 15 * Math.acos(-Math.tan(toRadian(latitude)) * Math.tan(declination(sequentialDay)));
    return T;
}

function fixLong(longitude, scheduleOriginal) {
    // Calcula qual o fuso horário do usuário

    // Checa se o número é divisível por 15
    // Se for, retorna ele mesmo, se não for, retorna o número divisível mais próximo    
    var timezone = longitude + (15 - (longitude % 15)) % 15;

    if ((timezone - longitude) > 7.5) {
        timezone -= 15;
    }

    var difDegree = longitude - timezone;
    var scheduleDif = new Object();
    scheduleDif.hour = 0;
    scheduleDif.min = (difDegree * 60) / 15;
    scheduleDif.seg = Math.round((scheduleDif.min - Math.trunc(scheduleDif.min)) * 60);

    // Caso a soma entre 'scheduleOriginal.seg' e 'scheduleDif.seg' sejam > 60, 'scheduleDif.seg' ficará negativo
    if ((Math.round(scheduleOriginal.seg + scheduleDif.seg)) > 60) {
        scheduleDif.seg -= 60;
    }
    if (Math.trunc(scheduleOriginal.min + scheduleDif.min) > 59) {
        scheduleDif.hour += 1;
        scheduleDif.min -= 60;
    }

    var scheduleAdjusted = {
        hour: Math.abs(scheduleOriginal.hour + scheduleDif.hour),
        min: Math.abs(Math.trunc(scheduleOriginal.min + scheduleDif.min)),
        seg: Math.abs(Math.round(scheduleOriginal.seg + scheduleDif.seg))
    }

    return scheduleAdjusted;
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

function hourAngle(hour, min) {
    var min = min / 60;
    var hour = (min + hour) - 12;

    const angle = hour * 15;
    return toRadian(angle);
}

function toCartesian(elevation, azimuth) {
    const r = 1;
    cartesianCoords = {
        x: r * Math.cos(elevation) * Math.sin(azimuth),
        y: r * Math.cos(elevation) * Math.cos(azimuth),
        z: r * Math.sin(elevation)
    }

    return cartesianCoords;
}

function simulatedData(coordsGnomonVirtual) {
    simulatedCoords = {
        x: coordsGnomonVirtual.x - (Math.random() / 5),
        y: coordsGnomonVirtual.y - (Math.random() / 5),
        z: coordsGnomonVirtual.z - (Math.random() / 5)
    }

    return simulatedCoords;
}