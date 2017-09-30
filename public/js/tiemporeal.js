
$( document ).ready(function() {
	$("#boton").on("click",function(){
		climaEnTiempoReal()
	})
});



var appId = "ff32f9c51a9964f8161e0fe4f4289cbf";

function climaEnTiempoReal(){

	var text = $("#entrada").val().trim();
	if (text.length > 0){
		$.get('http://api.openweathermap.org/data/2.5/weather?q='+text+'&appId='+ appId +'',
			function(data){
				$("#contenidoTiempoReal").empty();
				var cadena = '<h4 class="card-title">Cargando datos</h4>';
				$("#contenidoTiempoReal").html(cadena);

				console.log(data);
				console.log("Id Ciudad: "+data.id);
				console.log("Nombre Ciudad: "+data.name);
				console.log("Pais: "+data.sys.country);
				console.log("Descripcion del Clima: "+data.weather.description);
				console.log("Temperatura: "+data.main.temp);
				$("#contenidoTiempoReal").empty();
				cadena = "";
				cadena += '<h4 class="card-title">' + "Nombre Ciudad: "+data.name + '</h4>';
				cadena += '<p>' + "Id Ciudad: "+data.id + '</p>'
				cadena += '<p>' + "Pais: "+data.sys.country + '</p>';
				cadena += '<p>' + "Descripcion del Clima: "+data.weather[0].description + '</p>';
				cadena += '<p>' + "Temperatura: "+data.main.temp + '</p>';
				$("#contenidoTiempoReal").html(cadena);
			}
		);
	}

	
}