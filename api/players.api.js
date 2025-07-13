export async function getAllPlayersApi() {
    const res = await fetch("http://localhost:1456/Players/getAll");
    const Players = await res.json();
    return Players;
}

export async function addPlayerApi(newPlayer) {
    const res = await fetch("http://localhost:1456/Players/create", {
        method: 'POST',
        body: JSON.stringify(newPlayer),
        headers: {
            "content-type": "application/json"
        }
    });
    console.log(res.statusText);
}

export async function updatePlayerApi(update) {
    const res = await fetch("http://localhost:1456/Players/update", {
        method: 'PUT',
        body: JSON.stringify(update),
        headers: {
            "content-type": "application/json"
        }
    })
    console.log(res.statusText)
}

export async function deletePlayerApi(id) {
    const res = await fetch(`http://localhost:1456/Players/delete/${id}`, {
        method: 'DELETE'
    })
    console.log(res.statusText)
}
