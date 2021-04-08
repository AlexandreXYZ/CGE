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
            var schedule_dif = {
                hour: 0,
                min: (dif_Grau * 60) / 15,
                seg: Math.round((this.min - Math.trunc(this.min)) * 60)
            }
            
            // Caso a soma entre 'seg_sunrise' e 'schedule_dif.seg' sejam > 60, 'schedule_dif.seg' ficará negativo
            if ((Math.round(seg_sunrise + schedule_dif.seg)) > 59) {
                schedule_dif.seg -= 60;
            }
            if (Math.trunc(min_sunrise + schedule_dif.min) > 59) {
                schedule_dif.hour += 1;
                schedule_dif.min -= 60;
            }

            var hour_adjusted =  Math.abs(hour_sunrise + schedule_dif.hour);
            var min_adjusted =  Math.abs(Math.trunc(min_sunrise + schedule_dif.min));
            var seg_adjusted = Math.abs(Math.round(seg_sunrise + schedule_dif.seg));

            // Saída (output)
            document.write("<br> Horário corrigido: ",hour_adjusted, "h ",min_adjusted, "min ",seg_adjusted , "s <br>");
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
        // Calcula a duração do dia
        var T = duracaoDia(this.latitude, this.day_year);
        var schedule_sunset = 12 + (T/2); // Número completo

        var sunset = new Object();
        sunset.hour = Math.trunc(schedule_sunset);
        sunset.min = Math.abs((schedule_sunset - sunset.hour) * 60);
        sunset.seg = Math.abs((sunset.min - Math.trunc(sunset.min)) * 60);

        // Saída (output)
        var schedule_adjusted = corret_lati(this.getLongitude(), sunset);
        document.getElementById("oi2").innerHTML = (schedule_adjusted.hour+"h " + schedule_adjusted.min+"min " + schedule_adjusted.seg+"s");
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