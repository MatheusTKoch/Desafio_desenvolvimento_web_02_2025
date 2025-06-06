let duracao = 1200;
let tempoRest = duracao;
let pausado= false;
let interval;

function minutSegund(segundos){
    let min = Math.floor(segundos/60);
    let seg = segundos % 60;
    return(min <10 ? '0' + min : min) + ':' + (seg <10 ? '0' + seg : seg);
}

function atualizaDisplay(){
    $('#timer').text(minutSegund(tempoRest));
}

function iniciarCronometro(){
    interval = setInterval(() =>{
        if(!pausado){
            if(tempoRest> 0){
                tempoRest--;
                atualizaDisplay();
            }else{
                clearInterval(interval);
                $('#timer').text("Tempo esgotado!");
                $('#pause').prop('disable', true);
            }
        }
    }, 1000);
}

// Botão de iniciar
$('#start').click(() =>{
    $('#start').prop('disabled', true);
    $('#pause').prop('disabled', false);
    pausado = false;
    iniciarCronometro();
});

// Botão de pausar/continuar
$('#pause').click(() =>{
    pausado = !pausado;
    $('#pause').text(pausado? 'Continuar' : 'Pausar');
});

//Botão de Reset
$('#reset').click(() =>{
    clearInterval(interval);
    tempoRest = duracao;
    atualizaDisplay();
    $('#start').prop('disabled', false);
    $('pause').prop('disabled', true).text('Pausar');
    pausado = false;
});

atualizaDisplay();
