const getContenedor = document.getElementById("cards-container");
const URL = "https://students-api.2.us-1.fl0.io/movies";

function moviesGenerador({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("movie-container");
  getContenedor.innerHTML += `
  <div class="bg-black text-center ms-5 me-5 rounded-3 p-5 mt-3">
  <div class="bg-white rounded-3">
  <h3> <a class="text-dark" href = "#pordefinir">${title}</a></h3> <h4> Año: ${year} </h4>
  <h4> Director: ${director} </h4>
  <h4> Duración: ${duration} </h4>
  <h4> Generos: ${genre.join("-")}</h4>
  <h4> Calificación: ${rate} </h4>
  <img class="rounded-4" src = "${poster}" alt="${title}"/> 
  </div>
  </div>
  `;
}

function getMovies() {
  $.get(URL, (movies, status) => {
    if (status === "success") {
      const movieCards = movies.map((movie) => {
        return moviesGenerador(movie);
      });

      // movieCards.forEach((card) => {
      //   cardContainer.appendChild(card);
      // });
    } else {
      const errorElement = document.createElement("h3");
      errorElement.innerText = `Error en la petición de AJAX al link ${URL}`;
      getContenedor.appendChild(errorElement);
    }
  });
}

getMovies();

module.exports = renderCards;
