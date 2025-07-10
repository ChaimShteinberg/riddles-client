import readline from "readline-sync";
import play from "./play.js";
import { createRiddle, deleteRiddle, getRiddles, updateRiddle } from "./riddles.client.js";

async function menu(){
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
        const choose = readline.question("Choose 0 - 6 ");

        switch (choose) {
            case "1":
                await play();
                break;
            case "2":
                await createRiddle();
                break;
            case "3":
                await getRiddles();
                break;
            case "4":
                await updateRiddle();
                break;
            case "5":
                await deleteRiddle();
                break;
            case "6":
                console.log("Not yet defined");
                break;
            case "0":
                test = false;
                break;
            default:
                console.log("Wrong, Try again");
                break;
        }
    }
}

export default menu;
