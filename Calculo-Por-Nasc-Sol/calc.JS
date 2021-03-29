function diaAno(dia, mes1, bicesto=false) {
    // Cálculo que retorna o dia do ano. Ex: 108/365
    // Pode ser utilizado em qualquer ano, porém em anos bicestos é necessária a adição de um parâmetro 'true'.
    // Fim do código, valor do dia vira um atributo.
    var janMax = 31;
    var abrMax = 31;
    if(bicesto == true){var fevMax=29}
    if(bicesto == false){var fevMax=28}
    var marMax = 30;
    var maiMax = 31;
    var junMax = 30;
    var julMax = 31;
    var agoMax = 31;
    var setMax = 30;
    var outMax = 31;
    var novMax = 30;
    var dezMax = 31;
    
    var jan = 0;        
    var fev = 0;
    var abr = 0;
    var mar = 0;
    var mai = 0;
    var jun = 0;
    var jul = 0;
    var ago = 0;
    var set = 0;
    var out = 0;
    var nov = 0;
    var dez = 0;
    
    if(mes1 == "jan"){var mes = jan;}
    if(mes1 == "fev"){var mes = fev + janMax;}
    if(mes1 == "mar"){var mes = mar + janMax + fevMax;}
    if(mes1 == "abr"){var mes = abr + janMax + fevMax + marMax;}
    if(mes1 == "mai"){var mes = mai + janMax + fevMax + marMax + abrMax;}
    if(mes1 == "jun"){var mes = jun + janMax + fevMax + marMax + abrMax + maiMax;}
    if(mes1 == "jul"){var mes = jul + janMax + fevMax + marMax + abrMax + maiMax + junMax;}
    if(mes1 == "ago"){var mes = ago + janMax + fevMax + marMax + abrMax + maiMax + junMax + julMax;}
    if(mes1 == "set"){var mes = set + janMax + fevMax + marMax + abrMax + maiMax + junMax + julMax + agoMax;}
    if(mes1 == "out"){var mes = out + janMax + fevMax + marMax + abrMax + maiMax + junMax + julMax + agoMax + setMax;}
    if(mes1 == "nov"){var mes = nov + janMax + fevMax + marMax + abrMax + maiMax + junMax + julMax + agoMax + setMax + outMax;}
    if(mes1 == "dez"){var mes = dez + janMax + fevMax + marMax + abrMax + maiMax + junMax + julMax + agoMax + setMax + outMax + novMax;}

    return dia + mes;
}

function conv_degree(degree) {
    // Função para conversão entre GRAUS para RADIANOS
    radian = degree * (Math.PI/180);
    return radian;
}
function declination_earth(diaAno) {
    // Calcula a declinação da Terra
    var declination_earth = 23.45 * Math.sin(conv_degree((360/365)*(284 + diaAno)));
    return declination_earth;
}
function duracaoTempo(latitude, diaAno) {
    var T = 2/15 * Math.acos(-Math.tan(conv_degree(latitude)) * Math.tan(conv_degree(declination_earth(diaAno)))) * (180/Math.PI);
    return T;
}

class SunRiseSet {
    // Esse metodo irá pegar as entradas (input)
    constructor(longi, lati, dia, mes1, bicesto) {
        this.day_year = diaAno(dia, mes1, bicesto);
        this.longitude = longi;
        this.latitude = lati;
        this.bicesto = bicesto;  
    }

    // Cálculos do nascer do sol
    Sunrise() {
        function corret_lati(longitude) {
            // Calcula qual o fuso horário do usuário

            // Checa se o número é divisível por 15
            // Se for, retorna ele mesmo, se não for, retorna o número divisível mais próximo            
            var timezone = longitude + (15 - (longitude % 15)) % 15;

            if ((timezone - longitude) > 7.5) {
                timezone -= 15;
            }

            // Calcula as diferenças
            var dif_Grau = longitude - timezone;
            var hour_dif = 0;
            var min_dif = (dif_Grau * 60) / 15;
            var seg_dif = Math.round((min_dif - Math.trunc(min_dif)) * 60);
            
            // Caso a soma entre 'seg_sunrise' e 'seg_dif' sejam > 60, 'seg_dif' ficará negativo
            if ((Math.round(seg_sunrise + seg_dif)) > 59) {
                seg_dif -= 60;
            }
            if (Math.trunc(min_sunrise + min_dif) > 59) {
                hour_dif += 1;
                min_dif -= 60;
            }

            var horaFinal =  hour_sunrise + hour_dif;
            var minFinal =  Math.trunc(min_sunrise + min_dif);
            var segFinal = Math.round(seg_sunrise + seg_dif);

            if (horaFinal<0) {
                horaFinal = horaFinal/-1;
            }
            if (minFinal<0) {
                minFinal = minFinal/-1;
            }
            if (segFinal<0) {
                segFinal = segFinal/-1;
            }

            // Saída (output)
            document.write("<br> Horário corrigido: ",horaFinal, "h ",minFinal, "min ",segFinal , "s <br>");
        }
       
        // Calcula a duração do dia
        var T = duracaoTempo(this.latitude, this.day_year);
        document.write("Td: ",T, "<br><br>");
        
        var schedule_sunrise = 12 - (T/2); // Número completo

        var hour_sunrise = Math.trunc(schedule_sunrise);
        var min_sunrise = (schedule_sunrise - hour_sunrise) * 60;
        var seg_sunrise = (min_sunrise - Math.trunc(min_sunrise)) * 60;

        // Saída (output)
        document.write("Horário do nascer do sol: ", hour_sunrise, "h ", Math.trunc(min_sunrise),"min ", Math.trunc(seg_sunrise), "s");
        corret_lati(this.getLongitude());
    }

    // Cálculos do pôr do sol
    Sunset(){
        function corret_lati(longitude) {
            // Calcula qual o fuso horário do usuário

            // Checa se o número é divisível por 15
            // Se for, retorna ele mesmo, se não for, retorna o número divisível mais próximo    
            var timezone = longitude + (15 - (longitude % 15)) % 15;

            if ((timezone - longitude) > 7.5) {
                timezone -= 15;
            }

            // Calcula as diferenças
            var dif_Grau = longitude - timezone;
            var hour_dif = 0;
            var min_dif = (dif_Grau * 60) / 15;
            var seg_dif = Math.round((min_dif - Math.trunc(min_dif)) * 60);

            document.write("<br><br> hora: ",hour_dif, "<br><br>");
            document.write("min: ",min_dif, "<br><br>");
            document.write("seg: ",seg_dif, "<br><br>");

            // Caso a soma entre 'seg_sunset' e 'seg_dif' sejam > 60, 'seg_dif' ficará negativo
            if ((Math.round(seg_sunset + seg_dif)) > 60) {
                seg_dif -= 60;
            }
            if (Math.trunc(min_sunset + min_dif) > 59) {
                hour_dif += 1;
                min_dif -= 60;
            }

            var horaFinal =  hour_sunset + hour_dif;
            var minFinal =  Math.trunc(min_sunset + min_dif);
            var segFinal = Math.round(seg_sunset + seg_dif);

            if (horaFinal<0) {
                horaFinal = horaFinal/-1;
            }
            if (minFinal<0) {
                minFinal = minFinal/-1;
            }
            if (segFinal<0) {
                segFinal = segFinal/-1;
            }

            // Saída (output)
            document.write("<br> Horário corrigido: ",horaFinal, "h ", minFinal, "min ", segFinal, "s <br>");
        }

        // Calcula a declinação da Terra
        // Calcula a duração do dia
        var T = 2/15 * Math.acos(-Math.tan(conv_degree(this.getLatitude())) * Math.tan(conv_degree(declination_earth(this.day_year)))) * (180/Math.PI);
        var schedule_sunset = 12 + (T/2); // Número completo

        var hour_sunset = Math.trunc(schedule_sunset);
        var min_sunset = (schedule_sunset - hour_sunset) * 60;
        var seg_sunset = (min_sunset - Math.trunc(min_sunset)) * 60;

        // Saída (output)
        document.write("Horário do pôr do sol: ", hour_sunset, "h ", Math.trunc(min_sunset),"min ", Math.round(seg_sunset), "s");
        corret_lati(this.getLongitude());
        
    }

    // Métodos Getters e Setters

        // Longitude
    getLongitude(){
        return this.longitude;
    }
    setLongitude(x){
        this.longitude = x;
    }

        // Latitude
    getLatitude(){
        return this.latitude;
    }
    setLatitude(x){
        this.latitude = x;
    }

        // Dia_ano
    getDia_ano(){
        return this.day_year;
    }
    setDia_ano(x){
        this.day_year = x;
    }
}