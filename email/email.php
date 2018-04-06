<?php

header('Content-Type: application/json');

/* SET VARIAVEIS */	
$name          = $_POST['nome'];
$email_address = $_POST['email'];
$message       = $_POST['mensagem'];

/* VALIDAÇÃO */
if ( !empty($_POST['nome'])  || 
     !empty($_POST['email']) || 
	 !empty($_POST['mensagem']) ) {
		 
	if ( !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL) ) {
		echo json_encode(array( 'result' => false, 'errors' => 'E-mail inválido'));
	}
	else{		
			
		/* PARÂMETROS DO EMAIL */
		$to            = 'contato@contato.com.br'; 
		$email_subject = "Resposta do chapéu seletor";
		$email_body    = "Nome: $name\nEmail: $email_address\n$message";
		$headers       = "From: $email_address"; 
		//$headers      .= "\nReply-To: $email_address";	

		/* ENVIAR EMAIL */
		$enviaremail = mail($to, $email_subject, $email_body, $headers);

		if ( !$enviaremail ){ 
			echo json_encode(array( 'result' => false, 'errors' => 'Erro ao enviar e-mail'));
		}
		else{	
			echo json_encode(array( 'result' => true));
		}								

	}

} else{
	echo json_encode(array( 'result' => false, 'errors' => "Dados inválidos!"));
}	

?>				