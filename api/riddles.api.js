export async function getAllRiddles(){
    const res = await fetch("http://localhost:1456")
    const riddles = await res.json()
    console.log(riddles)
}
