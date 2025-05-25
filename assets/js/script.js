$(document).ready(function() {
    $("header").load("/components/header.html", function() {
        configurarNavegacao();
        carregarComponenteInicial();
    });
    $("footer").load("/components/footer.html");
});

function configurarNavegacao() {
    $('.header_nav a').click(function(e) {
        e.preventDefault();
        const clickAlvo = $(this).attr('href');
        
        $('.header_nav a').removeClass('active');
        $(this).addClass('active');
        
        window.location.hash = clickAlvo;
        
        $('main section').hide();
        
        carregarComponente(clickAlvo);
    });
}

function carregarComponente(rota) {
    const componenteId = rota.replace('#', '');
    const $section = $(`section${rota}`);
    
    if ($section.is(':empty')) {
        $section.load(`/components/${componenteId}.html`, function() {
            $section.show();
        });
    } else {
        $section.show();
    }
}

function carregarComponenteInicial() {
    const rotaInicial = window.location.hash || '#home';
    $('.header_nav a').removeClass('active');
    $(`.header_nav a[href="${rotaInicial}"]`).addClass('active');
    $('main section').hide();
    carregarComponente(rotaInicial);
}