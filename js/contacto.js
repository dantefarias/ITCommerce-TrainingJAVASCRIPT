
window.addEventListener('load', function() {

	var campoNombre = document.querySelector("input[name^=nombre]");
	var campoEmail = document.querySelector("input[name^=email]");
	var campoMensaje = document.querySelector("textarea[name^=mensaje]");
	var formSubmit = document.querySelector("form");

	campoNombre.onblur = checkNombre; 
	campoEmail.onblur = checkEmail;
	campoMensaje.onblur = checkMensaje;
	formSubmit.onsubmit = checkForm;

	function checkNombre() {
		campoNombre.classList.remove("ok", "error");
		if (campoNombre.value.length < 5) {
			
			campoNombre.value = "";
			campoNombre.focus();
			campoNombre.classList.add("error");
			return false;
					
		} else if (!isNaN(campoNombre.value[0])) {
			
			campoNombre.value = "";
			campoNombre.classList.add("error");
			return false;
		} else {
			campoNombre.classList.add("ok");
			return true;
		}
	}
	
	function checkEmail() {
		campoEmail.classList.remove("ok", "error");
		var emailTest = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
		if ( emailTest.test(campoEmail.value) ) {
			campoEmail.classList.add("ok");
			return true;
		} else {
			
			campoEmail.value = "";
			campoEmail.classList.add("error");
			campoEmail.focus();
			return false;
		}
	}
	
	function checkMensaje() {
		campoMensaje.classList.remove("ok", "error");
		var tamanoMensaje = campoMensaje.value.length;
		console.log(tamanoMensaje);
		if (0 < tamanoMensaje && tamanoMensaje < 200) {
			campoMensaje.classList.add("ok");
			return true;
		} else {
			campoMensaje.classList.add("error");
			return false;
		}
	}

	function checkForm(e) {
		e.preventDefault();

		if (checkNombre()) {
			if (checkEmail()) {
				if (checkMensaje()) {
					e.target.submit();
					alert("El formulario ha sido enviado con exito!");
					
					
				} else {
					
					alert("Revisa tu mensaje");
				}
			} else {
				
				alert("Revisa tu email");
			}
		} else {
			alert("REvisa tu nombre");
		}
		

	}
	
});
	