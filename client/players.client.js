import readline from "readline-sync";
import { getAllPlayersApi } from '../api/players.api.js'

export async function getPlayers() {
    const players = await getAllPlayersApi();
    console.log(players);
}
