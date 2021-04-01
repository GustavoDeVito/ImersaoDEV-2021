//Template Vue.js

let logoImersaoDEV = [
  "https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-conversor-de-moedas.svg",
  "https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-calculadora.svg",
  "https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-mentalista.svg",
  "https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg",
]

challenge = (number) => {    
    baseChallenge(number)

    if(number == 1) { getScreenDollarToReal() }
    else if(number == 2) { getScreenCalculator() }
    else if(number == 3) { getScreenMentalist() }
    else if(number == 4) { getScreenAluraflix() }
}

baseChallenge = (number) => {
    $('#navbar').remove();
    $('#home').remove();
    $('#last').remove();

    window.scrollTo(0,0);

    $('body').css("overflow", "hidden")
    $('html').css("overflow", "hidden")

    $('body').prepend('<a id="buttonBack" href="index.html"><i class="fas fa-times"></i></a>')
    $('body').prepend('<div id="content"><div></div></div>')
    $('body').prepend(`
        <header id="navbar">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                <img id="navbarImg"src="` + logoImersaoDEV[number - 1] + `" width="200" height="50" />
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

getScreenCalculator = () => {
  document.getElementById('content').children[0].id = 'challengeCalculator'

  $('#challengeCalculator').prepend(`
    <div class="container effect-parallax">
      <div class="calculator">
        <div class="display">{{ current || '0' }}</div>
        <div v-on:click="clear" class="btn">C</div>
        <div v-on:click="sign" class="btn">+/-</div>
        <div v-on:click="percent" class="btn">%</div>
        <div v-on:click="divide" class="btn operator">÷</div>
        <div v-on:click="append('7')" class="btn">7</div>
        <div v-on:click="append('8')" class="btn">8</div>
        <div v-on:click="append('9')" class="btn">9</div>
        <div v-on:click="times" class="btn operator">x</div>
        <div v-on:click="append('4')" class="btn">4</div>
        <div v-on:click="append('5')" class="btn">5</div>
        <div v-on:click="append('6')" class="btn">6</div>
        <div v-on:click="minus" class="btn operator">-</div>
        <div v-on:click="append('1')" class="btn">1</div>
        <div v-on:click="append('2')" class="btn">2</div>
        <div v-on:click="append('3')" class="btn">3</div>
        <div v-on:click="add" class="btn operator">+</div>
        <div v-on:click="append('0')" class="btn zero">0</div>
        <div v-on:click="dot" class="btn">.</div>
        <div v-on:click="equal" class="btn operator">=</div>
      </div>
    </div>
  `)

  calculator()
}

getScreenMentalist = () => {
  document.getElementById('content').children[0].id = 'challengeMentalist'

  $('#challengeMentalist').prepend(`
      <div class="container effect-parallax">                
        <div class="game">
          <h1>Mentalist</h1>
          <div class="config">
            <label>Enter with the interval</label>
            <input class="form-control" type="number" min="0" max="100" v-model.number="valueStart" placeholder="Start"/>            
            <input class="form-control" type="number" min="0" max="100" v-model.number="valueFinal" placeholder="Final" />
            <button type="button" class="btn btn-outline-warning" v-on:click="config"><i class="fas fa-cog"></i></button>
          </div>
          <div class="status">
            <label>Kick a value:</label>
            <input class="form-control" type="number" v-model.number="valueKick" v-on:keyup.enter="kick" />
            <button type="button" class="btn btn-outline-success" disabled v-on:click="kick"><i class="fas fa-check"></i></button>
            <p id="resultStatus" class="form-control">{{ resultStatus }}</p>
          </div>
          <div class="score">
            <label>Hits</label>
            <label>Errors</label>
            <br />
            <p class="form-control">{{ resultErrors }}</p>
            <p class="form-control">{{ resultHits }}</p>
          </div>
        </div>
      </div>
    `)

    mentalist()
}

getScreenAluraflix = () => {
  document.getElementById('content').children[0].id = 'challengeAluraflix'

  new Vue({
    el: '#challengeAluraflix',
    data: {
      movieSearch: "",
    },
    methods: {
      search() {
        $('.swiper-container').remove();
        $('.movieList').prepend(`<div class="swiper-container"><div class="swiper-wrapper"></div></div>`)

        aluraflix(this.movieSearch)

        this.movieSearch = ""
      }
    },
    template: `
      <div id="challengeAluraflix" class="container effect-parallax">
        <div class="movieSearch">
          <h1>AluraFlix</h1>
          <label>Movie Search</label>
          <input class="form-control" type="text" v-model="movieSearch" v-on:keyup.enter="search" />
          <button type="button" class="btn btn-outline-light" v-on:click="search"><i class="fas fa-plus"></i></button>
        </div>
        <div class="movieList">
        </div>
      </div>
      `,
  })
}