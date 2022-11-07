/**
* Si el valor de la entrada con el id "nombreA" está vacío, o el valor de la entrada con el id
  * "imagenA" está vacío, o el valor de la entrada con el id "correoA" está vacío, o el valor del
  * la entrada con el id "usuarioA" está vacía, o el valor de la entrada con el id "contraA" está vacío,
  * luego alerta al usuario que los campos no pueden estar vacíos. De lo contrario, si el valor de la entrada con el
  * id "correoA" no contiene un símbolo "@", entonces alerta al usuario que el correo electrónico debe contener un "@"
  * símbolo. De lo contrario, si el valor de la entrada con el id "contraA" es inferior a 8 caracteres, entonces
  * alertar al usuario que la contraseña debe tener al menos 8 caracteres. De lo contrario, avise al usuario de que el
  * usuario ha sido añadido.
 */
function validarCamposUsuariosAgregar(){
    if(document.getElementById("nombreA").value == "" ||  document.getElementById("imagenA").value == "" 
    ||  document.getElementById("correoA").value == ""|| document.getElementById("usuarioA").value == "" 
    || document.getElementById("contraA").value == ""){
        alert("LOS CAMPOS NO PUEDEN ESTAR VACIOS")
        console.log("LOS CAMPOS NO PUEDEN ESTAR VACIOS")
    }else if (document.getElementById("correoA").value.indexOf("@", 0) === -1) {
        alert("EL CORREO DEBE TENER UN ARROBA @")
        document.getElementById("correoA").value.focus()
    }else if (document.getElementById("contraA").value.length < 8) {
        alert("LA CONTRASEÑA DEBE TENER MINIMO 8 CARACTERES")
        document.getElementById("contraA").value.focus()
    }else{
        alert("USUARIO AGREGADO")
        
    }
}
/**
* Si el valor de la entrada con el id de "nombreE" está vacío, o el valor de la entrada con el id
  * de "imagenE" está vacío, o el valor de la entrada con el id de "correoE" está vacío, o el valor de
  * la entrada con id de "usuarioE" está vacía, o el valor de la entrada con id de "contraE" es
  * vacío, luego avise al usuario que los campos no pueden estar vacíos.
  *
  * Si el valor de la entrada con el id de "correoE" no contiene un símbolo "@", entonces avise al
  * usuario que el correo electrónico debe contener un símbolo "@".
  *
  * Si el valor de la entrada con el id de "contraE" es menor a 8 caracteres, entonces alertar al usuario
  * que la contraseña debe tener al menos 8 caracteres.
  *
  * Al final de agrega el usuario.
 */
function validarCamposUsuariosEditar(){
    if(document.getElementById("nombreE").value == "" ||  document.getElementById("imagenE").value == "" 
    ||  document.getElementById("correoE").value == ""|| document.getElementById("usuarioE").value == "" 
    || document.getElementById("contraE").value == ""){
        alert("LOS CAMPOS NO PUEDEN ESTAR VACIOS")
        
    }else if (document.getElementById("correoE").value.indexOf("@", 0) === -1) {
        alert("EL CORREO DEBE TENER UN ARROBA @")
        document.getElementById("correoE").value.focus()
    }else if (document.getElementById("contraE").value.length < 8) {
        alert("LA CONTRASEÑA DEBE TENER MINIMO 8 CARACTERES")
        document.getElementById("contraE").value.focus()
    }else{
        alert("USUARIO EDITADO")
        
    }
}



let btn_agregar = document.getElementById("btn_AgregarA")
let btn_editar = document.getElementById("btn_EditarA")
let btn_eliminar = document.getElementsByClassName("eliminarU")

/* Agregar un detector de eventos al botón con el id de "btn_AgregarA". Cuando se hace clic en el botón,
se evita que ocurra el evento y se llama a la función "validarCamposUsuariosAgregar()". */
btn_agregar.addEventListener("click", (e) => {
    e.preventDefault()
    
    validarCamposUsuariosAgregar()
})

/* Agregar un detector de eventos al botón con el id de "btn_EditarA". Cuando se hace clic en el botón, el
se evita que ocurra el evento y se llama a la función "validarCamposUsuariosEditar()". */
btn_editar.addEventListener("click", (e) => {
    e.preventDefault()
    validarCamposUsuariosEditar()
})

/* Este es un ciclo for que recorre la matriz de elementos con el nombre de clase de "eliminarU".
Para cada elemento de la matriz, se agrega un detector de eventos al elemento. Cuando el elemento es
se hace clic, se evita que suceda el evento y se muestra una alerta al usuario. */
for (let i = 0; i < btn_eliminar.length; i++) {
    btn_eliminar[i].addEventListener("click", (e) => {
        e.preventDefault()
        alert("USUARIO ELIMINADO")
    })
}

