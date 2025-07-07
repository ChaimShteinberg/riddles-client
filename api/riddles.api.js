export async function getAllRiddles() {
    const res = await fetch("http://localhost:1456")
    const riddles = await res.json()
    console.log(riddles)
}

export async function addRiddle(newRiddle) {
    const res = await fetch("http://localhost:1456", {
        method: 'POST',
        body: JSON.stringify(newRiddle),
        headers: {
            "content-type": "application/json"
        }
    })
    console.log(res.statusText)
}

export async function updateRiddle(update) {
    const res = await fetch("http://localhost:1456", {
        method: 'PUT',
        body: JSON.stringify(update),
        headers: {
            "content-type": "application/json"
        }
    })
    console.log(res.statusText)
}
