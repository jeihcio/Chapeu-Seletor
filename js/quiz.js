var quiz = new Array(),
    perguntasJaSaiu = new Array(),
    contador = 0 ;

quiz = {
 
	0: {

		pergunta: 'Se um outro aluno começasse a lhe irritar, você ...',
		alternativas: {
			0: 'O desafiaria a um duelo', //Grifinória 
			1: 'Iria engana-lo para que ele se desse mal', //Sonserina
			2: 'Procuraria a melhor forma de se desvencilhar dele', //Corvinal
			3: 'Iria propor algum desafio mais justo'  //Lufa-lufa
		}		

	},

	1: {

		pergunta: 'Quando Harry olha para o Espelho de Osejed, ele vê o desejo de seu coração. O que você veria?',
		alternativas: {
			0: 'Você explorando locais misteriosos', //Grifinória 
			1: 'Você em uma posição de grande poder e dominação', //Sonserina
			2: 'Você mesmo como um grande pensador', //Corvinal
			3: 'Todos os povos do mundo em harmonia'  //Lufa-lufa
		}		

	},
	
	2: {

		pergunta: 'Se encontrase uma poderosa varinha, você....',
		alternativas: {
			0: 'A usaria em novas aventuras', //Grifinória 
			1: 'Procuraria vingança contra um bruxo inimigo', //Sonserina
			2: 'Inventaria algo novo', //Corvinal
			3: 'Ajudaria os mais necessitados'  //Lufa-lufa
		}		

	},
	
	3: {

		pergunta: 'Se lhe fosse oferecido algumas poções, qual escolheria?',
		alternativas: {
			0: 'A que lhe desse uma dose extra de corajem', //Grifinória 
			1: 'A que lhe proporcionasse mais poder', //Sonserina
			2: 'A que lhe permitisse explorar áreas mais complexas de conhecimento', //Corvinal
			3: 'A que lhe transformasse em alguém mais bondoso'  //Lufa-lufa
		}		

	},
	
	4: {

		pergunta: 'Qual sua aula favorita?',
		alternativas: {
			0: 'Transfiguração', //Grifinória 
			1: 'Poções', //Sonserina
			2: 'Feitiços', //Corvinal
			3: 'Herbologia'  //Lufa-lufa
		}		

	},
	
	5: {

		pergunta: 'Qual local no Beco Diagonal você visitaria primeiro?',
		alternativas: {
			0: 'Loja de varinhas', //Grifinória 
			1: 'Apotecário', //Sonserina
			2: 'Livraria Floreios e Borrões', //Corvinal
			3: 'Sorveteria'  //Lufa-lufa
		}		

	},
	
	6: {

		pergunta: 'Se um novo aluno se sentasse perto de você, o que faria?',
		alternativas: {
			0: 'O convidava para o clube de duelo', //Grifinória 
			1: 'Me mostraria superior à ele', //Sonserina
			2: 'Questionaria sobre os livros que leu', //Corvinal
			3: 'Conversaria com ele'  //Lufa-lufa
		}		

	},
	
	7: {

		pergunta: 'Que animal seria?',
		alternativas: {
			0: 'Lobo', //Grifinória 
			1: 'Cuco mafioso', //Sonserina
			2: 'Elefante', //Corvinal
			3: 'Cachorro'  //Lufa-lufa
		}		

	},
	
	8: {

		pergunta: 'Se acha algo perdido no chão, o que você faz?',
		alternativas: {
			0: 'Termino o que tenho para fazer e procuro quem o perdeu', //Grifinória 
			1: 'Se for algo interessante fico para mim', //Sonserina
			2: 'Analiso o objeto e o entrego ao dono', //Corvinal
			3: 'Paro tudo que estou fazendo e procuro o dono do objeto'  //Lufa-lufa
		}		

	},
	
	9: {

		pergunta: 'Quem seriam seus amigos?',
		alternativas: {
			0: 'Aqueles dispostos a novos desafios sempre', //Grifinória 
			1: 'Aqueles que me trazem mais vontade', //Sonserina
			2: 'Os que presam o estudo acima de tudo', //Corvinal
			3: 'Tanto faz, procuro ser amigo de todos'  //Lufa-lufa
		}		

	},
	
	10: {

		pergunta: 'O que espera de seu primeiro dia de aula?',
		alternativas: {
			0: 'Que se tenha aulas em locais desconhecidos para desbravá-los', //Grifinória 
			1: 'Que todos vejam tudo de novo que comprei', //Sonserina
			2: 'Novas aulas com conteúdos que ainda não conheço', //Corvinal
			3: 'Fazer novas amizades'  //Lufa-lufa
		}		

	},
	
	11: {

		pergunta: 'Como se imagina daqui a alguns anos?',
		alternativas: {
			0: 'Trabalhando em algo que ame, me proporcionando novos desafios diariamente', //Grifinória 
			1: 'Ocupando um alto cargo no Ministério da Magia e com muito dinheiro', //Sonserina
			2: 'Trabalhando em algo que me possibilite aprender coisas novas todos os dias', //Corvinal
			3: 'Trabalhando em algo que me possibilite ter contato com diferentes pessoas'  //Lufa-lufa
		}		

	},
	
	12: {

		pergunta: 'Que objeto mágico gostaria de ter?',
		alternativas: {
			0: 'Uma vassoura, para poder voar pelo mundo inteiro', //Grifinória 
			1: 'Uma varinha poderosa para exterminar meus inimigos', //Sonserina
			2: 'Um Vira-tempo para poder assistir todas as diferentes opções de aula por dia', //Corvinal
			3: 'Feijõezinhos de todos os sabores para dividir com todos que assim quisessem'  //Lufa-lufa
		}		

	},


}