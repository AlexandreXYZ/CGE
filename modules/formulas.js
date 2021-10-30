function sequentialDay(day, month, year) {
    var jan = mar = mai = jul = ago = out = dez = 31;
    var abr = jun = set = nov = 30;
    var fev = (bicesto(year) == true) ? 28 : 29;

    switch(month) {
        case 01: var tot_meses = 0; break;
        case 02: var tot_meses = jan; break;
        case 03: var tot_meses = jan + fev; break;
        case 04: var tot_meses = jan + fev + mar; break;
        case 05: var tot_meses = jan + fev + mar + abr; break;
        case 06: var tot_meses = jan + fev + mar + abr + mai; break;
        case 07: var tot_meses = jan + fev + mar + abr + mai + jun; break;
        case 08: var tot_meses = jan + fev + mar + abr + mai + jun + jul; break;
        case 09: var tot_meses = jan + fev + mar + abr + mai + jun + jul + ago; break;
        case 10: var tot_meses = jan + fev + mar + abr + mai + jun + jul + ago + set; break;
        case 11: var tot_meses = jan + fev + mar + abr + mai + jun + jul + ago + set + out; break;
        case 12: var tot_meses = jan + fev + mar + abr + mai + jun + jul + ago + set + out + nov; break;
        default: var tot_meses = 0; break;
    }
    return day + tot_meses;
}

function toRadian(degree) {
    var radian = degree * (Math.PI / 180);
    return radian;
}

function toDegree(radian) {
    var degree = radian * (180 / Math.PI);
    return degree;
}

function declination(dia_seq) {
    var declination = 23.45 * Math.sin(toRadian((360 / 365) * (284 + dia_seq)));
    return toRadian(declination);
}

function dayLength(latitude, sequentialDay) {
    var T = 2 / 15 * Math.acos(-Math.tan(toRadian(latitude)) * Math.tan(declination(sequentialDay)));
    return T;
}

function fixLong(longitude, schedule_original) {
    // Calcula qual o fuso horário do usuário

    // Checa se o número é divisível por 15
    // Se for, retorna ele mesmo, se não for, retorna o número divisível mais próximo    
    var timezone = longitude + (15 - (longitude % 15)) % 15;

    if ((timezone - longitude) > 7.5) {
        timezone -= 15;
    }

    var dif_Grau = longitude - timezone;
    var schedule_dif = new Object();
    schedule_dif.hour = 0;
    schedule_dif.min = (dif_Grau * 60) / 15;
    schedule_dif.seg = Math.round((schedule_dif.min - Math.trunc(schedule_dif.min)) * 60);

    // Caso a soma entre 'schedule_original.seg' e 'schedule_dif.seg' sejam > 60, 'schedule_dif.seg' ficará negativo
    if ((Math.round(schedule_original.seg + schedule_dif.seg)) > 60) {
        schedule_dif.seg -= 60;
    }
    if (Math.trunc(schedule_original.min + schedule_dif.min) > 59) {
        schedule_dif.hour += 1;
        schedule_dif.min -= 60;
    }

    var scheduleAdjusted = {
        hour: Math.abs(schedule_original.hour + schedule_dif.hour),
        min: Math.abs(Math.trunc(schedule_original.min + schedule_dif.min)),
        seg: Math.abs(Math.round(schedule_original.seg + schedule_dif.seg))
    }

    return scheduleAdjusted;
}

function bicesto(year) {
    var etapa1 = year % 4;

    if (etapa1 == 0) {
        var etapa2 = year % 100;

        if (etapa2 == 0) {
            var etapa3 = year % 400;

            if (etapa3 == 0) {
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
    // console.log(coordsGnomonVirtual.x - (Math.random() / 10));

    simulatedCoords = {
        x: coordsGnomonVirtual.x - (Math.random() / 5),
        y: coordsGnomonVirtual.y - (Math.random() / 5),
        z: coordsGnomonVirtual.z - (Math.random() / 5)
    }

    // console.log(Math.abs(coordsDif.x) - Math.abs(coordsGnomonVirtual.x))

    return simulatedCoords;
}