import { getAllPlayersApi } from '../api/players.api.js'

export async function playerService(username){
    const platers = await getPlayers();
    for (const player of platers) {
        if (player.username === username)
            return player
    }
}

export async function getPlayers() {
    const players = await getAllPlayersApi();
    return players;
}

console.log(await playerService("chaim"))