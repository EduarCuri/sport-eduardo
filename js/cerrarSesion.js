/**
  * "Cuando el usuario haga clic en el botón con el id de 'salirAdmi', el navegador redirigirá al usuario a
  * la página con la url de 'http://127.0.0.1:5500/pages/inicio_sesion.html'."
  * </código>
  */
function salirAdmi(){
    window.location.href = "http://127.0.0.1:5500/pages/inicio_sesion.html"
}

/* Agregar un detector de eventos al elemento con el id de 'Salir' y cuando el usuario haga clic en él,
llamará a la función 'salirAdmi()'. */
let salir = document.getElementById("Salir")
salir.addEventListener("click", (e) => {
    e.preventDefault()
    salirAdmi()
})
