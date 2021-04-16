function diaAno(dia, mes, ano) {
    var jan = mar = mai = jul = ago = out = dez = 31;
    var abr = jun = set = nov = 30;
    var fev = (bicesto(ano) == true) ? 28 : 29;

    switch(mes) {
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
    return dia + tot_meses;
}

function conv_degree(degree) {
    var radian = degree * (Math.PI / 180);
    return radian;
}

function declinacao(dia_seq) {
    //original: 23.45 * Math.sin(conv_degree((360/365)*(284 + dia_seq)))

    //usp
    var declinacao = 23.45 * Math.sin(360 * (dia_seq - 80) / 365);
    return declinacao;
}

function duracaoDia(latitude, diaAno) {
    var T = 2 / 15 * Math.acos(-Math.tan(conv_degree(latitude)) * Math.tan(conv_degree(declinacao(diaAno)))) * (180 / Math.PI);
    return T;
}

function corret_lati(longitude, schedule_original) {
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

    var schedule_adjusted = {
        hour: Math.abs(schedule_original.hour + schedule_dif.hour),
        min: Math.abs(Math.trunc(schedule_original.min + schedule_dif.min)),
        seg: Math.abs(Math.round(schedule_original.seg + schedule_dif.seg))
    }

    // Saída (output)
    return schedule_adjusted;
}

function bicesto(ano) {
    var etapa1 = ano % 4;

    if (etapa1 == 0) {
        var etapa2 = ano % 100;

        if (etapa2 == 0) {
            var etapa3 = ano % 400;

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

function hourAngle(hour, min, seg) {
    var seg = seg / 60;
    var min = (seg + min) / 60;
    var hour = (min + hour) - 12;

    const angle = hour * 15;
    return angle;
}