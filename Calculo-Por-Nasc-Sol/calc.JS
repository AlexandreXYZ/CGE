class Calc{
    // Esse metodo irá pegar os input

    constructor(longi, lati, dia, mes1){

        // Declara 2 atributos
        this.longitude = longi;
        this.latitude = lati;

        // Vai adicionar cada variável um número para que elas possam ser calculadas quantos Dias do ano valem cada Mes de 2021\\
        // Isso é uma gambiarra e deverá ser mudado para que possa ser modificado para qualquer ano
        
        var janMax = 31;
        var fevMax = 28;
        var abrMax = 31;
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

        this.dia_ano = dia + mes; // Aqui ele pega o último input que seria qual é o dia do ano EXATO de 2021
    } 

    // Cálculos do nascer do sol
    Nascer_Sol(){

        function conv_Grau(grau){
            return (grau * (Math.PI/180));
        }


        this.setDia_ano(119);

        var declinacao_terra = 23.45 * Math.sin(conv_Grau((360/365)*(284 + this.getDia_ano())));
        var T = 2/15 * Math.acos(-Math.tan(conv_Grau(this.getLatitude())) * Math.tan(conv_Grau(declinacao_terra))) * (180/Math.PI);
        var horario_nasc = 12 - (T/2); // Número completo

        var hora_nasc = Math.trunc(horario_nasc);
        var min_nasc = (horario_nasc - hora_nasc) * 60;
        var seg_nasc = (min_nasc - Math.trunc(min_nasc)) * 60;

        document.write("Horas: ", hora_nasc, "<br>Minutos: ", Math.trunc(min_nasc),"<br>Segundos: ", Math.trunc(seg_nasc), "<br>");
        document.write("<br> <br>");
    }

    // Cálculos do pôr do sol
    Por_Sol(){

        function conv_Grau(grau){
            return (grau * (Math.PI/180));
        }


        this.setDia_ano(119);

        var declinacao_terra = 23.45 * Math.sin(conv_Grau((360/365)*(284 + this.getDia_ano())));
        var T = 2/15 * Math.acos(-Math.tan(conv_Grau(this.getLatitude())) * Math.tan(conv_Grau(declinacao_terra))) * (180/Math.PI);
        var horario_por = 12 + (T/2); // Número completo

        var hora_por = Math.trunc(horario_por);
        var min_por = (horario_por - hora_por) * 60;
        var seg_por = (min_por - Math.trunc(min_por)) * 60;

        document.write("Horas: ", hora_por, "<br>Minutos: ", Math.trunc(min_por),"<br>Segundos: ", Math.trunc(seg_por), "<br>");
        document.write("<br> <br>");
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