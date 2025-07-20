const serverPath = "http://localhost:1456";

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

export async function updateRiddleApi(id, update) {
    const res = await fetch(`http://localhost:1456/riddles/update/${id}`, {
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
