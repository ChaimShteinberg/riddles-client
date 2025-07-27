import { getRiddlersByLevelApi } from "../api/riddles.api.js";
import Player from "../modules/player.js";
import Riddle from "../modules/riddle.js";
import { rl } from "./menu.js";
import { getPlayer, updatePlayer } from "./players.client.js";

async function play() {

    // הודעת פתיחה
    console.log("Welcome to the riddle game\n");

    const player = await getPlayer();

    const myPlayer = new Player(player.username, player.created_at, player.best_time);

    // בחירת קושי
    let test = true;
    let level;
    while (test) {
        level = await rl.question('Choose difficulty: easy / medium / hard: ');
        if (level === "easy" || level === "medium" || level === "hard") {
            test = false;
        } else {
            console.log("Wrong, Try again");
        }
    }
    if (myPlayer.best_time) {
        console.log(`Your best average time per riddle is ${myPlayer.best_time}`)
    }

    const Riddles = await getRiddlersByLevelApi(level);

    const times = []
    // רץ על החידות
    for (const myRiddle of Riddles) {
        // יוצר אוביקט של חידה
        const newriddle = new Riddle(myRiddle.id, myRiddle.level, myRiddle.name, myRiddle.taskDescription, myRiddle.correctAnswer, myRiddle.hint);
        // מפעיל חידה
        times.push(newriddle.ask());
    }
    // סיום המשחק
    console.log("You have successfully completed the game!\n");
    // הצגת סיכום
    myPlayer.showStats(times);

    await updatePlayer(myPlayer);
}

export default play;