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
