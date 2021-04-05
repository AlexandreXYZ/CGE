class SunRiseSet {
    constructor(longi, lati, dia, mes1, bicesto) {
        this.day_year = diaAno(dia, mes1, bicesto);
        this.longitude = longi;
        this.latitude = lati;
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

            var horaFinal =  Math.abs(hour_sunrise + hour_dif);
            var minFinal =  Math.abs(Math.trunc(min_sunrise + min_dif));
            var segFinal = Math.abs(Math.round(seg_sunrise + seg_dif));

            // Saída (output)
            document.write("<br> Horário corrigido: ",horaFinal, "h ",minFinal, "min ",segFinal , "s <br>");
        }
       
        // Calcula a duração do dia
        var T = duracaoDia(this.latitude, this.day_year);        
        var schedule_sunrise = 12 - (T/2); // Número completo

        var hour_sunrise = Math.trunc(schedule_sunrise);
        var min_sunrise = (schedule_sunrise - hour_sunrise) * 60;
        var seg_sunrise = (min_sunrise - Math.trunc(min_sunrise)) * 60;

        // Saída (output)
        document.write("Horário do nascer do sol: ", hour_sunrise, "h ", Math.trunc(min_sunrise),"min ", Math.trunc(seg_sunrise), "s");
        corret_lati(this.getLongitude());
    }

    // Cálculos do pôr do sol
    Sunset() {
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

            // Caso a soma entre 'seg_sunset' e 'seg_dif' sejam > 60, 'seg_dif' ficará negativo
            if ((Math.round(seg_sunset + seg_dif)) > 60) {
                seg_dif -= 60;
            }
            if (Math.trunc(min_sunset + min_dif) > 59) {
                hour_dif += 1;
                min_dif -= 60;
            }

            var horaFinal =  Math.abs(hour_sunset + hour_dif);
            var minFinal =  Math.abs(Math.trunc(min_sunset + min_dif));
            var segFinal = Math.abs(Math.round(seg_sunset + seg_dif));

            // Saída (output)
            document.write("<br> Horário corrigido: ",horaFinal, "h ", minFinal, "min ", segFinal, "s <br>");
        }

        // Calcula a duração do dia
        var T = duracaoDia(this.latitude, this.day_year);
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