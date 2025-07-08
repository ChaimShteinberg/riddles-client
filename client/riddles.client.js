import { addRiddle, getAllRiddles } from "../api/riddles.api";

async function getRiddles() {
    const riddles = await getAllRiddles();
    return riddles
}

async function createRiddle() {
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
    await addRiddle(newRiddle)
}