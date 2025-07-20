import { addPlayerApi, getAllPlayersApi, updatePlayerApi } from '../api/players.api.js'

export async function playerService(username) {
    while (true) {
        const platers = await getPlayers();
        for (const player of platers) {
            if (player.username === username)
                return player;
        };
        await createPlayer(username);
    }
}

export async function getPlayers() {
    const players = await getAllPlayersApi();
    return players;
}

export async function createPlayer(username) {
    await addPlayerApi({ "username": username });
}

export async function updatePlayer(update){
    await updatePlayerApi(update);
}