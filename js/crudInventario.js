/**
  * Si los campos de imagen, nombre, cantidad o precio están vacíos, avise al usuario que todos los campos están vacíos.
  * requerido.
  * Si los campos de cantidad o precio son menores o iguales a cero, alertar al usuario que la cantidad y
  * el precio debe ser mayor que cero.
  * Si todos los campos están llenos y la cantidad y el precio son mayores a cero, alertar al usuario que
  * el producto ha sido editado.
  */
function validarInventarioEditar(){
    if(document.getElementById("imagenE").value == ""
    || document.getElementById("nombreE").value == "" || document.getElementById("cantidadE").value == ""
    || document.getElementById("precioE").value == "" ){
        alert("Todos los campos son obligatorios");
    }else{
        if(document.getElementById("cantidadE").value <= 0){
            alert("La cantidad debe ser mayor que cero")
        }
        if(document.getElementById("precioE").value <= 0){
            alert("El precio debe ser mayor que cero")
        }else{
            alert("Producto editado")
        }
        
    }
}

/**
  * Si el usuario no llena todos los campos, o si ingresa una cantidad o precio menor
  * mayor o igual a cero, entonces se mostrará una alerta. De lo contrario, el usuario será alertado de que el
  * producto ha sido añadido.
  */
function validarInventarioAgregar(){
    if(document.getElementById("codigoA").value == "" || document.getElementById("imagenA").value == ""
    || document.getElementById("nombreA").value == "" || document.getElementById("cantidadA").value == ""
    || document.getElementById("precioA").value == "" ){
        alert("Todos los campos son obligatorios");
    }
    else{
        console.log(parseInt(document.getElementById("cantidadA").value))
        if(parseInt(document.getElementById("cantidadA").value) <= 0){
            alert("La cantidad debe ser mayor que cero")
        }
        if(parseFloat(document.getElementById("precioA").value) <= 0){
            alert("El precio debe ser mayor que cero")
        }
        else{
            alert("Producto agregado")
        }
        
    }
}

/* Un código JavaScript que se utiliza para validar el formulario. */
let btnAgregar = document.getElementById("btnAgregar");
let btnEditar = document.getElementById("btnEditar");
let btnEliminar = document.getElementsByClassName("btnEliminar");

btnAgregar.addEventListener("click", (e)=>{
    e.preventDefault();
    validarInventarioAgregar();
})
btnEditar.addEventListener("click", (e)=>{
    e.preventDefault();
    validarInventarioEditar();
})

for(let i = 0; i < btnEliminar.length; i++){
    btnEliminar[i].addEventListener("click", (e)=>{
        e.preventDefault();
        alert("Producto eliminado")
    })
}