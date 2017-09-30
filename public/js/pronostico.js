$( document ).ready(function() {
	$("#boton").on("click",function(){
		pronostico()
	})
});



var appId = "ff32f9c51a9964f8161e0fe4f4289cbf";

function pronostico(){


	var text = $("#entrada").val().trim();

	if (text.length > 0){

		$.get('http://api.openweathermap.org/data/2.5/forecast?q='+ text +'&&appid='+ appId +'',
			function(data){
				$("#contenidoTabla").empty();
				console.log(data)
				console.log("Nombre Ciudad: "+data.city.name);
				console.log("Pais: "+data.city.country);

				var cadena = "";

				for(var i = 0; i < data.list.length; i++){
					//console.log(data.list[i])
					cadena += "<tr>";
					cadena += "<td>" + data.city.name + "</td>";
					cadena += "<td>" + data.city.country + "</td>";
					cadena += retornaCadenaPorRow(data.list[i]);
					cadena += "</tr>";
				}

				$("#contenidoTabla").empty();
				$("#contenidoTabla").html(cadena);


			}
		);
	}
	
}

function retornaCadenaPorRow(obj){
	var cadena = "";
	cadena += "<td>" + obj.dt_txt + "</td>";
	cadena += "<td>" + obj.main.temp + "</td>";
	cadena += "<td>" + obj.weather[0].description + "</td>";
	return cadena;
}