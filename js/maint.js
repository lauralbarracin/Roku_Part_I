//NAV BAR
const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if (nav.classList.contains("openSearch")) {
        return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");

});

/*const options = {
    method: 'GET', //consulta, es una peticion get. 
    headers: {
        'X-RapidAPI-Key': '4f09abf09amsh44c8275d607800cp1a32dajsn86ab48280fb0',
        'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
    }
};

fetch('https://mdblist.p.rapidapi.com/?s=classic', options)
    .then(response => response.json()) // son los datos que atrapa - data type json

    .then(data => { //arrow function => (name => parametros.accion())
        console.log(data);
        const list = data.search;
        console.log(list)
        console.log(list[0])
        console.log(data.search[0].title)

        list.map((item) => {
            const name = item.title;
            const year = item.year;
            const movie = `<h2>${name},${year}</h2>`;
            document.querySelector('.movies').innerHTML += movie;
        })
    })
    .catch(err => console.error(err));*/

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ce7de44d14msh0c379e8b3e54c0cp13ec11jsn5b34e52328d9',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=classic', options)
    .then(response => response.json())
    .then(data => {
        const list = data.d;

        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`
            document.querySelector('.movies').innerHTML += movie;
        })
    })


    .catch(err => console.error(err));

});

