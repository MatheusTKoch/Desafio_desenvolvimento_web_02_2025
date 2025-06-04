$(document).ready(function () {
  $("#mostrarMais").click(function () {
    $("#mais-dicas").slideToggle();

    const textoBotao = $(this).text();
    if (textoBotao === "Mostrar mais") {
      $(this).text("Mostrar menos");
    } else {
      $(this).text("Mostrar mais");
    }
  });
});
