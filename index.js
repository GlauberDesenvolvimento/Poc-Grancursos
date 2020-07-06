var express = require('express'); 
var cons = require('consolidate');
var app = express();

app.engine('html', cons.swig);
app.set('view engine','html');
app.set('views',__dirname);
app.use(express.static(__dirname));

app.get('*',function(req,res){
  res.render('index')
});

var server = app.listen(3000);
console.log('Servidor Express iniciado na porta %s', server.address().port);
