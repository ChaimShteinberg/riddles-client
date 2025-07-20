const serverPath = "http://localhost:1456";

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
    console.log(res.statusText);
}

export async function updatePlayerApi(update) {
    const res = await fetch(`${serverPath}/Players/update`, {
        method: 'PUT',
        body: JSON.stringify(update),
        headers: {
            "content-type": "application/json"
        }
    })
    console.log(res.statusText)
}

export async function deletePlayerApi(id) {
    const res = await fetch(`${serverPath}/Players/delete/${id}`, {
        method: 'DELETE'
    })
    console.log(res.statusText)
}
