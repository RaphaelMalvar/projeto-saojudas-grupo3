
    var btnmaquina = document.getElementById('maquina')
    var btnelevador = document.getElementById('elevador')
    const secm = document.getElementById('secmaquina')
    const sece = document.getElementById('secelevador')
    const seca = document.getElementById('secanalisador')
    var divanalisador = document.getElementById('divanalisador')

    btnmaquina.addEventListener('click', function(){// botao para liberar a maquina de doces

        secm.style.display = 'block'
        sece.style.display = 'none'
     

    })

    btnelevador.addEventListener('click', function(){// botao para liberar o elevador...
        secm.style.display = 'none'
        sece.style.display = 'block'

    })



    

    const doce1 = document.getElementById('doce1')
    const doce2 = document.getElementById('doce2')
    const doce3 = document.getElementById('doce3')
    const b1 = document.getElementById('b1')
    const b2 = document.getElementById('b2')
    const b5 = document.getElementById('b5')
    var saldo = 0
    var div = document.getElementById('divzada')
    var dicria = document.getElementById('divcria')
    const divres = document.getElementById('divres')
    

function um(){
    saldo = saldo + 1
    div.innerHTML =  `Seu saldo é de ${saldo}`
    if(saldo >= 6){
        doce1.disabled = false
    }if(saldo >= 7){
        doce2.disabled = false
    }if(saldo >= 8){
        doce3.disabled = false
    }
    if(saldo > 5){
        b5.disabled = true
    }
    if(saldo >= 8){
        b2.disabled = true
    }
    if(saldo >= 8){
        b1.disabled = true
    }

}
function dois(){
    saldo = saldo + 2
    div.innerHTML =  `Seu saldo é de ${saldo}`
    if(saldo >= 6){
        doce1.disabled = false
    }if(saldo >= 7){
        doce2.disabled = false
    }if(saldo >= 8){
        doce3.disabled = false
    }
    if(saldo > 5){
        b5.disabled = true
    }
    if(saldo >= 8){
        b2.disabled = true
    }
    if(saldo >=8 ){
        b1.disabled = true
    }
}
function cinco(){
    saldo = saldo + 5
    div.innerHTML =  `Seu saldo é de ${saldo}`
    if(saldo >= 6){
        doce1.disabled = false
    }if(saldo >= 7){
        doce2.disabled = false
    }if(saldo >= 8){
        doce3.disabled = false
    }
    if(saldo > 5){
        b5.disabled = true
    }
    if(saldo >= 8){
        b2.disabled = true
    }
    if(saldo >=8 ){
        b1.disabled = true
    }
}
function botaoum(){
    troco = saldo - 6
        saldo = saldo - 6
        saldo = 0
        div.innerHTML = `Seu saldo é de ${saldo}`
        divres.innerHTML = `Doce A comprado com sucesso, e seu troco é de ${troco} reais.`
        b1.disabled = false
        b2.disabled = false
        b5.disabled = false
        doce1.disabled = true
        doce2.disabled = true
        doce3.disabled = true
}
function botaodois(){
    troco = saldo - 7
        saldo = saldo - 7
        saldo = 0
        div.innerHTML = `Seu saldo é de ${saldo}`
        divres.innerHTML = `Doce A comprado com sucesso, e seu troco é de ${troco} reais.`
        b1.disabled = false
        b2.disabled = false
        b5.disabled = false
        doce1.disabled = true
        doce2.disabled = true
        doce3.disabled = true
    
}
function botaocinco(){
    troco = saldo - 8
        saldo = saldo - 8
        saldo = 0
        div.innerHTML = `Seu saldo é de ${saldo}`
        divres.innerHTML = `Doce A comprado com sucesso, e seu troco é de ${troco} reais.`
        b1.disabled = false
        b2.disabled = false
        b5.disabled = false
        doce3.disabled = true
        doce2.disabled = true
        doce1.disabled = true
}


const btnterreo = document.getElementById('terreo')
const btnprimeiroandar = document.getElementById('1andar')
const btnsegundoandar = document.getElementById('2andar')
const btnterceiroandar = document.getElementById('3andar')
const elevadorterreo = document.getElementById('bterreo')
const elevadorprimeiroandar = document.getElementById('b1andar')
const elevadorsegundoandar = document.getElementById('b2andar')
const elevadorterceiroandar = document.getElementById('b3andar')
const divdecria = document.getElementById('divcria')
const divcontainer = document.getElementById('container2')
let andarultimo = 0
let andar = 5


function iniciar(){
    const  checkbtnterreo = btnterreo.checked
    const checkbtnprimeiroandar = btnprimeiroandar.checked
    const checkbtnsegundoandar = btnsegundoandar.checked
    const checkbtnterceiroandar = btnterceiroandar.checked
    const checkelevadorterreo = elevadorterreo.checked
    const checkelevadorprimeiroandar = elevadorprimeiroandar.checked
    const checkelevadorsegundoandar = elevadorsegundoandar.checked
    const checkelevadorterceiroandar = elevadorterceiroandar.checked




if(andar === 5){
    if(checkbtnterreo){
        console.log("Térreo")
        andar = 0
        andarultimo = 0
        btnterreo.checked = false
        divcontainer.style.bottom = `200px`
        
    }
    if(checkbtnprimeiroandar){
        console.log("1 Andar")
        andar = 1
        andarultimo = 0
        btnprimeiroandar.checked = false
        divcontainer.style.bottom = `420px`
    }
    if(checkbtnsegundoandar){
        console.log("2 Andar")
        andar = 2
        andarultimo = 0
        btnsegundoandar.checked = false
        divcontainer.style.bottom = `620px`
    }
    if(checkbtnterceiroandar){
        console.log("3 Andar")
        andar = 3
        btnterceiroandar.checked = false
        divcontainer.style.bottom = `820px`
    }

return setTimeout(() => {
divcontainer.style.display = "block"}, 1000
);
}



if(andar === 0){  // 1 ou 1 e 2 ou 1 e 2 e 3 ou 1 e 3 ou 2 ou 2 e 3

    //somente primeiro andar
    if((checkelevadorprimeiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkbtnprimeiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false )){
        setTimeout(() => {
        console.log("1 andar")
        andar = 1
        andarultimo = 0
        btnprimeiroandar.checked = false
        elevadorprimeiroandar.checked = false 
        divcontainer.style.bottom = `420px`
        }, 3000);
        // primeiro e segundo andar
    }else if((checkbtnprimeiroandar && checkbtnsegundoandar && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkbtnprimeiroandar && checkelevadorsegundoandar && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkelevadorprimeiroandar && checkelevadorsegundoandar && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkelevadorprimeiroandar && checkbtnsegundoandar && checkelevadorterceiroandar == false && checkbtnterceiroandar == false)){
        setTimeout(() => {
            console.log("1 andar")
            andar = 1
            btnprimeiroandar.checked = false
            elevadorprimeiroandar.checked = false
            divcontainer.style.bottom = `420px`
        setTimeout(() => {
            console.log("2 andar")
            andar = 2
            andarultimo = 1
            btnsegundoandar.checked = false
            elevadorsegundoandar.checked = false
            divcontainer.style.bottom = `620px`
        }, 3000);
        }, 3000);
    
        // primeiro, segundo e terceiro andar
    }else if((checkbtnprimeiroandar && checkbtnsegundoandar && checkbtnterceiroandar) || (checkbtnprimeiroandar && checkelevadorsegundoandar && checkbtnterceiroandar) || (checkbtnprimeiroandar && checkbtnsegundoandar && checkelevadorterceiroandar) || (checkelevadorprimeiroandar && checkelevadorsegundoandar && checkelevadorterceiroandar) || (checkelevadorprimeiroandar && checkbtnsegundoandar && checkelevadorterceiroandar) || (checkelevadorprimeiroandar && checkelevadorsegundoandar && checkbtnterceiroandar) || (checkbtnprimeiroandar && checkelevadorsegundoandar && checkelevadorterceiroandar) || (checkelevadorprimeiroandar && checkbtnsegundoandar && checkbtnterceiroandar)){
        setTimeout(() => {
            console.log("1 andar")
            andar = 1
            btnprimeiroandar.checked = false
            elevadorprimeiroandar.checked = false
            divcontainer.style.bottom = `420px`
        setTimeout(() => {
            console.log("2 andar")
            andar = 2
            andarultimo = 1
            btnsegundoandar.checked = false
            elevadorsegundoandar.checked = false
            divcontainer.style.bottom = `620px`
        setTimeout(() => {
                console.log("3 andar")
                andar = 3
                andarultimo = 2
                btnterceiroandar.checked = false
                elevadorterceiroandar.checked = false
                divcontainer.style.bottom = `820px`      
        }, 3000);
        }, 3000);
        }, 3000);
        //primeiro e terceiro andar
    }else if((checkbtnprimeiroandar && checkbtnterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false) || (checkbtnprimeiroandar && checkelevadorterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false) || (checkelevadorprimeiroandar && checkelevadorterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false) || (checkelevadorprimeiroandar && checkbtnterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false)){
        setTimeout(() => {
            console.log("1 andar")
            andar = 1
            btnprimeiroandar.checked = false
            elevadorprimeiroandar.checked = false
            divcontainer.style.bottom = `420px`
        setTimeout(() => {
                console.log("3 andar")
                andar = 3
                andarultimo = 2
                btnterceiroandar.checked = false
                elevadorterceiroandar.checked = false
                divcontainer.style.bottom = `820px`
        }, 3000);
        }, 3000);
        //SEGUNDO ANDAR SOMENTE
    }else if((checkbtnsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkelevadorsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)){
        setTimeout(() => {
            console.log("2 andar")
            andar = 2
            andarultimo = 0
            btnsegundoandar.checked = false
            elevadorsegundoandar.checked = false
            divcontainer.style.bottom = `620px`
        }, 3000);
        //SEGUNDO E TERCEIRO ANDAR
    }else if((checkbtnsegundoandar && checkbtnterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkbtnsegundoandar && checkelevadorterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkelevadorsegundoandar && checkelevadorterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkelevadorsegundoandar && checkbtnterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false)){
        setTimeout(() => {
            console.log("2 andar")
            andar = 2
            btnsegundoandar.checked = false
            elevadorsegundoandar.checked = false
            divcontainer.style.bottom = `620px`
        setTimeout(() => {
                console.log("3 andar")
                andar = 3
                andarultimo = 2
                btnterceiroandar.checked = false
                elevadorterceiroandar.checked = false
                divcontainer.style.bottom = `820px`
        }, 3000);
        }, 3000);
        //TERCEIRO ANDAR SOMENTE
    }else if((checkbtnterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false) || (checkelevadorterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false)){
        setTimeout(() => {
            console.log("3 andar")
            andar = 3
            andarultimo = 2
            btnterceiroandar.checked = false
            elevadorterceiroandar.checked = false
            divcontainer.style.bottom = `820px`
    }, 3000);
    }

    return
}

if(andar === 1 && andarultimo > 1){ // 0 ou 0 2 3 ou 0 2 ou 0 3 ou 2 ou 3
    //0
    if((checkbtnterreo && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkelevadorterreo && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)){
        setTimeout(() => {
            console.log("Térreo")
            andar = 0
            andarultimo = 0
            btnterreo.checked = false
            elevadorterreo.checked = false
            divcontainer.style.bottom = `200px`
    }, 3000);
    //0 2
    }else if((checkbtnterreo && checkbtnsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkbtnterreo && checkelevadorsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkelevadorterreo && checkelevadorsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkelevadorterreo && checkbtnsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)){
        setTimeout(() => {
            console.log("Térreo")
            andar = 0
            andarultimo = 0
            btnterreo.checked = false
            elevadorterreo.checked = false
            divcontainer.style.bottom = `200px`
        setTimeout(() => {
                console.log("2 andar")
                andar = 2
                andarultimo = 0
                btnsegundoandar.checked = false
                elevadorsegundoandar.checked = false
                divcontainer.style.bottom = `620px`
        }, 3000);
        }, 3000);
    // SOMENTE 0 2 3
    }else if((checkbtnterreo && checkbtnsegundoandar && checkbtnterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkbtnterreo && checkelevadorsegundoandar && checkbtnterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkbtnterreo && checkbtnsegundoandar && checkelevadorterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkbtnterreo && checkelevadorsegundoandar && checkelevadorterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkelevadorterreo && checkelevadorsegundoandar && checkelevadorterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkelevadorterreo && checkelevadorsegundoandar && checkbtnterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkelevadorterreo && checkbtnsegundoandar && checkelevadorterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkelevadorterreo && checkbtnsegundoandar && checkbtnterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false)){
        setTimeout(() => {
            console.log("Térreo")
            andar = 0
            andarultimo = 0
            btnterreo.checked = false
            elevadorterreo.checked = false
            divcontainer.style.bottom = `200px`
        setTimeout(() => {
            console.log("2 andar")
            andar = 2
            andarultimo = 0
            btnsegundoandar.checked = false
            elevadorsegundoandar.checked = false
            divcontainer.style.bottom = `620px`
        setTimeout(() => {
                console.log("3 andar")
                andar = 3
                andarultimo = 2
                btnterceiroandar.checked = false
                elevadorterceiroandar.checked = false
                divcontainer.style.bottom = `820px`      
        }, 3000);
        }, 3000);
        }, 3000);
        //  0 3
    }else if((checkbtnterreo && checkbtnterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkbtnterreo && checkelevadorterceiroandar) || (checkelevadorterreo && checkelevadorterceiroandar) || (checkelevadorterreo && checkbtnterceiroandar)){
        setTimeout(() => {
            console.log("Térreo")
            andar = 0
            andarultimo = 1
            btnterreo.checked = false
            elevadorterreo.checked = false
            divcontainer.style.bottom = `200px`
        setTimeout(() => {
            console.log("3 andar")
            andar = 3
            andarultimo = 1
            btnterceiroandar.checked = false
            elevadorterceiroandar.checked = false
            divcontainer.style.bottom = `820px`
        }, 3000);
        }, 3000);
        // 3
    }else if((checkbtnterceiroandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false)||(checkelevadorterceiroandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false)){
        setTimeout(() => {
            console.log("3 andar")
            andar = 3
            andarultimo = 1
            btnterceiroandar.checked = false
            elevadorterceiroandar.checked = false
            divcontainer.style.bottom = `820px`
        }, 3000);
        // 2
    }else if((checkbtnsegundoandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)||(checkelevadorsegundoandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)){
    setTimeout(() => {
            console.log("2 andar")
            andar = 2
            andarultimo = 1
            btnsegundoandar.checked = false
            elevadorsegundoandar.checked = false
            divcontainer.style.bottom = `620px`
    }, 3000);
    return
}}


if(andar === 1 && andarultimo < 1){ //  0 ou 2 ou 3 ou 2 0 ou 2 3 ou 2 3 0 ou 3 0
    // 0
    if((checkbtnterreo && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false) || (checkelevadorterreo && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false)){
        setTimeout(() => {
            console.log("Térreo")
            andar = 0
            andarultimo = 1
            btnterreo.checked = false
            elevadorterreo.checked = false
            divcontainer.style.bottom = `200px`
        }, 3000);
        // 2
    }else if((checkbtnsegundoandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)||(checkelevadorsegundoandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)){
        setTimeout(() => {
            console.log("2 andar")
            andar = 2
            andarultimo = 1
            btnsegundoandar.checked = false
            elevadorsegundoandar.checked = false
            divcontainer.style.bottom = `620px`
        }, 3000);
        // 3
    }else if((checkbtnterceiroandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false)||(checkelevadorterceiroandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false)){
        setTimeout(() => {
            console.log("3 andar")
            andar = 3
            andarultimo = 1
            btnterceiroandar.checked = false
            elevadorterceiroandar.checked = false
            divcontainer.style.bottom = `820px`
        }, 3000);
        // 2 0         BTN BTN, BTN ELE, ELE ELE, ELE BTN
    }else if((checkbtnterreo && checkbtnsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkbtnterreo && checkelevadorsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkelevadorterreo && checkelevadorsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkelevadorterreo && checkbtnsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)){
        setTimeout(() => {
            console.log("2 Andar")
            andar = 2
            andarultimo = 1
            btnsegundoandar.checked = false
            elevadorsegundoandar.checked = false
            divcontainer.style.bottom = `620px`
        setTimeout(() => {
            console.log("Térreo")
            andar = 0
            andarultimo = 0
            btnterreo.checked = false
            elevadorterreo.checked = false
            divcontainer.style.bottom = `200px`
        }, 3000);
        }, 3000);
        // 2 3
    }else if((checkbtnsegundoandar && checkbtnterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkbtnsegundoandar && checkelevadorterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkelevadorsegundoandar && checkelevadorterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkelevadorsegundoandar && checkbtnterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterreo == false && checkelevadorterreo == false)){
        setTimeout(() => {
            console.log("2 Andar")
            andar = 2
            btnsegundoandar.checked = false
            elevadorsegundoandar.checked = false
            divcontainer.style.bottom = `620px`
        setTimeout(() => {
                console.log("3 Andar")
                andar = 3
                andarultimo = 2
                btnterceiroandar.checked = false
                elevadorterceiroandar.checked = false
                divcontainer.style.bottom = `820px`
        }, 3000);
        }, 3000);
        // 2 3 0
    }else if((checkbtnterreo && checkbtnsegundoandar && checkbtnterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkbtnterreo && checkelevadorsegundoandar && checkbtnterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkbtnterreo && checkbtnsegundoandar && checkelevadorterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkbtnterreo && checkelevadorsegundoandar && checkelevadorterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkelevadorterreo && checkelevadorsegundoandar && checkelevadorterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkelevadorterreo && checkelevadorsegundoandar && checkbtnterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkelevadorterreo && checkbtnsegundoandar && checkelevadorterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkelevadorterreo && checkbtnsegundoandar && checkbtnterceiroandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false)){
        setTimeout(() => {
            console.log("2 Andar")
            andar = 2
            btnsegundoandar.checked = false
            elevadorsegundoandar.checked = false
            divcontainer.style.bottom = `620px`
        setTimeout(() => {
                console.log("3 Andar")
                andar = 3
                andarultimo = 2
                btnterceiroandar.checked = false
                elevadorterceiroandar.checked = false
                divcontainer.style.bottom = `820px`
        setTimeout(() => {
                console.log("Térreo")
                andar = 0
                andarultimo = 1
                btnterreo.checked = false
                elevadorterreo.checked = false
                divcontainer.style.bottom = `200px`
        }, 3000);
        }, 3000);
        }, 3000);
        // 3 0
    }else if((checkbtnterreo && checkbtnterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkbtnterreo && checkelevadorterceiroandar) || (checkelevadorterreo && checkelevadorterceiroandar) || (checkelevadorterreo && checkbtnterceiroandar)){
        setTimeout(() => {
            console.log("3 Andar")
            andar = 3
            andarultimo = 2
            btnterceiroandar.checked = false
            elevadorterceiroandar.checked = false
            divcontainer.style.bottom = `820px`
        setTimeout(() => {
            console.log("Térreo")
            andar = 0
            andarultimo = 1
            btnterreo.checked = false
            elevadorterreo.checked = false
            divcontainer.style.bottom = `200px`
        }, 3000);
        }, 3000);
        
    }
    return
}

if(andar === 2 && andarultimo === 3){ // 1 ou 0 ou 3 ou 1 0 ou 1 0 3 ou 1 3 ou 0 3
    // 1
    if((checkelevadorprimeiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkbtnprimeiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false && checkbtnterreo == false && checkelevadorterreo == false)){
        setTimeout(() => {
            console.log("1 andar")
            andar = 1
            andarultimo = 0
            btnprimeiroandar.checked = false
            elevadorprimeiroandar.checked = false 
            divcontainer.style.bottom = `420px`
            }, 3000);
    // 0
    }else if((checkbtnterreo && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkelevadorterreo && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)){
        setTimeout(() => {
            console.log("Térreo")
            andar = 0
            andarultimo = 0
            btnterreo.checked = false
            elevadorterreo.checked = false
            divcontainer.style.bottom = `200px`
    }, 3000);
    // 3
    }else if((checkbtnterceiroandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false)||(checkelevadorterceiroandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false)){
        setTimeout(() => {
            console.log("3 andar")
            andar = 3
            andarultimo = 1
            btnterceiroandar.checked = false
            elevadorterceiroandar.checked = false
            divcontainer.style.bottom = `820px`
        }, 3000);
        // 1 0
    }else if((checkelevadorprimeiroandar && checkelevadorterreo && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkelevadorprimeiroandar && checkbtnterreo && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkbtnprimeiroandar && checkbtnterreo && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkbtnprimeiroandar && checkelevadorterreo && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false)){
        setTimeout(() => {
            console.log("1 Andar")
            andar = 1
            andarultimo = 2
            btnprimeiroandar.checked = false
            elevadorprimeiroandar.checked = false
            divcontainer.style.bottom = `420px`
        setTimeout(() => {
            console.log("Térreo")
            andar = 0
            andarultimo = 1
            btnterreo.checked = false
            elevadorterreo.checked = false
            divcontainer.style.bottom = `200px`
        }, 3000);
        }, 3000);
    // 1 0 3        btn, btn, btn // btn, ele, btn // btn, ele, ele // ele, ele , ele// ele, btn, ele // ele, ele, btn // ele, btn, btn
    }else if((checkbtnprimeiroandar && checkbtnterreo && checkbtnterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false) || (checkbtnprimeiroandar && checkelevadorterreo && checkbtnterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false) || (checkbtnprimeiroandar && checkelevadorterreo && checkelevadorterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false) || (checkelevadorprimeiroandar && checkelevadorterreo && checkelevadorterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false) || (checkelevadorprimeiroandar && checkbtnterreo && checkelevadorterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false) || (checkelevadorprimeiroandar && checkelevadorterreo && checkbtnterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false) || (checkelevadorprimeiroandar && checkbtnterreo && checkbtnterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false)){
        setTimeout(() => {
            console.log("1 Andar")
            andar = 1
            andarultimo = 2
            btnprimeiroandar.checked = false
            elevadorprimeiroandar.checked = false
            divcontainer.style.bottom = `420px`
        setTimeout(() => {
            console.log("Térreo")
            andar = 0
            andarultimo = 1
            btnterreo.checked = false
            elevadorterreo.checked = false
            divcontainer.style.bottom = `200px`
        setTimeout(() => {
            console.log("3 Andar")
            andar = 3
            andarultimo = 0
            btnterceiroandar.checked = false
            elevadorterceiroandar.checked = false
            divcontainer.style.bottom = `820px`
        }, 3000);
        }, 3000);
        }, 3000);
        // 1 3
    }else if((checkbtnprimeiroandar && checkbtnterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkbtnprimeiroandar && checkelevadorterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkelevadorprimeiroandar && checkelevadorterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkelevadorprimeiroandar && checkbtnterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterreo == false && checkelevadorterreo == false)){
        setTimeout(() => {
            console.log("1 Andar")
            andar = 1
            andarultimo = 2
            btnprimeiroandar.checked = false
            elevadorprimeiroandar.checked = false
            divcontainer.style.bottom = `420px`
        setTimeout(() => {
            console.log("3 Andar")
            andar = 3
            andarultimo = 0
            btnterceiroandar.checked = false
            elevadorterceiroandar.checked = false
            divcontainer.style.bottom = `820px`
        }, 3000);
        }, 3000);
        // 0 3
    }else if((checkbtnterreo && checkbtnterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkbtnterreo && checkelevadorterceiroandar) || (checkelevadorterreo && checkelevadorterceiroandar) || (checkelevadorterreo && checkbtnterceiroandar)){
        setTimeout(() => {
            console.log("Térreo")
            andar = 0
            andarultimo = 1
            btnterreo.checked = false
            elevadorterreo.checked = false
            divcontainer.style.bottom = `200px`
        setTimeout(() => {
            console.log("3 Andar")
            andar = 3
            andarultimo = 0
            btnterceiroandar.checked = false
            elevadorterceiroandar.checked = false
            divcontainer.style.bottom = `820px`
        }, 3000);
        }, 3000);
    
    }}

    if(andar === 2 && andarultimo < 2){ // 1 ou 0 ou 3 ou 3 1 0 ou 3 1 ou 3 0 ou 1 0
        if((checkelevadorprimeiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkbtnprimeiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false && checkbtnterreo == false && checkelevadorterreo == false)){
            setTimeout(() => {
                console.log("1 andar")
                andar = 1
                andarultimo = 0
                btnprimeiroandar.checked = false
                elevadorprimeiroandar.checked = false 
                divcontainer.style.bottom = `420px`
                }, 3000);
        // 0
        }else if((checkbtnterreo && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkelevadorterreo && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)){
            setTimeout(() => {
                console.log("Térreo")
                andar = 0
                andarultimo = 0
                btnterreo.checked = false
                elevadorterreo.checked = false
                divcontainer.style.bottom = `200px`
        }, 3000);
        // 3
        }else if((checkbtnterceiroandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false)||(checkelevadorterceiroandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false)){
            setTimeout(() => {
                console.log("3 andar")
                andar = 3
                andarultimo = 1
                btnterceiroandar.checked = false
                elevadorterceiroandar.checked = false
                divcontainer.style.bottom = `820px`
            }, 3000);
            // 3 1 0
        }else if((checkbtnprimeiroandar && checkbtnterreo && checkbtnterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false) || (checkbtnprimeiroandar && checkelevadorterreo && checkbtnterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false) || (checkbtnprimeiroandar && checkelevadorterreo && checkelevadorterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false) || (checkelevadorprimeiroandar && checkelevadorterreo && checkelevadorterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false) || (checkelevadorprimeiroandar && checkbtnterreo && checkelevadorterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false) || (checkelevadorprimeiroandar && checkelevadorterreo && checkbtnterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false) || (checkelevadorprimeiroandar && checkbtnterreo && checkbtnterceiroandar && checkelevadorsegundoandar == false && checkbtnsegundoandar == false)){
            setTimeout(() => {
                console.log("3 Andar")
                andar = 3
                andarultimo = 0
                btnterceiroandar.checked = false
                elevadorterceiroandar.checked = false
                divcontainer.style.bottom = `820px`
            setTimeout(() => {
                console.log("1 Andar")
                andar = 1
                andarultimo = 2
                btnprimeiroandar.checked = false
                elevadorprimeiroandar.checked = false
                divcontainer.style.bottom = `420px`
            setTimeout(() => {
                console.log("Térreo")
                andar = 0
                andarultimo = 1
                btnterreo.checked = false
                elevadorterreo.checked = false
                divcontainer.style.bottom = `200px`
            }, 3000);
            }, 3000);
            }, 3000);
            // 3 1
        }else if((checkbtnprimeiroandar && checkbtnterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkbtnprimeiroandar && checkelevadorterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkelevadorprimeiroandar && checkelevadorterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkelevadorprimeiroandar && checkbtnterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterreo == false && checkelevadorterreo == false)){
            setTimeout(() => {
                console.log("3 Andar")
                andar = 3
                andarultimo = 0
                btnterceiroandar.checked = false
                elevadorterceiroandar.checked = false
                divcontainer.style.bottom = `820px`
            setTimeout(() => {
                console.log("1 Andar")
                andar = 1
                andarultimo = 2
                btnprimeiroandar.checked = false
                elevadorprimeiroandar.checked = false
                divcontainer.style.bottom = `420px`
            
            }, 3000);
            }, 3000);
            // 3 0
        }else if((checkbtnterreo && checkbtnterceiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false) || (checkbtnterreo && checkelevadorterceiroandar) || (checkelevadorterreo && checkelevadorterceiroandar) || (checkelevadorterreo && checkbtnterceiroandar)){
            setTimeout(() => {
                console.log("3 Andar")
                andar = 3
                andarultimo = 0
                btnterceiroandar.checked = false
                elevadorterceiroandar.checked = false
                divcontainer.style.bottom = `820px`
            setTimeout(() => {
                console.log("Térreo")
                andar = 0
                andarultimo = 1
                btnterreo.checked = false
                elevadorterreo.checked = false
                divcontainer.style.bottom = `200px`
            }, 3000);
            }, 3000);
        // 1 0 
        }else if((checkelevadorprimeiroandar && checkelevadorterreo && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkelevadorprimeiroandar && checkbtnterreo && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkbtnprimeiroandar && checkbtnterreo && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkbtnprimeiroandar && checkelevadorterreo && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false)){
            setTimeout(() => {
                console.log("1 Andar")
                andar = 1
                andarultimo = 2
                btnprimeiroandar.checked = false
                elevadorprimeiroandar.checked = false
                divcontainer.style.bottom = `420px`
            setTimeout(() => {
                console.log("Térreo")
                andar = 0
                andarultimo = 1
                btnterreo.checked = false
                elevadorterreo.checked = false
                divcontainer.style.bottom = `200px`
            }, 3000);
            }, 3000);
       
    }}
    if(andar = 3){ // 2 ou 1 ou 0 ou 2 1 ou 2 0 ou 1 0
        // 2
        if((checkbtnsegundoandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)||(checkelevadorsegundoandar && checkbtnterreo == false && checkelevadorterreo == false && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)){
            setTimeout(() => {
                console.log("2 andar")
                andar = 2
                andarultimo = 1
                btnsegundoandar.checked = false
                elevadorsegundoandar.checked = false
                divcontainer.style.bottom = `620px`
            }, 3000);
            // 1
        }else if((checkelevadorprimeiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkbtnprimeiroandar && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false && checkbtnterreo == false && checkelevadorterreo == false)){
            setTimeout(() => {
                console.log("1 andar")
                andar = 1
                andarultimo = 0
                btnprimeiroandar.checked = false
                elevadorprimeiroandar.checked = false 
                divcontainer.style.bottom = `420px`
                }, 3000);
        // 0
        }else if((checkbtnterreo && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkelevadorterreo && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)){
            setTimeout(() => {
                console.log("Térreo")
                andar = 0
                andarultimo = 0
                btnterreo.checked = false
                elevadorterreo.checked = false
                divcontainer.style.bottom = `200px`
        }, 3000);
        // 2 1
        }else if((checkbtnprimeiroandar && checkbtnsegundoandar && checkelevadorterceiroandar == false && checkbtnterceiroandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkbtnprimeiroandar && checkelevadorsegundoandar && checkelevadorterceiroandar == false && checkbtnterceiroandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkelevadorprimeiroandar && checkelevadorsegundoandar && checkelevadorterceiroandar == false && checkbtnterceiroandar == false && checkbtnterreo == false && checkelevadorterreo == false) || (checkelevadorprimeiroandar && checkbtnsegundoandar && checkelevadorterceiroandar == false && checkbtnterceiroandar == false && checkbtnterreo == false && checkelevadorterreo == false)){
            setTimeout(() => {
                console.log("2 andar")
                andar = 2
                andarultimo = 1
                btnsegundoandar.checked = false
                elevadorsegundoandar.checked = false
                divcontainer.style.bottom = `620px`
            setTimeout(() => {
                console.log("1 andar")
                andar = 1
                btnprimeiroandar.checked = false
                elevadorprimeiroandar.checked = false
                divcontainer.style.bottom = `420px`
            
            }, 3000);
            }, 3000);
            // 2 0
        }else if((checkbtnterreo && checkbtnsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkbtnterreo && checkelevadorsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkelevadorterreo && checkelevadorsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false) || (checkelevadorterreo && checkbtnsegundoandar && checkbtnprimeiroandar == false && checkelevadorprimeiroandar == false && checkbtnterceiroandar == false && checkelevadorterceiroandar == false)){
            setTimeout(() => {
                console.log("2 Andar")
                andar = 2
                andarultimo = 1
                btnsegundoandar.checked = false
                elevadorsegundoandar.checked = false
                divcontainer.style.bottom = `620px`
            setTimeout(() => {
                console.log("Térreo")
                andar = 0
                andarultimo = 0
                btnterreo.checked = false
                elevadorterreo.checked = false
                divcontainer.style.bottom = `200px`
            }, 3000);
            }, 3000);
            // 1 0
        }else if((checkelevadorprimeiroandar && checkelevadorterreo && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkelevadorprimeiroandar && checkbtnterreo && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkbtnprimeiroandar && checkbtnterreo && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkbtnprimeiroandar && checkelevadorterreo && checkbtnsegundoandar == false && checkelevadorsegundoandar == false && checkelevadorterceiroandar == false && checkbtnterceiroandar == false)){
            setTimeout(() => {
                console.log("1 Andar")
                andar = 1
                andarultimo = 2
                btnprimeiroandar.checked = false
                elevadorprimeiroandar.checked = false
                divcontainer.style.bottom = `420px`
            setTimeout(() => {
                console.log("Térreo")
                andar = 0
                andarultimo = 1
                btnterreo.checked = false
                elevadorterreo.checked = false
                divcontainer.style.bottom = `200px`
            }, 3000); 
            }, 3000);    
       // 2 1 0         btn btn btn ou* btn ele btn ou* btn btn ele ou* btn ele ele ou* ele ele ele ou ele btn ele ou ele ele btn ou ele btn btn
    }else if((checkbtnsegundoandar && checkbtnprimeiroandar && checkbtnterreo && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkbtnsegundoandar && checkelevadorprimeiroandar && checkbtnterreo && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkbtnsegundoandar && checkbtnprimeiroandar && checkelevadorterreo && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkbtnsegundoandar && checkelevadorprimeiroandar && checkelevadorterreo && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkelevadorsegundoandar && checkelevadorprimeiroandar && checkelevadorterreo && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkelevadorsegundoandar && checkbtnprimeiroandar && checkelevadorterreo && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkelevadorsegundoandar && checkelevadorprimeiroandar && checkbtnterreo && checkelevadorterceiroandar == false && checkbtnterceiroandar == false) || (checkelevadorsegundoandar && checkbtnprimeiroandar && checkbtnterreo && checkelevadorterceiroandar == false && checkbtnterceiroandar == false)){
        setTimeout(() => {
            console.log("2 andar")
            andar = 2
            andarultimo = 1
            btnsegundoandar.checked = false
            elevadorsegundoandar.checked = false
            divcontainer.style.bottom = `620px`
        setTimeout(() => {
            console.log("1 andar")
            andar = 1
            btnprimeiroandar.checked = false
            elevadorprimeiroandar.checked = false
            divcontainer.style.bottom = `420px`
        setTimeout(() => {
            console.log("Térreo")
            andar = 0
            andarultimo = 1
            btnterreo.checked = false
            elevadorterreo.checked = false
            divcontainer.style.bottom = `200px`
        
        }, 3000);
        }, 3000);
        }, 3000);
    }}




}






/*
if (andar = 0){
    divcontainer.style.bottom = '200px'
}else if(andar = 1){
    divcontainer.style.bottom = '400px'
}else if(andar = 2){
    divcontainer.style.bottom = '600px'
}else if(andar = 3){
    divcontainer.style.bottom = '800px'
}
*/

