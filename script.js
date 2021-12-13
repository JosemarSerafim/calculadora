var option = 0;
function soma(n1, n2){
    return n1+n2;
}

function sub(n1,n2){
    return n1-n2;
}

function mult(n1,n2){
    return n1*n2;
}

function div (n1,n2){
    if(n1< n2)
    return 0;
    else {
        return n1/n2;
    }
}

while(option != 5){
    option =  Number(prompt('Digite uma operação:\n 1- Soma \n 2-Subtração \n 3-Multiplicação \n 4-Divisão \n 5-sair'));
    if(option ===5){
        break;
    }

    if(option > 5){
        alert(' Recarrega a página e escolha a opção correta');
        break;
    }
    var n1 = Number(prompt('Digite o primeiro número:'));
    var n2 = Number(prompt('Digite o segundo número:'));

    if(option === 1){
        alert(`${n1}+${n2} = ${soma(n1,n2)}`);
    } else if(option === 2){
        alert(`${n1}-${n2} =${sub(n1,n2)}`)
    } else if(option ===3){
        alert(`${n1}x${n2} = ${mult(n1,n2)}`)
    } else if(option ===4){
        alert(`${n1}:${n2} = ${div(n1,n2)}`);
    } 
}