saldoPrincipal = 2500.00;
conteo = 3

function iniciarsesion(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(pass == "12345678"){
        alert("Welcome " + user + ", you have successfully entered");
        window.location = "options.html"
    }else{
        conteo = conteo - 1;
            alert("Your password is incorrect, you have " + conteo + " attempts left");
        }
    if(conteo == 0){
        alert("Your user has been blocked");
        window.location = "bank.html"
    }
}

function ConsultaSaldo(){ 
    alert("Your current balance is: $"+ saldoPrincipal);
}

function RetirarMonto(){
    retiro = parseInt(prompt("Enter the amount to withdraw:", "00.00"));
    if(retiro > saldoPrincipal || retiro < 0){
        alert("Your balance is insufficient to perform this transaction!");
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
            entrega = entrega + "Bills of $20 -> " + billete20 + "\n";
        }
        if(billete10 > 0){
            entrega = entrega + "Bills of $10 -> " + billete10 + "\n";
        }
        if(billete5 > 0){
            entrega = entrega + "Bills of $5 -> " + billete5 + "\n";
        }
        if(billete1> 0){
            entrega = entrega + "Bills of $1 -> " + billete1 + "\n";
        }

        alert(entrega + "\nYour main balance is: $"+ saldoPrincipal);
    }
}

function AbonarCuenta(){
    abono = parseInt(prompt("Enter the amount to add:", "0.00"));
    if(abono > 0){
        saldoPrincipal = saldoPrincipal + abono;
        alert("Your new balance is: $"+ saldoPrincipal);
    }else{
        alert("You must enter the data correctly!");
    }
}


function leave(){
    alert("Thank you for visiting us!");
    window.location = "bank.html"
}