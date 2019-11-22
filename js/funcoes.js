function botaocap() {
       document.getElementById("bd").style.background = "#100CE0";
	   document.getElementById("navs").style.background = "#FF0000";
}

function botaoiron() {
       document.getElementById("bd").style.background = "#FB0303";
	   document.getElementById("navs").style.background = "#FAE107";
	   document.getElementById("font").style.color = "black";
	   document.getElementById("font1").style.color = "black";
	   document.getElementById("font2").style.color = "black";
	   document.getElementById("font3").style.color = "black";
	   
}

function botaothor() {
       document.getElementById("bd").style.background = "#a5a5a5";
	   document.getElementById("navs").style.background = "#0000A8";
	   document.getElementById("font").style.color = "white";
	   document.getElementById("font1").style.color = "white";
	   document.getElementById("font2").style.color = "white";
	   document.getElementById("font3").style.color = "white";
}

function botaohulk() {
       document.getElementById("bd").style.background = "#037500";
	   document.getElementById("navs").style.background = "black";
	   document.getElementById("font").style.color = "white";
	   document.getElementById("font1").style.color = "white";
	   document.getElementById("font2").style.color = "white";
	   document.getElementById("font3").style.color = "white";
}

function botaoviuva() {
       document.getElementById("bd").style.background = "#C7620A";
	   document.getElementById("navs").style.background = "black";
	   document.getElementById("font").style.color = "white";
	   document.getElementById("font1").style.color = "white";
	   document.getElementById("font2").style.color = "white";
	   document.getElementById("font3").style.color = "white";
}

function botaogaviao() {
       document.getElementById("bd").style.background = "#8310A3";
	   document.getElementById("navs").style.background = "white";
	   document.getElementById("font").style.color = "black";
	   document.getElementById("font1").style.color = "black";
	   document.getElementById("font2").style.color = "black";
	   document.getElementById("font3").style.color = "black";
}

//modal
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Botão que acionou o modal
  var recipient = button.data('whatever') // Extrai informação dos atributos data-*
  // Atualiza o conteúdo do modal. Nós vamos usar jQuery, aqui. No entanto, você poderia usar uma biblioteca de data binding ou outros métodos.
  var modal = $(this)
  modal.find('.modal-title').text('Nova mensagem para ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

