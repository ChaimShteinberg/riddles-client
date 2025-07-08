import { addRiddleApi, getAllRiddlesApi, updateRiddleApi } from "../api/riddles.api";

export async function getRiddles() {
    const riddles = await getAllRiddlesApi();
    console.log(riddles)
}

export async function createRiddle() {
    const newRiddle = {}
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
    })
    newRiddle["id"] = await rl.question("enter the id for the riddle: ");
    let level
    let test = true;
    while (test) {
        level = await rl.question("enter the level: ")
        if (level === "easy" || level === "medium" || level === "hard") {
            test = false;
        } else {
            console.log("Wrong, Try again")
        }
    }
    newRiddle["level"] = level;
    newRiddle["name"] = await rl.question("enter the name for the riddle: ");
    newRiddle["taskDescription"] = await rl.question("enter the task description for the riddle: ");
    newRiddle["correctAnswer"] = await rl.question("enter the correct answer for the riddle: ");
    newRiddle["hint"] = await rl.question("enter the hint for the riddle: ");
    rl.close();
    await addRiddleApi(newRiddle)
}

export async function updateRiddle() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
    })
    const id = await rl.question("Enter the ID of the riddle you want to change: ")
    const riddle = {}
    riddle["id"] = Number(id);
    while (test) {
        console.log("Select the value you want to change: \n" +
            "1. level \n" +
            "2. name \n" +
            "3. taskDescription\n" +
            "4. correctAnswer \n" +
            "5. hint"
        )
        const key = await rl.question("select: (1 - 5)")
        const value = await rl.question("Enter the change: ")

        switch (key) {
            case "1":
                riddle["level"] = value;
                break;
            case "2":
                riddle["name"] = value;
                break;
            case "3":
                riddle["taskDescription"] = value;
                break;
            case "4":
                riddle["correctAnswer"] = value;
                break;
            case "5":
                riddle["hint"] = value;
                break;
        }
        const loop = await rl.question("Do you want to replace another value? (y/n)")
        switch (loop) {
            case "y":
                break;
            case "n":
                test = false
                break;
        }
    }
    rl.close()
    await updateRiddleApi(riddle)
}

export async function deleteRiddle() {
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
    })
    const id = await rl.question("Enter the ID of the riddle you want to delete: ")
    rl.close();
    updateRiddleApi({"id": id})
}