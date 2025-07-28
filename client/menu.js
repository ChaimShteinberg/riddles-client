import readline from 'readline/promises';
import play from "./play.js";
import { createRiddle, deleteRiddle, getRiddles, updateRiddle } from "./riddles.client.js";
import { leaderboard } from "./players.client.js";
import { signin, signup } from "./auth.client.js";

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

export async function mainMenu() {
    let test = true;
    while (test) {
        console.log("What do you want to do?\n" +
            "1. sign up\n" +
            "2. sign in\n" +
            "3. Play the game\n" +
            "0. exit");
        const choose = await rl.question("Choose 0 - 3 ");

        switch (choose) {
            case "1": await signup(); break;
            case "2": await signin(); break;
            case "3": await play(); break;
            case "0":
                test = false;
                rl.close();
                break;
            default:
                console.log("Wrong, Try again");
                break;
        }
    }
}

export async function menu() {
    let test = true;
    while (test) {
        console.log("What do you want to do?\n" +
            "1. Play the game\n" +
            "2. Create a new riddle\n" +
            "3. Read all riddles\n" +
            "4. Update an existing riddle\n" +
            "5. Delete a riddle\n" +
            "6. View leaderboard\n" +
            "0. exit");
        const choose = await rl.question("Choose 0 - 6 ");

        switch (choose) {
            case "1": await play(); break;
            case "2": await createRiddle(); break;
            case "3": await getRiddles(); break;
            case "4": await updateRiddle(); break;
            case "5": await deleteRiddle(); break;
            case "6": await leaderboard(); break;
            case "0":
                test = false;
                break;
            default:
                console.log("Wrong, Try again");
                break;
        }
    }
}
