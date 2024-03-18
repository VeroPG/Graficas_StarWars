/* 1.-  Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.
En el eje X el nombre de la película
En el eje Y año de publicación
API ENDPOINT --> https://swapi.dev/api/films/ */
fetch(`https://swapi.dev/api/films/`)
  .then((res) => res.json())
  .then((films) => {
    let titulo = [];
    let year = [];
    for (let i = 0; i < films.results.length; i++) {
      titulo.push(films.results[i].title);
      year.push(films.results[i].release_date.slice(0, 4));
    }
    console.log(titulo);
    console.log(year);

    var options = {
      fullWidth: false,
      chartPadding: {
        right: 50,
      },
      width: "600px",
      height: "500px",
      onlyInteger: true,
    };

    new Chartist.Line(
      ".ct-chart",
      {
        labels: titulo,
        series: [year],
      },
      options
    );
  });


  /*  Pediremos los personajes de Star Wars y pintaremos una gráfica de barras en la que podamos ver
En el eje X el nombre del personaje
En el eje Y el número de películas en las que ha participado.
API ENDPOINT --> https://swapi.dev/api/people/
*/

fetch("https://swapi.dev/api/people/?format=json")
    .then(element => element.json())
    .then(film => {

        let personajes = [];
        let movies = [];

        for (let i = 0; i < film.results.length; i++) {

            personajes.push(film.results[i].name);
            movies.push(film.results[i].films.length)
        };

        new Chartist.Line('.ct-chart2', {
            labels: personajes,
            series: [
              movies
            ]
          }, {
            fullWidth: true,
            chartPadding: {
              right: 40

            },

        });
    });