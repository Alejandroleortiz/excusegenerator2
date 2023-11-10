window.onload = function () {
  // Código a ejecutar cuando la página ha cargado completamente
  
};

window.onload = excuseGenerator = () => {
  let who = ["El perro 🐶", "Mi abuela 👵", "El cartero", "Mi pájaro 🐦‍⬛"];
  let action = ["se comió 🌮", "orinó 💦", "aplastó 🫠", "rompió 😭"];
  let what = ["mi tarea", "mi móvil", "el auto"];
  let when = [
    "antes de la clase",
    "mientras dormía 💤",
    "mientras hacía ejercicio 🏋️",
    "durante mi almuerzo",
    "mientras rezaba🙏",
  ];

  
  document.querySelector("#excuse").innerHTML = who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)]
  
};
