import { UI } from "./ui.js";

export class Detailes 
{  // incude the detailes page section and the methods in it  
    constructor(id){
        this.getDetails(id);
    }
    async getDetails(_id){
        const options = {
            method: 'GET',
            params: {id: _id},
            headers: {
                'X-RapidAPI-Key': '15bbaaa5d8msh287856888af6dfcp1bb59ajsn3a1314dd92b7',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }  
        };
        const api =  await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${_id}`, options);
        let game = await api.json();//list of games
        UI.displayDetails(game);
    }
}