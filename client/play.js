import readline from "readline-sync";
import { getAllRiddlesApi } from "../api/riddles.api.js";
import Player from "../modules/player.js";
import Riddle from "../modules/riddle.js";
import { playerService } from "./players.client.js";

async function play() {

    // הודעת פתיחה
    console.log("Welcome to the riddle game\n");

    // מבקש את שם המשחק ויוצר שחקן
    const username = readline.question("Enter your user name: ");

    const player = await playerService(username);

    const myPlayer = new Player(player.username, player.created_at, player.best_time);

    // בחירת קושי
    const level = readline.question('Choose difficulty: easy / medium / hard: ');

    const allRiddles = await getAllRiddlesApi();
    const riddleList = allRiddles.filter(Vriddle => Vriddle.level === level);

    const times = []
    // רץ על החידות
    for (const myRiddle of riddleList) {
        // יוצר אוביקט של חידה
        const newriddle = new Riddle(myRiddle.id, myRiddle.level, myRiddle.name, myRiddle.taskDescription, myRiddle.correctAnswer, myRiddle.hint);
        // מפעיל חידה
        times.push = newriddle.ask();
    }
    // סיום המשחק
    console.log("You have successfully completed the game!\n");
    // הצגת סיכום
    myPlayer.showStats(times);
}

export default play;