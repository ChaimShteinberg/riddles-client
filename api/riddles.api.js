const serverPath = "https://riddles-server.onrender.com";

export async function getAllRiddlesApi() {
    const res = await fetch(`${serverPath}/riddles/getAll`);
    const riddles = await res.json();
    return riddles;
}

export async function addRiddleApi(newRiddle) {
    const res = await fetch(`${serverPath}/riddles/create`, {
        method: 'POST',
        body: JSON.stringify(newRiddle),
        headers: {
            "content-type": "application/json"
        }
    });
    console.log(res.statusText);
}

export async function updateRiddleApi(update) {
    const res = await fetch(`${serverPath}/riddles/update`, {
        method: 'PUT',
        body: JSON.stringify(update),
        headers: {
            "content-type": "application/json"
        }
    })
    console.log(res.statusText)
}

export async function deleteRiddleApi(id) {
    const res = await fetch(`${serverPath}/riddles/delete/${id}`, {
        method: 'DELETE'
    })
    console.log(res.statusText)
}
