saldoPrincipal = 25000.00;
conteo = 3

function iniciarsesion(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(pass == "12345678"){
        alert("Bienvenido " + user + ", has ingresado exitosamente");
        window.location = "opciones.html"
    }else{
        conteo = conteo - 1;
            alert("Tu contraseña es incorrecta, te quedan " + conteo + " intentos.");
        }
    if(conteo == 0){
        alert("Tu usuario ha sido bloqueado");
        window.location = "banco.html"
    }
}

function ConsultaSaldo(){ 
    alert("Su saldo actual es de: $"+ saldoPrincipal);
}

function RetirarMonto(){
    retiro = parseInt(prompt("Digite la cantidad a retirar:", "00.00"));
    if(retiro > saldoPrincipal || retiro < 0){
        alert("¡Su saldo es insuficiente para realizar esta transaccion!");
    }else{

        saldoPrincipal = saldoPrincipal - retiro;

        billete20 = parseInt(retiro / 20);
        retiro = retiro - (billete20 * 20);

        billete10 = parseInt(retiro / 10);
        retiro = retiro - (billete10 * 10);

        billete5 = parseInt(retiro / 5);
        retiro = retiro - (billete5 * 5);

        billete1 = parseInt(retiro / 1);
        retiro = retiro - (billete5 * 1);


        entrega = "";

        if(billete20 > 0){
            entrega = entrega + "Billetes de $20 -> " + billete20 + "\n";
        }
        if(billete10 > 0){
            entrega = entrega + "Billetes de $10 -> " + billete10 + "\n";
        }
        if(billete5 > 0){
            entrega = entrega + "Billetes de $5 -> " + billete5 + "\n";
        }
        if(billete1> 0){
            entrega = entrega + "Billetes de $1 -> " + billete1 + "\n";
        }

        alert(entrega + "\nSu saldo principal es: $"+ saldoPrincipal);
    }
}

function AbonarCuenta(){
    abono = parseInt(prompt("Digite la cantidad a abonar:", "0.00"));
    if(abono > 0){
        saldoPrincipal = saldoPrincipal + abono;
        alert("Su nuevo saldo es: $"+ saldoPrincipal);
    }else{
        alert("¡Debe ingresar correctamente los datos!");
    }
}



function leave(){
    alert("¡Gracias por visitarnos!");
    window.location = "banco.html"
}

