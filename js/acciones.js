// JavaScript Document

$(document).ready(function (e){
	document.addEventListener("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.vercion);
		$('#disp table td').eq(11).text(device.uuid);
	document.addEventListener("pause",function(){
			escribehistoria("La app se pausó");
	},false);//pause
	document.addEventListener("resume",function(){
		escribehistoria("La app se reinició");
	},false);//reinició
	document.addEventListener("online",function(){
		escribehistoria("La app se conecto a la red");
	},false);//online
	document.addEventListener("offline",function(){
		escribehistoria("la app se desconecto de la red");
	},false);//offline
	
	},false);//ready device 
	
});//document

function escribehistoria(accion){
	$('eHistoria').append('<li>'+accion+'</li>');
}
