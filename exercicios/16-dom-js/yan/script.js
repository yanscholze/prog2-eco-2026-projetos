const body = document.querySelector("body");
const btnClaro = document.querySelector("#btn-claro");
const btnEscuro = document.querySelector("#btn-escuro");

btnClaro.addEventListener("click", () => {
  body.style.backgroundColor = "white";
  body.style.color = "black";
});

btnEscuro.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  body.style.color = "white";
});