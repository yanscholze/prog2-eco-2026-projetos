const dark = document.querySelector("#btn-dark");
const light = document.querySelector("#btn-light");
const body=document.querySelector("body");

  dark.addEventListener("click", () => {
    body.style.backgroundColor = "#000";
    body.style.color="#ffff";
  });
  light.addEventListener("click", () => {
    body.style.backgroundColor = "#fff";
    body.style.color="#000";
  });

