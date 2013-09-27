var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
	response.send("Welcome to my blog, which features an absolute beginner's \
		experience about javascript and web development. starting here. now.");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});