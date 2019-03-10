
//FUNCÕES DE VALORES IDENTICOS DIGITADOS NO INPUT (EMAIL E SENHA) //


// VERIFICAÇÂO ATRÁVES DO VALUE DIGITADO NO KEYBOARD PARA VERIFICAR SE A SENHA DIGITADA CORRESPONDE COM A CONFIRMAÇÃO
var check = function() {
    if (document.getElementById('password').value == document.getElementById('confirm_password').value) {
        document.getElementById('message').innerHTML = '';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Senhas Diferentes';
    }
  }

// VERIFICAÇÂO ATRÁVES DO VALUE DIGITADO NO KEYBOARD PARA VERIFICAR SE O E-MAIL DIGITADO CORRESPONDE COM A CONFIRMAÇÃO
  var checkMail = function() {
    if (document.getElementById('email').value == document.getElementById('confirm_email').value) {
        document.getElementById('messageMail').innerHTML = '';
    } else {
      document.getElementById('messageMail').style.color = 'red';
      document.getElementById('messageMail').innerHTML = 'E-Mail Diferentes';
    }
  }
