dollarToReal = () => {
    let url = 'https://economia.awesomeapi.com.br/all/USD-BRL'
        
    let xhttp = new XMLHttpRequest()
            xhttp.open("GET", url, false)
            xhttp.send()
        
    //console.log(JSON.parse(xhttp.responseText).USD.bid);
    return parseFloat(JSON.parse(xhttp.responseText).USD.bid)
}