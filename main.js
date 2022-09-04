//alert("Hola mundo");

//const nombre = prompt("cual es su nombre");
//alert("Tu nombre es:" + nombre);

const nombre = document.getElementById ("Nombre");

const btn = document.getElementById("btn");
btn.addEventListener("click" , (e) => {
e.preventDefault();
 alert(nombre.value);
})



//const nombre = "Wanyer De Jesus";
//alert(nombre);