$( document ).ready(function() {
	$("#boton").on("click",function(){
		historico()
	})
});

var appId = "ff32f9c51a9964f8161e0fe4f4289cbf";

function historico(){

	var text = $("#entrada").val().trim();

	if (text.length > 0){

		$.get('https://history.openweathermap.org/data/2.5/history/city?q='+ text +'&&appid='+ appId +'',
			function(data){
				console.log(data)

				var cadena = "";

				$("#contenidoTabla").empty();
				$("#contenidoTabla").html(cadena);


			}
		);
	}	
}