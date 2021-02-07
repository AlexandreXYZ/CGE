//Essa Função irá efetuar os calculos do Nascer e do Por do sol\\
class Calc{
    //Esse metodo irá pegar os imput
    constructor(longi, lati, dia, mes){
        //declara 2 atributos\\
        this.longitude = longi;
        this.latitude = lati;

        //vai adicionar cada variavel um numero para que elas possam ser calculadas quantos Dias do ano valem cada Mes de 2021\\
        //Isso é um emproviso e deverá ser mudado para que possa ser modificado para qualquer ano
        var jan = 0;        
        var fev = 31;
        var abr = 31 + mar;
        var mar = 28 + fev;
        var mai = 30 + abr;
        var jun = 31 + mai;
        var jul = 30 + jun;
        var ago = 30 + jul;
        var set = 31 + ago;
        var out = 30 + set;
        var nov = 31 + out;
        var dez = 30 + nov;

        if(mes == "jan"){mes = jan;}
        if(mes == "jan"){mes = fav;}
        if(mes == "mar"){mes = mar;}
        if(mes == "abr"){mes = abr;}
        if(mes == "mai"){mes = mai;}
        if(mes == "jun"){mes = jun;}
        if(mes == "jul"){mes = jul;}
        if(mes == "ago"){mes = ago;}
        if(mes == "set"){mes = set;}
        if(mes == "out"){mes = out;}
        if(mes == "nov"){mes = nov;}
        if(mes == "dez"){mes = dez;}
        this.dia_ano = dia + mes; //Aqui ele pega o ultimo imput que seria qual é o dia do ano EXATO de 2021
    }
    //Caculos do nascer do Sol
    Nascer_Sol(){
        var declinição_terra = 23.45 * Math.sin((360/365)*(284 + this.getDia_ano()));
        var T = 2/15 * Math.acos(Math.tan(this.getLatitude)*Math.tan(declinição_terra));

        var a = T/2;
        var horas_nasc = 12 - a;
        //var horas_por = 12 + a;

        var min_nasc = 0.424129 * horas_nasc;
        var seg_nasc = 44774 * 60;

        //var min_por = 0.57587*60;
        //var seg_por = 0.552233*60;
        document.write(horas_nasc, min_nasc, seg_nasc);
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