// Cargar el contenido del footer desde el archivo footer.html
fetch("footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("footer-container").innerHTML = html;
  });