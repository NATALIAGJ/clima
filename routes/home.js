module.exports = function(app){

	app.get("/",function(req,res){
		res.render("home");
	});

	app.get("/infoClima",function(req,res){
		res.render("infoClima");
	});

	app.get("/tiempoReal",function(req,res){
		res.render("tiempoReal");
	});

	app.get("/pronostico",function(req,res){
		res.render("pronostico");
	});

	app.get("/historico",function(req,res){
		res.render("historico");
	});

}