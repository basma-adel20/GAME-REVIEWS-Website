
 export class UI{

   static displayData(games) // display all games of the category
    {
       let row=``;
       for (let i = 0; i < games.length; i++)
       {
          row+=`<div class="col">
          <div class="card p-3 bg-transparent pb-0" >
            <img src=${games[i].thumbnail} class="w-100" alt="post">
            <div class="card-body pb-0 px-0 text-white">
              <div class="d-flex justify-content-between">
                <h3>
                  ${games[i].title}
                </h3>
                <span class="badge text-bg-primary p-2">Free</span>
              </div>
              <p class="card-text opacity-50 text-10 text-center mt-2">${games[i].short_description.split(' ').slice(0,9).join(' ')}....</p>
              <div class="card-footer d-flex justify-content-between px-0 text-10">
                <span class="badge gray-color">${games[i].genre}</span>
                <span class="badge gray-color">${games[i].platform}</span>
              </div>
            </div>
          </div>
        </div>`
       }
       return row;
    }

   static displayDetails(game) // display detailes of the specific game
    {
      document.querySelector('#detailsContent').innerHTML=`
        <div class="col-md-4">
        <img src=${game.thumbnail} class="w-100" alt="image details">
        </div>
        <div class="col-md-8">
        <h3>Title: ${game.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${game.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${game.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${game.status}</span> </p>
        <p class="small">${game.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href=${game.game_url}>Show Game</a>
        </div>
        `
    }


}