//Essa Função irá efetuar os calculos do Nascer e do Por do sol\\
class Calc{
    //Esse metodo irá pegar os imput
    constructor(longi, lati, dia, mes1){
        //declara 2 atributos\\
        this.longitude = longi;
        this.latitude = lati;

        //vai adicionar cada variavel um numero para que elas possam ser calculadas quantos Dias do ano valem cada Mes de 2021\\
        //Isso é um emproviso e deverá ser mudado para que possa ser modificado para qualquer ano
        
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
        var fev = 31;
        var abr = 31;
        var mar = 28;
        var mai = 30;
        var jun = 31;
        var jul = 30;
        var ago = 30;
        var set = 31;
        var out = 30;
        var nov = 31;
        var dez = 30;
        
        var jan =+ 0;        
        var fev =+ jan;
        var abr =+ mar;
        var mar =+ mai;
        var mai =+ jun;
        var jun =+ jul;
        var jul =+ ago;
        var ago =+ set;
        var set =+ out;
        var out =+ nov;
        var nov =+ dez;
        var dez =+ 30;
        

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
        this.dia_ano = dia + mes; //Aqui ele pega o ultimo imput que seria qual é o dia do ano EXATO de 2021
    } 
    //Caculos do nascer do Sol
    Nascer_Sol(){
        var declinição_terra = 23.45 *((360/365)*(284 + this.getDia_ano()));
        var T = 2/15 * ((this.getLatitude()) * (declinição_terra));

        var a = T/2;
        var horas_nasc = 12 - a;
        //var horas_por = 12 + a;

        var min_nasc = 0.424129 * horas_nasc;
        var seg_nasc = 44774 * 60;

        //var min_por = 0.57587*60;
        //var seg_por = 0.552233*60;
        document.write(horas_nasc, "<br>", min_nasc,"<br>", seg_nasc).innertext;
    }


    //Metodos Getters e Setters

        //longitude
    getLongitude(){
        return this.longitude;
    }
    setLongitude(x){
        this.longitude = x;
    }

        //latitude
    getLatitude(){
        return this.latitude;
    }
    setLatitude(x){
        return this.latitude;
    }

        //dia_ano
    getDia_ano(){
        return this.dia_ano;
    }
    setDia_ano(x){
        this.dia_ano = x;
    }
}