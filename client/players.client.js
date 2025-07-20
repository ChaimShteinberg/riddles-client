import { addPlayerApi, getAllPlayersApi, updatePlayerApi } from '../api/players.api.js'

export async function playerService(username) {
    const platers = await getPlayers();
    for (const player of platers) {
        if (player.username === username)
            return player;
    };
    const player = await createPlayer(username);
    return player
}

export async function getPlayers() {
    const players = await getAllPlayersApi();
    return players;
}

export async function createPlayer(username) {
    const player = await addPlayerApi({ "username": username });
    return player
}

export async function updatePlayer(update) {
    await updatePlayerApi(update);
}