// http
 var http = require("http");
 var PORT = process.env.PORT || 3000;
 var IP = process.env.IP || '127.0.0.1';
 if(IP == '127.0.0.1'){
     console.log(">---Ejecuntando modo local---<");
 }
 // Crear un servidor basico
 var server = http.createServer(function(req, res){
     // Armar la respuesta http
     // Armar un encabezado http
     res.writeHead(200,{
         "Content-Type" : "text/plain",
         "Server" : "ITGAM@4.2.4"
     });
     // Enviamos la respuesta
     res.write("Servidor de Ivan Luky diamon");
     // Cerrar la conexion
     res.end();
 });
 // Poner a trabjar al server
 server.listen(PORT,IP,function(){
     console.log(`> Server listening @http://${IP}:${PORT} ...`);
 });
 ///este es un comentario sin importancia 