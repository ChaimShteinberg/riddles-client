import { addPlayerApi, updatePlayerApi, getLeaderboard, getPlayerApi } from '../api/players.api.js'

export async function getPlayer() {
    const player = await getPlayerApi();
    return player;
}

export async function createPlayer(username) {
    const player = await addPlayerApi({ "username": username });
    return player
}

export async function updatePlayer(update) {
    await updatePlayerApi(update);
}

export async function leaderboard() {
    const leaderboard = await getLeaderboard();
    console.log(leaderboard);
}