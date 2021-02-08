class Calc{

    // Esse metodo irá pegar os input
    constructor(longi, lati, dia, mes1, bicesto=false){

        // Declara 3 atributos
        this.longitude = longi;
        this.latitude = lati;
        this.bicesto = bicesto

        //Calculo que diz qual é o dia do ano que estamo exemplo: 108/365
        //Ele foi feito capaz de ser usado qualquer ano, pois a diferença é o ano bicesto que se não colocar nenhum parametro ou false
        //É considerado como não ano bicesto e se colocar TRUE ele é considerado ano bicesto
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

        this.dia_ano = dia + mes; // Fim do codigo, ele colocar o Valor do dia do ano em um Atributo
    } 

    
    // Cálculos do nascer do sol
    Nascer_Sol(){

        function conv_Grau(grau){
            return (grau * (Math.PI/180));
        }

        function corret_lati(latitude, divisor){
            // Checa se o número é divisível pelo 'divisor';
            // Se for, retorna ele mesmo, se não for, retorna o número divisível mais próximo

            var num = latitude + (divisor - (latitude % divisor)) % divisor;

            if ((num - latitude) > 7.5){
                return (num - 15);
            }
            else{
                return num;
            }
        }

        //this.setLatitude(corret_lati(this.getLatitude(), 15));
//this.setDia_ano(119); eu botei essa linha como comentario pra te dizer que era só botar o dia como bicesto, não precisa desse SET, abraços e quanado ler isso, apague essa linda


        var declinacao_terra = 23.45 * Math.sin(conv_Grau((360/365)*(284 + this.getDia_ano())));
        var T = 2/15 * Math.acos(-Math.tan(conv_Grau(this.getLatitude())) * Math.tan(conv_Grau(declinacao_terra))) * (180/Math.PI);
        var horario_nasc = 12 - (T/2); // Número completo

        var hora_nasc = Math.trunc(horario_nasc);
        var min_nasc = (horario_nasc - hora_nasc) * 60;
        var seg_nasc = (min_nasc - Math.trunc(min_nasc)) * 60;

        // Saída (output)
        document.write("Horário do nascer do sol: ", hora_nasc, "h ", Math.trunc(min_nasc),"min ", Math.trunc(seg_nasc), "s");

    }

    // Cálculos do pôr do sol
    Por_Sol(){

        function conv_Grau(grau){
            return (grau * (Math.PI/180));
        }

        function corret_lati(longitude){
            // Checa se o número é divisível por 15
            // Se for, retorna ele mesmo, se não for, retorna o número divisível mais próximo

            // Calcula qual o fuso horário do usuário
            var fuso = longitude + (15 - (longitude % 15)) % 15;

            if ((fuso - longitude) > 7.5){
                fuso = (fuso - 15);
            }

            // Calcula as diferenças
            var dif_Grau = longitude - fuso;
            var min_dif = (dif_Grau * 60) / 15;
            var seg_dif = (min_dif - Math.trunc(min_dif)) * 60;

            document.write("minutos: ", min_por + min_dif, "<br>"); // ta certo
            document.write("segundos: ", seg_por + seg_dif, "<br>"); // ta errado

        }

        this.setDia_ano(119);

        var declinacao_terra = 23.45 * Math.sin(conv_Grau((360/365)*(284 + this.getDia_ano())));
        var T = 2/15 * Math.acos(-Math.tan(conv_Grau(this.getLatitude())) * Math.tan(conv_Grau(declinacao_terra))) * (180/Math.PI);
        var horario_por = 12 + (T/2); // Número completo

        var hora_por = Math.trunc(horario_por);
        var min_por = (horario_por - hora_por) * 60;
        var seg_por = (min_por - Math.trunc(min_por)) * 60;

        corret_lati(this.getLongitude());

        // Saída (output)
        document.write("Horário do pôr do sol: ", hora_por, "h ", Math.trunc(min_por),"min ", Math.trunc(seg_por), "s");
        
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
        return this.dia_ano;
    }
    setDia_ano(x){
        this.dia_ano = x;
    }
}