class Calc{

    // Esse metodo irá pegar as entradas (input)
    constructor(lati, longi, dia, mes1, bicesto = false) {

        // Declara 3 atributos
        this.latitude = lati;
        this.longitude = longi;
        this.bicesto = bicesto;

        // Cálculo que retorna o dia sequencial. Ex: 108/365
        // Pode ser utilizado em qualquer ano, porém em anos bicestos é necessária a adição de um parâmetro 'true'.
        var janMax = 31;
        var abrMax = 31;
        if(this.bicesto == true){var fevMax=29;}
        if(this.bicesto == false){var fevMax=28;}
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

        // Fim do código, valor do dia vira um atributo
        this.sequential_day = dia + mes;
    } 

    
    // Cálculos do nascer do sol
    Sunrise(){

        // Converte GRAUS para RADIANOS
        function conv_degree(degree){
            return (degree * (Math.PI/180));
        }

        // Calcula a correção do horário de acordo com a latitude
        function corret_lati(longitude){
            // Calcula qual o fuso horário do usuário

            // Checa se o número é divisível por 15
            // Se for, retorna ele mesmo, se não for, retorna o número divisível mais próximo            
            var timezone = longitude + (15 - (longitude % 15)) % 15;

            if ((timezone - longitude) > 7.5){
                timezone -= 15;
            }

            // Calcula as diferenças
            var dif_grau = longitude - timezone;
            var hour_dif = 0;
            var min_dif = (dif_grau * 60) / 15;
            var seg_dif = Math.round((min_dif - Math.trunc(min_dif)) * 60);
            
            // Caso a soma entre 'seg_sunrise' e 'seg_dif' seja > 59, 'seg_dif' ficará negativo
            if ((Math.round(seg_sunrise + seg_dif)) > 59) {
                seg_dif -= 60;
            }

            // Caso a soma entre 'min_sunrise' e 'min_dif' seja > 59, +1 será adicionado na 'hour_dif' e -60 do 'min_dif'
            if (Math.trunc(min_sunrise + min_dif) > 59) {
                hour_dif += 1;
                min_dif -= 60;
            }

            // Calcula o horário definitivo, somando as variáveis 'originais' com a da 'diferença'
            // Além de aplicar a função módulo matemático
            var hora_Final =  Math.abs(hour_sunrise + hour_dif);
            var min_Final =  Math.abs(Math.trunc(min_sunrise + min_dif));
            var seg_Final = Math.abs(Math.round(seg_sunrise + seg_dif));

            // Saída (output)
            document.write("<br> Horário corrigido: ",hora_Final, "h ",min_Final, "min ",seg_Final , "s <br>");
            
        }

        // Calcula a declinação do local
        var local_declination = 23.45 * Math.sin(conv_degree((360/365)*(284 + this.getSequential_day())));
        // Calcula a duração do dia
        var day_lenght = 2/15 * Math.acos(-Math.tan(conv_degree(this.getLatitude())) * Math.tan(conv_degree(local_declination))) * (180/Math.PI);        
        // Calcula o horário do nascer do sol (completo)
        var schedule_sunrise = 12 - (day_lenght/2);


        // Divide o horário nas suas respectivas divisões (hora, minuto e segundo)
        // Multiplica o número depois da vírgula por 60
        var hour_sunrise = Math.trunc(schedule_sunrise);
        var min_sunrise = (schedule_sunrise - hour_sunrise) * 60;
        var seg_sunrise = (min_sunrise - Math.trunc(min_sunrise)) * 60;

        // Saída (output)
        document.write("Horário do nascer do sol: ", hour_sunrise, "h ", Math.trunc(min_sunrise),"min ", Math.trunc(seg_sunrise), "s");
        corret_lati(this.getLongitude());

    }

    // Cálculos do pôr do sol
    Sunset(){

        // Converte GRAUS para RADIANOS
        function conv_degree(degree){
            return (degree * (Math.PI/180));
        }

        // Calcula a correção do horário de acordo com a latitude
        function corret_lati(longitude){
            // Calcula qual o fuso horário do usuário

            // Checa se o número é divisível por 15
            // Se for, retorna ele mesmo, se não for, retorna o número divisível mais próximo    
            var timezone = longitude + (15 - (longitude % 15)) % 15;

            if ((timezone - longitude) > 7.5){
                timezone -= 15;
            }

            // Calcula as diferenças
            var dif_Grau = longitude - timezone;
            var hour_dif = 0;
            var min_dif = (dif_Grau * 60) / 15;
            var seg_dif = Math.round((min_dif - Math.trunc(min_dif)) * 60);

            // Caso a soma entre 'seg_sunset' e 'seg_dif' sejam > 60, 'seg_dif' ficará negativo
            if ((Math.round(seg_sunset + seg_dif)) > 60){
                seg_dif -= 60;
            }

            // Caso a soma entre 'min_sunrise' e 'min_dif' seja > 59, +1 será adicionado na 'hour_dif' e -60 do 'min_dif'
            if (Math.trunc(min_sunset + min_dif) > 59){
                hour_dif += 1;
                min_dif -= 60;
            }

            // Calcula o horário definitivo, somando as variáveis 'originais' com a da 'diferença'
            // Além de aplicar a função módulo matemático
            var hora_Final =  Math.abs(hour_sunset + hour_dif);
            var min_Final =  Math.abs(Math.trunc(min_sunset + min_dif));
            var seg_Final = Math.abs(Math.round(seg_sunset + seg_dif));

            // Saída (output)
            document.write("<br> Horário corrigido: ", hora_Final, "h ", min_Final, "min ", seg_Final, "s <br>");
            
        }

        // Calcula a declinação do local
        var local_declination = 23.45 * Math.sin(conv_degree((360/365)*(284 + this.getSequential_day())));
        // Calcula a duração do dia
        var day_lenght = 2/15 * Math.acos(-Math.tan(conv_degree(this.getLatitude())) * Math.tan(conv_degree(local_declination))) * (180/Math.PI);
        // Calcula o horário do nascer do sol (completo)
        var schedule_sunset = 12 + (day_lenght/2);

        // Divide o horário nas suas respectivas divisões (hora, minuto, segundo)
        // Multiplica o número depois da vírgula por 60
        var hour_sunset = Math.trunc(schedule_sunset);
        var min_sunset = (schedule_sunset - hour_sunset) * 60;
        var seg_sunset = (min_sunset - Math.trunc(min_sunset)) * 60;

        // Saída (output)
        document.write("Horário do pôr do sol: ", hour_sunset, "h ", Math.trunc(min_sunset),"min ", Math.round(seg_sunset), "s");
        corret_lati(this.getLongitude());
        
    }

    // Métodos Getters e Setters

        // Latitude
    getLatitude() {
        return this.latitude;
    }
    setLatitude(x) {
        this.latitude = x;
    }

        // Longitude
    getLongitude() {
        return this.longitude;
    }
    setLongitude(x) {
        this.longitude = x;
    }

        // Dia_ano
    getSequential_day() {
        return this.sequential_day;
    }
    setSequential_day(x) {
        this.sequential_day = x;
    }
}