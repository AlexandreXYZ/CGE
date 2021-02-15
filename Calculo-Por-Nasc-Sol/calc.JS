class Calc{

    // Esse metodo irá pegar as entradas (input)
    constructor(longi, lati, dia, mes1, bicesto=false){

        // Declara 3 atributos
        this.longitude = longi;
        this.latitude = lati;
        this.bicesto = bicesto

        // Cálculo que retorna o dia do ano. Ex: 108/365
        // Pode ser utilizado em qualquer ano, porém em anos bicestos é necessária a adição de um parâmetro 'true'.
        var janMax = 31;
        var abrMax = 31;
        if(this.bicesto == true){var fevMax=29}
        if(this.bicesto == false){var fevMax=28}
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

        this.day_year = dia + mes; // Fim do código, valor do dia vira um atributo.
    } 

    
    // Cálculos do nascer do sol
    Nascer_Sol(){

        // Função para conversão entre GRAUS para RADIANOS
        function conv_degree(degree){
            return (degree * (Math.PI/180));
        }

        function corret_lati(longitude){
            // Checa se o número é divisível por 15
            // Se for, retorna ele mesmo, se não for, retorna o número divisível mais próximo

            // Calcula qual o fuso horário do usuário
            var timezone = longitude + (15 - (longitude % 15)) % 15;

            if ((timezone - longitude) > 7.5){
                timezone = (timezone - 15);
            }

            // Calcula as diferenças
            var dif_Grau = longitude - timezone;
            var min_dif = (dif_Grau * 60) / 15;
            var seg_dif = (min_dif - Math.trunc(min_dif)) * 60;

            //document.write("minutos: ", min_por + min_dif, "<br>"); // ta certo
            //document.write("segundos: ", seg_por + seg_dif, "<br>"); // ta errado

        }


        //this.setLatitude(corret_lati(this.getLatitude(), 15));

        // Calcula a declinação da Terra
        var declination_earth = 23.45 * Math.sin(conv_degree((360/365)*(284 + this.getDia_ano())));
        // Calcula a duração do dia
        var T = 2/15 * Math.acos(-Math.tan(conv_degree(this.getLatitude())) * Math.tan(conv_degree(declination_earth))) * (180/Math.PI);
        var schedule_sunrise = 12 - (T/2); // Número completo

        var hour_sunrise = Math.trunc(schedule_sunrise);
        var min_sunrise = (schedule_sunrise - hour_sunrise) * 60;
        var seg_sunrise = (min_sunrise - Math.trunc(min_sunrise)) * 60;

        // Saída (output)
        document.write("Horário do nascer do sol: ", hour_sunrise, "h ", Math.trunc(min_sunrise),"min ", Math.trunc(seg_sunrise), "s");

    }

    // Cálculos do pôr do sol
    Por_Sol(){

        function conv_degree(degree){
            return (degree * (Math.PI/180));
        }

        function corret_lati(longitude){
            // Checa se o número é divisível por 15
            // Se for, retorna ele mesmo, se não for, retorna o número divisível mais próximo

            // Calcula qual o fuso horário do usuário
            var timezone = longitude + (15 - (longitude % 15)) % 15;

            if ((timezone - longitude) > 7.5){
                timezone = (timezone - 15);
            }

            // Calcula as diferenças
            var dif_Grau = longitude - timezone;
            var min_dif = (dif_Grau * 60) / 15;
            var seg_dif = (min_dif - Math.trunc(min_dif)) * 60;

            document.write("minutos: ", min_por + min_dif, "<br>"); // ta certo
            document.write("segundos: ", seg_por + seg_dif, "<br>"); // ta errado

        }

        this.setDia_ano(119);

        var declination_earth = 23.45 * Math.sin(conv_degree((360/365)*(284 + this.getDia_ano())));
        var T = 2/15 * Math.acos(-Math.tan(conv_degree(this.getLatitude())) * Math.tan(conv_degree(declination_earth))) * (180/Math.PI);
        var schedule_sunset = 12 + (T/2); // Número completo

        var hour_sunset = Math.trunc(schedule_sunset);
        var min_por = (schedule_sunset - hour_sunset) * 60;
        var seg_por = (min_por - Math.trunc(min_por)) * 60;

        corret_lati(this.getLongitude());

        // Saída (output)
        document.write("Horário do pôr do sol: ", hour_sunset, "h ", Math.trunc(min_por),"min ", Math.trunc(seg_por), "s");
        
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