export function DollarToReal() {
    let url = 'https://economia.awesomeapi.com.br/all/USD-BRL'
        
    var xhttp = new XMLHttpRequest()
            xhttp.open("GET", url, false)
            xhttp.send()
        
    return JSON.parse(xhttp.responseText).USD.bid
}