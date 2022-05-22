// USUÁRIO TENTA ADIVINHAR UM NÚMERO SORTEADO ALEATORIAMENTE


  function chamar(){ 
    var numA1 = parseInt(Math.random() * 100);
    var numDigitado = parseInt("");
    var erro = "Digite um número válido!!";
    var acerto = "Parabéns, você acertou!!"
    var errou = "Tente outra vez!!"

    numDigitado = document.getElementById('valor').value;

    if ( (numDigitado < 0) || (numDigitado > 100) || (numDigitado == "") ) {   
      document.getElementById('digito').innerHTML = erro;
      document.getElementById('numA1').innerHTML = null;
    }

    else  {
      document.getElementById('digito').innerHTML = numDigitado;
      document.getElementById('numA1').innerHTML = numA1;
    }

    if (numDigitado == numA1) {
      document.getElementById('acerto').innerHTML = acerto;
    }

    else  {
      document.getElementById('errou').innerHTML = errou;
      document.getElementById('acerto').innerHTML = null
    }

    document.getElementById('valor').value = null;


  }

