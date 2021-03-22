loadingTime = () => {
    document.getElementById('content').children[0].innerHTML = '<div class="spinner"></div>'

    cont = 0
    let loadingCircle = setInterval(() => {
        document.getElementById('content').children[0].children[0].innerHTML += '<div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div>'       
        cont++
        if(cont >= 3) clearInterval(loadingCircle)
    }, 500)
    
    loadingCircle
}

getHome = () => {
    document.getElementById('content').children[0].id = 'home'
    new Vue({
        el: '#home',
        template: '<h1>Home</h1>',
    })
}

getAbout = () => {
    document.getElementById('content').children[0].id = 'sobre'
    new Vue({
        el: '#sobre',
        template: `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="https://avatars.githubusercontent.com/u/44655561?v=4" />
            <div class="card-body">
            <h5 class="card-title">Gustavo de Vito</h5>
            <p class="card-text">Admirer of the technologies that improve our world.</p>
            <a href="https://github.com/GustavoDeVito" class="btn btn-dark">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/gustavo-de-vito-70aa99206/" class="btn btn-primary">
                <i class="fab fa-linkedin"></i>
            </a>
            </div>
        </div>
        `,
    })
}

contentHTML = (type) => {

    loadingTime()

    setTimeout(() => {
        document.getElementById('content').children[0].innerHTML = ''

        if (type == 'home') { getHome() }
        else if (type == 'about') { getAbout() }

    }, 3000)

}