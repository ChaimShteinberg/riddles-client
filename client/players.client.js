import { addPlayerApi, getAllPlayersApi } from '../api/players.api.js'

export async function playerService(username) {
    const platers = await getPlayers();
    for (const player of platers) {
        if (player.username === username)
            return player;
    };
    await createPlayer(username);
}

export async function getPlayers() {
    const players = await getAllPlayersApi();
    return players;
}

export async function createPlayer(username) {
    await addPlayerApi({"username": username});
}

console.log(await playerService("chaim"))