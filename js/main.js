import {Game} from "./games.js"
import {UI} from "./ui.js";
import {Detailes} from "./detailes.js";

let games = [];
let game_category = document.querySelectorAll('.navbar-nav .nav-link');
let category="";

getGames('MMORPG').then(execute);
for (let i = 0; i < game_category.length; i++) {
    game_category[i].addEventListener('click',function (e) {
        category=e.target.innerHTML;
        getGames(category).then(execute);
    })
    
}
async function getGames(category) {
    games=[]
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '15bbaaa5d8msh287856888af6dfcp1bb59ajsn3a1314dd92b7',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const api =  await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
    let data = await api.json();//list of games
    for (const ga of data) {
        let game = new Game(ga.id,ga.title,ga.thumbnail,ga.short_description,ga.genre,ga.platform);
        games.push(game);
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////

function execute() {
    document.querySelector('#games .row').innerHTML= UI.displayData(games);
    let cards = document.getElementsByClassName('card');
    let detailsSection = document.querySelector('#details');
    let gamesSection = document.querySelector('#games');
    let btnClose = document.querySelector('#btnClose');

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function (e) {
            let gamedDetailes = new Detailes(games[i].id);
            detailsSection.classList.replace('d-none','d-block');
            gamesSection.classList.add('d-none');
        })
    }
    btnClose.addEventListener('click' , function (e) {
            detailsSection.classList.replace('d-block', 'd-none',);
            gamesSection.classList.remove('d-none');
    })
    
}



