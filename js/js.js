var casa = '';

function imprimirPergunta(){

	var perguntaHTML = '',
	    perguntaAleatoria = 0, 
	    qtdPerguntas = 0,
	    ordemDasPerguntas = [],
	    gerarOrdem = 0;

	/* Define a quantidade de perguntas que o array quiz irá ter -1 */
	qtdPerguntas = 12 ;

	/* Perguntas do jogo 

	   As perguntas do jogo estão num array chamado quiz que está
	   no scopo globo da aplicação. Dentro do arquivo quiz.js

	*/	

	/* Escolhe Pergunta aleatoria */
	perguntaAleatoria = Math.floor(Math.random() * qtdPerguntas);

	if ( perguntasJaSaiu.length == qtdPerguntas ) {
		alert('Error');
		$("#scroll").html('<span>ERROR</span>');
		$("#vassoura").hide();
		return false;
	}

	while (perguntasJaSaiu.indexOf(perguntaAleatoria) >= 0){
		perguntaAleatoria = Math.floor(Math.random() * qtdPerguntas); 	
	}	

	/* Gerar ordem aleatórias das respostas */
	ordemDasPerguntas = [];
	for (var nI = 0; nI < 4; nI++){

		gerarOrdem = Math.floor(Math.random() * 4);
		while (ordemDasPerguntas.indexOf(gerarOrdem) >= 0){
			gerarOrdem = Math.floor(Math.random() * 4); 	
		}

		ordemDasPerguntas.push(gerarOrdem);

	}

	/* Monta HTML para imprimir na página */
	perguntaHTML = '<span>' + quiz[perguntaAleatoria].pergunta + '</span><br/><br/>' + 

				   '<form id="hp">' + 
	               '	<input type="radio" name="respostas" id="A" value=" ' + ordemDasPerguntas[0]  + ' "> ' + 
	               '	<label for="A">' + quiz[perguntaAleatoria].alternativas[ordemDasPerguntas[0]] + '</label><br/>' +  

	               '	<input type="radio" name="respostas" id="B" value=" ' + ordemDasPerguntas[1]  + ' "> ' + 
	               '	<label for="B">' + quiz[perguntaAleatoria].alternativas[ordemDasPerguntas[1]] + '</label><br/>' +

	               '	<input type="radio" name="respostas" id="C" value=" ' + ordemDasPerguntas[2]  + ' "> ' + 
	               '	<label for="C">' + quiz[perguntaAleatoria].alternativas[ordemDasPerguntas[2]] + '</label><br/>' +

	               '	<input type="radio" name="respostas" id="D" value=" ' + ordemDasPerguntas[3]  + ' "> ' + 
	               '	<label for="D">' + quiz[perguntaAleatoria].alternativas[ordemDasPerguntas[3]] + '</label>'      +
	               '</form>' ;	

	/* Adicionar a página */
	$("#scroll").html(perguntaHTML);

	/* Remover perguntas já realizadas do array para que na proxima vez
	   que a função for chamada não repetir a pergunta 

	   obs: Array global no arquivo quiz.js */
	perguntasJaSaiu.push(perguntaAleatoria);

}

$(document).ready(function(){

	var respostas   = new Array(),
	    casaResp    = new Array(),
	    audioCasa   = new Array(),
	    nomeCasa    = new Array(),
	    imgFacebook = new Array(),
	    repostaSelecionada = '',
	    linkFacebook = '';

	respostas = { '0': 0, // grifinoria
	              '1': 0, // sonserina
	              '2': 0, // corvinal
	              '3': 0} // lufa lufa

	nomeCasa = ['Grifinória',
	            'Sonserina',
	            'Corvinal',
	            'Lufa-Lufa']

	audioCasa = ['audios/gryffindor.mp3', // grifinoria
	             'audios/slytherin.mp3',  // sonserina
	             'audios/ravenclaw.mp3',  // corvinal
	             'audios/hufflepuff.mp3'] // lufa lufa

	imgFacebook = ['Imagem da grifinoria',
				   'Imagem da sonserina',
				   'Imagem da corvinal',
				   'Imagem da lufalufa']

	casaResp = ['<img src="images/casas/1.png" class="casa"><br/><br/>'        +
	            'Grifinória <br/><br/>'                                        +
	            '<b>Localização</b>: 7º andar <br/>'                           +
                '<b>Fundador</b>: Godrico Gryffindor <br/>'                    +
                '<b>Responsável</b>: Profª Minerva McGonagall<br/>'            +
                '<b>Cor</b>: amarelo-ouro e vermelho<br/>'                     +
                '<b>Animal</b>: leão<br/>'                                     +
                '<b>Fantasma</b>: Cavaleiro Nicholas de Mismy-Porpington '     +
                '(mais conhecido como Nick-Quase-Sem-Cabeça) <br/>       '     +
                '<b>Características marcantes</b>: coragem e determinação<br/>',

                '<img src="images/casas/2.png" class="casa"><br/><br/>'        +
	            'Sonserina  <br/><br/>'                                        +
	            '<b>Localização</b>: masmorras <br/>'                          +
                '<b>Fundador</b>: Salazar Slyntherin <br/>'                    +
                '<b>Responsável</b>: Prof. Severo Snape<br/>'                  +
                '<b>Cor</b>: verde e prata<br/>'                               +
                '<b>Animal</b>: cobra<br/>'                                    +
                '<b>Fantasma</b>: Barão Sangrento<br/>'                        +
                '<b>Características marcantes</b>: astúcia e ambição',

	            '<img src="images/casas/3.png" class="casa"><br/><br/>'        +
	            'Corvinal   <br/><br/>'                                        +
	            '<b>Localização</b>: 3º andar <br/>'                           +
                '<b>Fundadora</b>: Rowena Ravenclaw<br/>'                      +
                '<b>Responsável</b>: Prof. Filius Flitwick<br/>'               +
                '<b>Cor</b>: azul e bronze <br/>'                              +
                '<b>Animal</b>: águia <br/>'                                   +
                '<b>Fantasma</b>: Dama Cinzenta<br/>'                          +
                '<b>Características marcantes</b>: inteligência e força de vontade',

	            '<img src="images/casas/4.png" class="casa"><br/><br/>'        +
	            'Lufa-Lufa  <br/><br/>'                                        +
	            '<b>Localização</b>: perto da escada do Salão Principal <br/>' +
                '<b>Fundador</b>: Helga Hufflepuff <br/>'                      +
                '<b>Responsável</b>: Profª. Sprout <br/>'                      +
                '<b>Cor</b>: amarelo e preto <br/>'                            +
                '<b>Animal</b>: texugo <br/>'                                  +
                '<b>Fantasma</b>: Frei Gorducho <br/>'                         +
                '<b>Características marcantes</b>: lealdade e companheirismo']

	/* Imprimir a pergunta */
	imprimirPergunta();

	/* =============================================================================================
	==============================================================================================*/

	$("#vassoura").click(function(){

		var resultado = '',
		    audio = document.getElementById("audio");

		resultado = '<span>RESULTADO FINAL</span><br/><br/>' ;

		/* Verificar qual resposta foi selecionada */
		repostaSelecionada = $("input[name='respostas']:checked").val();

    	/* Verificar se alguma resposta foi selecionada */
        if ( repostaSelecionada == undefined ) {
        	sweetAlert("Atenção", "Selecione uma resposta !", "error");
        	return false;	
        }

        /* Contabilizar respostas */
        switch( repostaSelecionada.trim() ){

        	case '0': {
        		respostas[0] += 1;
        		break;
        	}

        	case '1': {
        		respostas[1] += 1;
        		break;
        	}

        	case '2': {
        		respostas[2] += 1;
        		break;
        	}

        	case '3': {
        		respostas[3] += 1;
        		break;
        	}

        }

        /* Contar a quantidade de perguntas que já foi impressa */
		contador += 1;
		if ( contador == 10 ) {

			var respMaior = 0,
			    respAux = 0 ;

			/* Varificar resultado da casa */
			for ( var nI = 0; nI < 4; nI ++ ) {

				if ( respostas[nI] > respAux ) {
					respAux = respostas[nI] ;
					respMaior = nI;
				}

			}

			resultado += casaResp[respMaior];

			/* Setar Variavel global */
			casa = nomeCasa[respMaior] ;

			/* Definir Voz */
			audio.setAttribute('src', audioCasa[respMaior]);	

			/* botão de compartilhar */
			$(this).off().css({
				'background' : 'url(images/Facbook_big_normal.png)',
				'height' : '39px',
				'width' : '226',
				'top' : '457px',
				'left' : '108px'
			}).click(function(){			

				linkFacebook = 'https://www.facebook.com/dialog/feed?app_id=SEU ID'                          +
				               '&link=LINK DO SEU SITE                       '                               +
				               '&picture=' + imgFacebook[respMaior]                                          +
				               '&caption= SUA DESCRIÇÃO'                                                     +
				               '&name=Eu sou da ' + nomeCasa[respMaior]                                      + 
				               '&redirect_uri=http://www.facebook.com/' ; 

				window.open(linkFacebook);

			});

			/* Exibir resultado */
			$("#scroll").hide().html(resultado).show('slow', function(){					

				/* Áudio do resultado */
				audio.play();

				/* Caixa de contato */
				setTimeout(function(){
					$('#enviarEmail').show('slow');	
				}, 200);				

			});

		}
		else{

			/* Imprimir a pergunta */
			imprimirPergunta();	

		}

	});

});

/* ==========================================================================================================================
	Enviar contato
========================================================================================================================== */

function enviarEmail(){


	$form = $('#Contato');

	var nome  = $('#nome').val(),
		email = $('#email').val(),
		msg   = '';

	/* Montar email */
	msg = 'Whatsapp : ' + $('#tel').val() + '\n\n' +
	      'Casa: '      + casa ; 

	/* AJAX */
    $.post("email/email.php", { nome: nome, email: email, mensagem: msg }, function(response) {

      if (response.result) {

        swal({
			title: "Atenção",
			text: "Email enviado com sucesso !"
		},

		function(){
			//window.location.reload();
			fechar();
		}); 

      } else {
        sweetAlert("Atenção", "Não foi possível enviar o e-mail!\n" + response.errors, "error");
      }
      
    }).error(function (x, y, z){
      swal("Atenção!", "Não foi possível enviar seu e-mail\n Verifique sua conexão com a internet", "error");
    });

}

$(document).ready(function(){

	$('#enviarContato').click(function(e){

		var inpObj = document.getElementById("contato");

	    if (inpObj.checkValidity() == true) {
	       e.preventDefault();	       
	       enviarEmail();
	    }

	});

});

/* Fechar */
function fechar(){
	$('#enviarEmail').hide('slow');
}
