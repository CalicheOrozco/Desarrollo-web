$(function(){    
    $('#countdown').countdown({
        timezone:-3, //zona horaria argentina
        
        //establecemos la fecha exacta en qué termina el countdown
        year: 2019,
        month: 4,
        day: 22,
        hour: 09, //formato 24hr
        minute:25,
        second:0,
        
        //Establecemos qué haremos luego que termina el countdown
        onFinish: function () { 
            alert("Finalizó el countdown");
        } 
    });
   
});