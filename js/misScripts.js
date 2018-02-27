window.addEventListener('load',function() {		

/* 
	1)Cambiar Titulos 
*/

	var productosDestacados = document.querySelector("#destacados h5");
	productosDestacados.innerHTML = 'ARTICULOS DESTACADOS';

	var ultimosProductos = document.querySelector("#ultimos h5");
	ultimosProductos.innerHTML = 'ULTIMOS PRODUCTOS';


/*
	2)Asignarle la clase top al contenedor de art destacados
*/
	document.querySelector("#destacados > .products").classList.add("top");

/*
	3)cambiar texto de los botones ver mas
*/
	var changeBotton = document.querySelectorAll(".verMas");
	for (var i=0; i < changeBotton.length; i++) {
		changeBotton[i].innerHTML = "VER +";

	}
	
/*
	4) agregar las imagenes
*/
	var imagen = document.querySelectorAll("img");
			imagen.forEach(function(image,i){
				image.src='images/productos/P00' + (i+1) + '.jpg';
			});

	});