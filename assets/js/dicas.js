$(document).ready(function () {
  $("#mostrarMais").click(function () {
    $("#maisDicas").slideToggle();

    const textoBotao = $(this).text();
    if (textoBotao === "Mostrar mais") {
      $(this).text("Mostrar menos");
    } else {
      $(this).text("Mostrar mais");
    }
  });
});
