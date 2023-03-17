

document.getElementById("bt_hobbies").addEventListener("click",function(){
    document.getElementById("carouselExampleIndicators").style.display = "block";
})

document.getElementById("Datos_personales").addEventListener("click",function(){
    document.getElementById("Datos").style.color = "red";
let nombre = "Juan";
let apellido = "Perez";
let email = "juanPerez@gmail.com";
let telefono ="343-32432543"
document.getElementById("d1").innerHTML = `mi Nombre es ${nombre}`;
document.getElementById("d2").innerHTML = `mi apellido es ${apellido}`;
document.getElementById("d3").innerHTML = `mi email es ${email}`;
document.getElementById("d4").innerHTML = `mi telefono es ${telefono}`;
})

document.getElementById("Experiencia").addEventListener("click",function(){
    document.getElementById("Datos").style.color = "#0000ff";
let experiencia1 = "2 años trabajados en MercadoLibre";
let experiencia2 = "1 año de asistente en catedra de programacion en Washington DC";
let experiencia3 = "Proyecto de videojuegos modelo unity para Cartoon Network";
let experiencia4 = "Participacion en jornada de nuevos programadores por la universidad de Oxford";

document.getElementById("d1").innerHTML = experiencia1;
document.getElementById("d2").innerHTML =  experiencia2;
document.getElementById("d3").innerHTML = experiencia3;
document.getElementById("d4").innerHTML = experiencia4;


})

document.getElementById("Habilidades").addEventListener("click",function(){
    document.getElementById("Datos").style.color = "green";
let habilidad1 = "Poseo Habilidades intermedia-avanzadas en el idioma ingles";
let habilidad2 = "Tengo conocimientos basicos de c++, javaScript , html y css";
let habilidad3 = "mis habilidades de comuncacion social son fluidas y me motiva trabajar en grupos";
let habilidad4 = "Gran predisposicion a aprender y buen desempeño laboral";

document.getElementById("d1").innerHTML = habilidad1;
document.getElementById("d2").innerHTML = habilidad2;
document.getElementById("d3").innerHTML = habilidad3;
document.getElementById("d4").innerHTML = habilidad4;


})