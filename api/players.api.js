const serverPath = process.env.SERVER_PATH;

export async function getAllPlayersApi() {
    const res = await fetch(`${serverPath}/Players/getAll`);
    const players = await res.json();
    return players;
}

export async function addPlayerApi(newPlayer) {
    const res = await fetch(`${serverPath}/Players/create`, {
        method: 'POST',
        body: JSON.stringify(newPlayer),
        headers: {
            "content-type": "application/json"
        }
    });
    const player = await res.json()
    return player;
}

export async function updatePlayerApi(update) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(`${serverPath}/Players/update`, {
        method: 'PUT',
        body: JSON.stringify(update),
        headers: {
            "content-type": "application/json"
        }
    })
    return res.statusText;
}

export async function deletePlayerApi(id) {
    const res = await fetch(`${serverPath}/Players/delete/${id}`, {
        method: 'DELETE'
    })
}

export async function getLeaderboard() {
    const res = await fetch(`${serverPath}/Players/leaderboard`)
    const leaderboard = await res.json();
    return leaderboard;
}