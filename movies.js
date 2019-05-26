////////////////////////////////////////// variables globales

const body = document.querySelector('body');
const apiKey = 'b3dcdcc68ae2b92faa5e68a589ce1429';
const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
const input = document.querySelector('input');

const textoBusqueda = input.value;
const paginaActual = 1;

const popularTodas = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`;
const topRatedTodas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`;
const upcomingTodas = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`;
const nowPlayingTodas = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`
const search = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textoBusqueda}&page=${paginaActual}`;

/////////////////////////////////////////// web principal 

function fetchPeliculas(url, categoria) {

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const ul = document.querySelector(categoria);
            const cincoPelis = data.results.slice(0, 5);
            // console.log(ul);
            let lis = '';
            for (let i = 0; i < cincoPelis.length; i++) {
                //console.log(data.results[i].title);
                lis +=
                    `<li id=${cincoPelis[i].id} class="movie">
            <img id="movie-poster" class="movie" src= "https://image.tmdb.org/t/p/original${cincoPelis[i].poster_path}" />
            <p>${cincoPelis[i].title}</p>
        </li>`
            }
            ul.innerHTML = lis;
            // console.log(lis);
            document
                .querySelectorAll('li.movie')
                .forEach(function (li) {

                    li.addEventListener('click', function (e) {
                        const peliId = e.currentTarget.id;
                        console.log(peliId);

                        fetch(`https://api.themoviedb.org/3/movie/${peliId}?api_key=${apiKey}`)
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                const elModal = document.querySelector('#modal');
                                console.log(elModal);
                                // elModal.style.display = 'block';
                                elModal.classList.remove('hide');
                                elModal.classList.add('active');

                            });

                    })

                })

            document.querySelector('#modal button').onclick = function () {
                document.querySelector('#modal').classList.remove('active');
                document.querySelector('#modal').classList.add('hide');
            }

        });

};

fetchPeliculas(popular, '.popular-list');
fetchPeliculas(topRated, '.top-rated-list');
fetchPeliculas(upcoming, '.upcoming-list');
fetchPeliculas(nowPlaying, '.now-playing-list');


/////////////////////////////////////////////// categorias


function porCategoria(url, categoriaElegida, categoria1, categoria2, categoria3) {

    // document.querySelector(categoriaElegida).addEventListener('click', function (e) {

    fetch(url)
        .then(res => res.json())
        .then(data => {

            document.getElementById('imagen-presentacion').classList.add('hide');
            document.querySelector(categoria1).classList.add('hide');
            document.querySelector(categoria2).classList.add('hide');
            document.querySelector(categoria3).classList.add('hide');

            const ul = document.querySelector(categoriaElegida);
            const veintePelis = data.results;
            console.log(veintePelis);
            let lis = '';
            for (let i = 0; i < veintePelis.length; i++) {
                //console.log(data.results[i].title);
                lis +=
                    `<li id=${veintePelis[i].id} class="movie">
            <img id="movie-poster" class="movie" src= "https://image.tmdb.org/t/p/original${veintePelis[i].poster_path}" />
            <p>${veintePelis[i].title}</p>
        </li>`
            }
            ul.innerHTML = lis;
            // console.log(lis);
            document
                .querySelectorAll('li.movie')
                .forEach(function (li) {

                    li.addEventListener('click', function (e) {
                        const peliId = e.currentTarget.id;
                        console.log(peliId);

                        fetch(`https://api.themoviedb.org/3/movie/${peliId}?api_key=${apiKey}`)
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                const elModal = document.querySelector('#modal');
                                console.log(elModal);
                                // elModal.style.display = 'block';
                                elModal.classList.remove('hide');
                                elModal.classList.add('active');

                            });

                    })

                })

            document.querySelector('#modal button').onclick = function () {
                document.querySelector('#modal').classList.remove('active');
                document.querySelector('#modal').classList.add('hide');
            }

        });

    // });

};

var navBarElementos = document.getElementsByClassName('nav-item');
console.log(navBarElementos);

for (var i = 0; i < navBarElementos.length; i++) {
    console.log(navBarElementos[i]);
    if (navBarElementos[i].onclick) {
        console.log(navBarElementos[i]);
        
        porCategoria(popular, '.popular-list', '.top-rated-list', '.upcoming-list', '.now-playing-list');
    };
};

//////////////////////////////////////////////// search input



///////////////////////////////////////////////// modal




