// http
 var http = require("http");
 // Crear un servidor basico
 var server = http.createServer(function(req, res){
     // Armar la respuesta http
     // Armar un encabezado http
     res.writeHead(200,{
         "Content-Type" : "text/plain",
         "Server" : "ITGAM@4.2.4"
     });
     // Enviamos la respuesta
     res.write("Este es el primer servidor funcionando ");
     // Cerrar la conexion
     res.end();
 });
 // Poner a trabjar al server
 server.listen(3000,'127.0.0.1',function(){
     console.log("> Server listening @http://localhost:3000 ...");
 });
 ///este es un comentario sin importancia 