const request = new XMLHttpRequest(); 
const url = "https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=Avengers+Endgame"

request.open("GET", url); 
request.setRequestHeader("X-RapidAPI-Key", "908ac684e4msh08a4c08f50317abp1a4e19jsn27c44c8339e4")
request.send(); 

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(request.responseText)
    }
}

// const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = 'logo.png';

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(logo);
// app.appendChild(container);

// const header = {
//     "X-RapidAPI-Key": "908ac684e4msh08a4c08f50317abp1a4e19jsn27c44c8339e4"
// }

// var request = new XMLHttpRequest();
// request.open('GET', header, 'https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=Disney', true);
// request.onload = function () {
//     var data = JSON.parse(this.response);
//     data.forEach(movie => {
//         console.log(movie.title)
//     })
//     ;

//     // if (request.status >= 200 && request.status < 400) {
//     //     data.forEach(movie => {
//     //         const card = document.createElement('div');
//     //         card.setAttribute('class', 'card');

//     //         const h1 = document.createElement('h1');
//     //         h1.textContent = movie.title;

//     //         const p = document.createElement('p');
//     //         movie.description = movie.description.substring(0, 300)
//     //         p.textContent = `${movie.description}...`

//     //         container.appendChild(card);
//     //         card.appendChild(h1);
//     //         card.appendChild(p);
//     //     });
//     // } else {
//     //     const error = document.createElement('marquee');
//     //     error.textContent = `It's not working`;
//     //     app.appendChild(error);
//     // }
// };

// request.send(); 