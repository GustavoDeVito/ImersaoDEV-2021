dollarToReal = () => {
    let url = 'https://economia.awesomeapi.com.br/all/USD-BRL'
        
    let xhttp = new XMLHttpRequest()
            xhttp.open("GET", url, false)
            xhttp.send()

    return parseFloat(JSON.parse(xhttp.responseText).USD.bid)
}

calculator = () => {
    new Vue({
        el: '#challengeCalculator',
        data: {            
          previous: null,
          current: '',
          operator: null,
          operatorClicked: false,
        },
        methods: {
            clear() {
                this.current = '';
              },
              sign() {
                this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`;
              },
              percent() {
                this.current = `${parseFloat(this.current) / 100}`;
              },
              append(number) {
                if (this.operatorClicked) {
                  this.current = '';
                  this.operatorClicked = false;
                }
                this.current = `${this.current}${number}`;
              },
              dot() {
                if (this.current.indexOf('.') === -1) {
                  this.append('.');
                }
              },
              setPrevious() {
                this.previous = this.current;
                this.operatorClicked = true;
              },
              divide() {
                this.operator = (a, b) => a / b;
                this.setPrevious();
              },
              times() {
                this.operator = (a, b) => a * b;
                this.setPrevious();
              },
              minus() {
                this.operator = (a, b) => (a - b) * -1;
                this.setPrevious();
              },
              add() {
                this.operator = (a, b) => a + b;
                this.setPrevious();
              },
              equal() {
                this.current = `${this.operator(
                  parseFloat(this.current), 
                  parseFloat(this.previous)
                )}`;
                this.previous = null;
              }
        },
    })
}

mentalist = () => {
  new Vue({
    el: '#challengeMentalist',
    data: {
      valueCorrect: 0,
      valueStart: "",
      valueFinal: "",
      valueKick: "",
      valueAttempts: 3,
      resultStatus: "Waiting...",
      resultHits: 0,
      resultErrors: 0,
    },
    methods: {
      config() {
        this.valueCorrect = parseInt(Math.random() * (this.valueFinal - this.valueStart) + this.valueStart)

        if(this.valueStart >= this.valueFinal || this.valueStart < 0 || this.valueFinal < 0) {
          this.resultStatus = "Enter the correct values..."                   
        }
        else {
          if(this.valueStart == "") { this.valueStart = 0 }
          this.resultStatus = "Ready..."
          $('.btn.btn-outline-success').prop('disabled', false)
          $('.btn.btn-outline-warning').prop('disabled', true)
        }
      },
      kick() {
        this.valueAttempts--
        if(this.valueKick != this.valueCorrect) {
          if(this.valueAttempts == 0) {
            this.resultStatus = "Loser, number: " + this.valueCorrect
            this.resultErrors++
            this.reload()
          }
          else {
            if(this.valueKick > this.valueCorrect) { this.resultStatus = "The number is less" }
            else { this.resultStatus = "The number is higher" }
          }
        }
        else {
          this.resultStatus = "Winner, number: " + this.valueCorrect
          this.resultHits++
          this.reload()
        }
      },
      reload() {
        this.valueCorrect = 0
        this.valueStart = "Start"
        this.valueFinal = "Final"
        this.valueKick = ""
        this.valueAttempts = 3
        $('.btn.btn-outline-warning').prop('disabled', false)
        $('.btn.btn-outline-success').prop('disabled', true)
      }
    },
  })
}

aluraflix = (movie) => {  
  try {
    const apiKey = "6cf8c264"
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=' + apiKey + '&s=' + movie)
      .then((response) => {
        console.log(response.data.Search)
        $.each(response.data.Search, (index, movie) => {
          $('.movieList').prepend(`
            <div class="movie">
              <div class="box efect">
                <img class="poster" src="${movie.Poster}" />
                <span>${movie.Title}</span>
              </div>
            </div>
          `)    
        })
      })
      .catch((err) => {console.log(err)})

  } catch (error) {
    console.error(error);
  }
}