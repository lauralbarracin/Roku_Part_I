/*const options = {
    method: 'GET', //consulta, es una peticion get. 
    redirect: "follow",

    'API Key': 'k_ilc28crm', //esto sale del API
    'id': 'tt1375666'

};

fetch('https://imdb-api.com/en/API/Images/k_ilc28crm/tt1375666/Short', options)
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
/* })
    })
    .catch(err => console.error(err));
    */