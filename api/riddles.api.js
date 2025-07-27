import { getToken } from "../token/token.service.js";

const serverPath = process.env.SERVER_PATH;

export async function getRiddlersByLevelApi(level) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(`${serverPath}/riddles/getRiddlesByLevel/${level}`, {
        headers: {
            "authorization": await getToken()
        }
    });
    const riddles = await res.json();
    return riddles;
}

export async function getAllRiddlesApi() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(`${serverPath}/riddles/getAll`);
    const riddles = await res.json();
    return riddles;
}

export async function addRiddleApi(newRiddle) {
    await new Promise(resolve => setTimeout(resolve, 1000));
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
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(`${serverPath}/riddles/update/${id}`, {
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
