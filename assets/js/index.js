// create wall of movies from JSON db

//const data = require('../json/movies.json');
// add json 

const request = new Request('assets/json/movies.json');
fetch(request)
  .then((response) => response.json())
  .then((jsonMovies) => {

    const section = document.querySelector('section');
    const movies = jsonMovies.results;

    for (const movie of movies) {
      const card = document.createElement('div');
      card.classList.add('card');

      const cardImg = document.createElement('img');
      cardImg.classList.add('cardImg');
      cardImg.setAttribute('src', movie.poster_path);
      cardImg.setAttribute('alt', movie.original_title);

      const cardTitle = document.createElement('h2');
      cardTitle.classList.add('cardTitle');
      cardTitle.textContent = movie.original_title;

      const cardText = document.createElement('p');
      cardText.classList.add('cardText');
      cardText.textContent = movie.overview;

      const cardStars = document.createElement('div');
      cardStars.classList.add('Average');

      //stars for average 

      note = Math.round(Number(movie.vote_average) / 2);
      // cardStars.textContent = note;
      for (let i = 1; i <= note; i++) {

        star = document.createElement("img");
        star.src = 'assets/img/star_fill.png';
        star.classList.add('star')

        cardStars.append(star);

      }

      let emptyStars = 5 - note;
      for (let i = 1; i <= emptyStars; i++) {
        star = document.createElement("img");
        star.src = 'assets/img/star.png';
        star.classList.add('star')

        cardStars.append(star);
      }

      card.appendChild(cardImg);
      card.appendChild(cardTitle);
      card.appendChild(cardText);
      card.appendChild(cardStars);

      section.appendChild(card);
    }

  })

