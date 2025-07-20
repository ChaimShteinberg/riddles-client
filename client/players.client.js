import readline from "readline-sync";
import { getAllPlayersApi } from '../api/players.api.js'

export async function playerService(name){
    const platers = await getPlayers()
    for (const player of platers) {
        if (player.name === name)
            return player
    }
}

export async function getPlayers() {
    const players = await getAllPlayersApi();
    console.log(players);
}

await playerService("chaim")