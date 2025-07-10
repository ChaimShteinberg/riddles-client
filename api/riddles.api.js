export async function getAllRiddlesApi() {
    const res = await fetch("http://localhost:1456/riddles/getAll");
    const riddles = await res.json();
    console.log(riddles);
}

export async function addRiddleApi(newRiddle) {
    const res = await fetch("http://localhost:1456/riddles/create", {
        method: 'POST',
        body: JSON.stringify(newRiddle),
        headers: {
            "content-type": "application/json"
        }
    });
    console.log(res.statusText);
}

export async function updateRiddleApi(update) {
    const res = await fetch("http://localhost:1456/riddles/update", {
        method: 'PUT',
        body: JSON.stringify(update),
        headers: {
            "content-type": "application/json"
        }
    })
    console.log(res.statusText)
}

export async function deleteRiddleApi(id) {
    const res = await fetch(`http://localhost:1456/riddles/delete/${id}`)
    console.log(res.statusText)
}
