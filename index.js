// Remove element outline unless using keys  
function handleFirstTab(e) {
    if (e.keyCode === 9) {
        document.body.classList.add('user-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
};

window.addEventListener('keydown', handleFirstTab);

// Request 
const box = document.getElementById('movie-data'); 

let name = document.getElementById('movie-form');
name.onsubmit = function (event) {
    event.preventDefault();
    const request = new XMLHttpRequest();
    const title = document.getElementById('movie-title').value.replace(" ", "+")
    const url = "https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&type=movie&s=" + title;

    request.open("GET", url);
    request.setRequestHeader("X-RapidAPI-Key", "908ac684e4msh08a4c08f50317abp1a4e19jsn27c44c8339e4")
    request.send();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let title = JSON.parse(request.responseText); 
            title.Search.forEach(movie => {
                const card = document.createElement('div');
                card.setAttribute('class', 'card'); 

                const img = document.createElement('img'); 
                img.setAttribute('class', 'movie-img')
                img.setAttribute('src', movie.Poster); 

                box.appendChild(card)
                card.appendChild(img)
                
            });
        } else {
            // const error = document.createElement('div'); 
            // error.textContent = 'No movies found'; 
            // box.appendChild(error)
        }
    }

    name.reset();
}