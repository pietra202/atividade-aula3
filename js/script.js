trocatema = () => {
  //alert("mudei o tema")

  // document.querySelector("body").style.background = "pink"

  document.documentElement.classList.toggle("light");

  const islight = document.documentElement.classList.contains("light");

  const imagem = islight ? "../img/perfil.jpg" : "../img/perfilDarkMode.jpg";

  document.querySelector("#perfil img").setAttribute("src", imagem);
};
