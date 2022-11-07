function validarInformacion() {
    if (document.formularioInicioSesion.correo.value === "") {
        alert("INGRESE UN CORREO VALIDO")
        document.formularioInicioSesion.correo.focus()
        return false
    }
    if (
        document.formularioInicioSesion.correo.value === "" ||
        document.formularioInicioSesion.correo.value.indexOf("@", 0) === -1
    ) {
        alert("EL CORREO DEBE TENER UN ARROBA @")
        document.formularioInicioSesion.correo.focus()
        return false
    }
    alert("DATOS VALIDADOS CORRECTAMENTE")
}

//inicio sesion
function validarInicioSesion() {
    /* Verificar si la entrada está vacía y si lo está, alertará al usuario para que ingrese un correo electrónico válido. */
    if (document.formularioInicioSesion.correo.value === "") {
        alert("EL CAMPO DEL CORREO ESTA VACIO")
        document.formularioInicioSesion.correo.focus()
    }
    /* Verificar si el campo de contraseña está vacío y si lo está, alertará al usuario para que ingrese una contraseña válida. */
    else if (document.formularioInicioSesion.contrasenia.value === "") {
        alert("EL CAMPO DE LA CONTRASEÑA ESTA VACIO")
        document.formularioInicioSesion.contrasenia.focus()
    }
    /* Comprobando si ambos campos están vacíos. */
    else if (document.formularioInicioSesion.contrasenia.value === "" && document.formularioInicioSesion.correo.value === "") {
        alert("LOS CAMPOS NO PUEDEN ESTAR VACIOS")
        document.formularioInicioSesion.contrasenia.focus()
    }
    /* Comprobando si el correo electrónico tiene un símbolo @. */
    else if (document.formularioInicioSesion.correo.value.indexOf("@", 0) === -1) {
        alert("EL CORREO DEBE TENER UN ARROBA @")
        document.formularioInicioSesion.correo.focus()
    } 
    /* Comprobando si la contraseña tiene menos de 8 caracteres. */
    else if (document.formularioInicioSesion.contrasenia.value.length < 8) {
        alert("LA CONTRASEÑA DEBE TENER MINIMO 8 CARACTERES")
        document.formularioInicioSesion.contrasenia.focus()
    }
    else {
        let correo = document.formularioInicioSesion.correo.value
        let contrasena = document.formularioInicioSesion.contrasenia.value
        /* Comprobando si el correo electrónico y la contraseña son correctos. Si lo son, se redirigirá al administrador.
         tablero. Si no lo son, alertará al usuario de que los datos no coinciden. */
        if(correo =="administrador@gmail.com" && contrasena =="administrador"){
            window.location.href = "http://127.0.0.1:5500/administrador/dashboard.html"
        }else{
            alert("LOS DATOS NO COINCIDEN")
        }
    } 
} 




/**
* Si el campo de nombre está vacío o el campo de comentario está vacío, avise al usuario para que complete los campos. Si
  * el campo de nombre no está vacío y contiene un número, alerta al usuario que el campo de nombre no puede contener
  * números. Si el campo de nombre no está vacío y no contiene un número, avise al usuario que el
  * comentario ha sido enviado.
  * @devuelve un valor booleano.
 */
function validarComentario() {
    let palabra = document.getElementById("nombreComentario").value
    let comentario = document.getElementById("textoComentario").value

    if (palabra === "" || comentario === "") {
        alert("Debe completar los campos")
        if (
            palabra != "" &&
            (palabra.indexOf("1") != -1 ||
                palabra.indexOf("2") != -1 ||
                palabra.indexOf("3") != -1 ||
                palabra.indexOf("4") != -1 ||
                palabra.indexOf("5") != -1 ||
                palabra.indexOf("6") != -1 ||
                palabra.indexOf("7") != -1 ||
                palabra.indexOf("8") != -1 ||
                palabra.indexOf("9") != -1 ||
                palabra.indexOf("0") != -1)
        ) {
            alert("No debe incluir numeros en el nombre")
            return false
        }
        return false
    } else {
        if (
            palabra != "" &&
            (palabra.indexOf("1") != -1 ||
                palabra.indexOf("2") != -1 ||
                palabra.indexOf("3") != -1 ||
                palabra.indexOf("4") != -1 ||
                palabra.indexOf("5") != -1 ||
                palabra.indexOf("6") != -1 ||
                palabra.indexOf("7") != -1 ||
                palabra.indexOf("8") != -1 ||
                palabra.indexOf("9") != -1 ||
                palabra.indexOf("0") != -1)
        ) {
            alert("No debe incluir numeros en el nombre")
            return false
        } else {
            alert("Comentario enviado")
            return true
        }
    }
}

/* Agregar un detector de eventos al botón con el id "ingresar" y cuando se hace clic en el botón,
prevendrá la acción por defecto y llamará a la función validarInicioSesion() */
let ingresar = document.getElementById("ingresar")

ingresar.addEventListener("click", (e) => {
    e.preventDefault()
    validarInicioSesion()
})


