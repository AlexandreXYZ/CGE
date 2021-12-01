function getDeclination(sequentialDay) {
    const declination = 23.45 * Math.sin(toRadian((360 / 365) * (284 + sequentialDay)));
    return toRadian(declination);
}

function getDayLength(latitude, sequentialDay) {
    const T = 2 / 15 * Math.acos(-Math.tan(toRadian(latitude)) * Math.tan(getDeclination(sequentialDay)));
    return T;
}

function fixLongitude(longitude, scheduleOriginal) {
    // Calcula qual o fuso horário do usuário

    // Checa se o número é divisível por 15
    // Se for, retorna ele mesmo, se não for, retorna o número divisível mais próximo    
    const timezone = longitude + (15 - (longitude % 15)) % 15;

    if ((timezone - longitude) > 7.5) {
        timezone -= 15;
    }

    const difDegree = longitude - timezone;
    const scheduleDif = new Object();
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

    const scheduleAdjusted = {
        hour: Math.abs(scheduleOriginal.hour + scheduleDif.hour),
        min: Math.abs(Math.trunc(scheduleOriginal.min + scheduleDif.min)),
        seg: Math.abs(Math.round(scheduleOriginal.seg + scheduleDif.seg))
    }

    return scheduleAdjusted;
}

function getHourAngle(hour, min) {
    const min = min / 60;
    const hour = (min + hour) - 12;

    const angle = hour * 15;
    return toRadian(angle);
}