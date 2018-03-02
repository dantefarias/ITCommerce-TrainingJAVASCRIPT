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


/*
	------- FASE 03 -------
*/
	var ajax;
	var pagina = document.querySelector("#page");
	var link = document.querySelectorAll("#menu a");
	

	link.forEach(function (elem,i) {
		link[i].addEventListener('click', realizarPeticion);
	});

	

	function realizarPeticion(e) {
		e.preventDefault();
		ajax = new XMLHttpRequest();
		ajax.open('GET', e.target.href);
		ajax.addEventListener('load', cargarRespuesta);
		ajax.send();
	}

	function cargarRespuesta() {
		if (this.status == 200) {
			console.log(ajax.responseText);
			pagina.innerHTML = ajax.responseText;
			crearNodoScript();
		} else {
			pagina.innerHTML = "<span class=" + "error" + 
			">Lo sentimos, Contenido no disponible :( </span>";
		}
		
	}

	function crearNodoScript() {
		
		var nuevoScript = document.createElement("script"); 
		var actualSrcScript = document.querySelectorAll("body > script");
		var originalScriptFromPage = document.querySelector("#page script");
		
		var cont = 0;
		//TENGO QUE BORRAR TODA ESTA VALIDACION PORQUE NO FUNCIONA SINO
		//vemos si existe un script en mi page cargado por ajax y de existir me fijo
		//que no este repetido en el body
		
		if (originalScriptFromPage != null) {
			actualSrcScript.forEach(function(elem,i) {
				if (actualSrcScript[i].src != originalScriptFromPage.src) {
					console.log(actualSrcScript[i]);
					console.log(originalScriptFromPage)
					cont++;
				}	
			});
			//Si no esta repetido en el body lo asigno a mi body
			if ( cont == actualSrcScript.length) {
				nuevoScript.src = originalScriptFromPage.src
				page.querySelector("script").remove();	
				document.body.appendChild(nuevoScript);	
			}
		}
	}
	

});