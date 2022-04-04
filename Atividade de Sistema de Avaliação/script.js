function pegarDados(){
    let row = document.querySelector('hr'); 
    row.classList.add('show'); 

	let result = document.querySelector('.hide'); 
    result.classList.remove('hide'); 
    result.classList.add('show');

    let camText = document.getElementById("texto").value;
    document.getElementById("camText").innerHTML = ("Questão 1:" + camText);

    let checkbox_octal = document.getElementById("octal");
    let checkbox_binario = document.getElementById("bina");
    let checkbox_decimal = document.getElementById("deci");
    let checkbox_hexadecimal = document.getElementById("hexa");


    if(checkbox_octal.checked){
        document.getElementById("campoOctal").innerHTML = ("Questão 2: Sistema Octal")
    }if(checkbox_binario.checked){
        document.getElementById("campoBina").innerHTML = ("Questão 2: Sistema Binário")
    }if(checkbox_decimal.checked){
        document.getElementById("campoDeci").innerHTML = ("Questão 2: Sistema Decimal")
    }if(checkbox_hexadecimal.checked){
        document.getElementById("campoHexa").innerHTML = ("Questão 2: Algarismos Hexadecimal")
    }

    if(document.getElementById("alc").checked){
        document.getElementById("camRadio").innerHTML = ("Questão 3: Álcool Isopropílico");
    }else if(document.getElementById("limpa").checked){
        document.getElementById("camRadio").innerHTML = ("Questão 3: Limpa Contato");
    }else if(document.getElementById("alcl70").checked){
        document.getElementById("camRadio").innerHTML = ("Questão 3: Álcool 70%");
    }else if(document.getElementById("agua").checked){
        document.getElementById("camRadio").innerHTML = ("Questão 3: Água");
    }

    if(document.getElementById("true").checked){
        document.getElementById("camRadio2").innerHTML = ("Questão 4: Verdadeira");
    }else if(document.getElementById("false").checked){
        document.getElementById("camRadio2").innerHTML = ("Questão 4: Falsa");
    }
}