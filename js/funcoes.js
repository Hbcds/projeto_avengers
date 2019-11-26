//Ambientação de cores - mudança

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

//validação de CPF
//---------------------------------------------------------------------------------------verifica cpf
	//Link para validar CPF: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
	function validacaocpf(receberCpf){
		var cpf = receberCpf;
		var Soma;
		var Resto;
		Soma = 0;
		resultadoInvalido = "";	
		
		if (cpf == "00000000000" || 
			cpf == "11111111111" || 
			cpf == "22222222222" || 
			cpf == "33333333333" || 
			cpf == "44444444444" || 
			cpf == "55555555555" || 
			cpf == "66666666666" || 
			cpf == "77777777777" || 
			cpf == "88888888888" || 
			cpf == "99999999999")//return false;
		{
			alert("O CPF é inválido, pois está preenchido com " + cpf);
			resultadoInvalido = "inválido";
			return false;
		}
		
		for (i=1; i<=9; i++) 
		{
			Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
		
		}
		Resto = (Soma * 10) % 11;
			
		if ((Resto == 10) || (Resto == 11))  
		{
			Resto = 0;
			return false;
		}
		
		if (Resto != parseInt(cpf.substring(9, 10)) ) //return false;
		{
			alert("O número do CPF é inválido");
			resultadoInvalido = "inválido";
			return false;
		}
	   
		Soma = 0;
		for (i = 1; i <= 10; i++){
		Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
		}
		Resto = (Soma * 10) % 11;
	   
		if ((Resto == 10) || (Resto == 11))
		{
			Resto = 0;
			return false;
		}
		
		if (Resto != parseInt(cpf.substring(10, 11) ) ) //return false;
		{
			alert("O número do CPF é inválido");
			resultadoInvalido = "inválido";
			return false;
		}
	}
	
	//Validação de cep 

	function limpa_formulário_cep() {
    document.getElementById('srtCep').value = ("");
    document.getElementById('srtEndereco').value = ("");
    document.getElementById('srtBairro').value = ("");
    document.getElementById('srtCidade').value = ("");
    document.getElementById('srtEstado').value = ("");
    document.getElementById("msgCep").innerHTML = "";
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('srtEndereco').value = (conteudo.logradouro);
        document.getElementById('srtBairro').value = (conteudo.bairro);
        document.getElementById('srtCidade').value = (conteudo.localidade);
        document.getElementById('srtEstado').value = (conteudo.uf);
        document.getElementById("msgCep").innerHTML = "<font color='green'>CEP válido!!</font>";
    } else {
        limpa_formulário_cep();
        document.getElementById("msgCep").innerHTML = "<font color='red'>CEP não encontrado!!</font>";
        //alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');
    if (cep != "") {
        var validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
            document.getElementById('srtEndereco').value = "...";
            document.getElementById('srtBairro').value = "...";
            document.getElementById('srtCidade').value = "...";
            document.getElementById('srtEstado').value = "...";
            //document.getElementById('ibge').value = "...";
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        } else {
            limpa_formulário_cep();
            document.getElementById("msgCep").innerHTML = "<font color='red'>CEP Inválido!!</font>";
            alert("Formato de CEP inválido.");
        }
    } else {
        limpa_formulário_cep();
    }
}
//Fim do Testador de CEP//
