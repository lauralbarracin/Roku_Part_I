const options = {
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
            const movie = `<h2>Movie Name:${name},${year}</h2>`;

            document.querySelector('.movies').innerHTML += movie;
            document.querySelector('.year').innerHTML += year;
            /*const paragraph = document.createElement('p')
            paragraph.innerHTML = movie;

            const container = document.querySelector("#container");

            container.appendChild(paragraph);*/
        })
    })
    .catch(err => console.error(err));