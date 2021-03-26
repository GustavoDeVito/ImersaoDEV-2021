//Template Vue.js

challenge = (number) => {    
    baseChallenge()
    
    if(number == 1) { getScreenDollarToReal() }
    else if(number == 2) {  }
    else if(number == 3) {  }
}

baseChallenge = () => {    
    $('#navbar').remove();
    $('#home').remove();
    $('#last').remove();
    
    window.scrollTo(0,0);
    $('body').css("overflow", "hidden")

    $('body').prepend('<div id="content"><div></div></div>')
    $('body').prepend(`
        <header id="navbar">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                <img id="navbarImg"src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-calculadora.svg" width="200" height="50"/>
                </a>
            </div>
            </nav>
        </header>
    `)
}

getScreenDollarToReal = () => {
    document.getElementById('content').children[0].id = 'challengeDollarToReal'
    new Vue({
        el: '#challengeDollarToReal',
        data: {
            valueDollar: 1,
            nowDollarReal: parseFloat(dollarToReal().toFixed(2)),
        },
        template: `
            <div id="challengeDollarToReal" class="container effect-parallax">                
                <div>
                    <h1>Dollar To Real</h1>
                    <label>Enter with an amount dollar:</label>
                    <input class="form-control" type="number" min="1" v-model.number="valueDollar" />
                    <label>Value in Real:</label>
                    <p class="form-control">R$ {{ (valueDollar * nowDollarReal).toFixed(2) }}</p>
                </div>
            </div>
        `,
    })
}