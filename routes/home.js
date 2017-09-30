module.exports = function(app){

	app.get("/",function(req,res){
		res.render("home");
	});

	app.get("/infoClima",function(req,res){
		res.render("infoClima");
	});

	app.post("/infoClima",function(req,res){
		var tipo = req.body.tipo;
		res.render("infoClima",{
			tipo:tipo
		});
	});

}