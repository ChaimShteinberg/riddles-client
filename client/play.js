import { getAllRiddlesApi } from "../api/riddles.api.js";
import Player from "../modules/player.js";
import Riddle from "../modules/riddle.js";

async function play() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    // הודעת פתיחה
    console.log("Welcome to the riddle game\n");

    // מבקש את שם המשחק ויוצר שחקן
    const name = await rl.question("Enter your name: ");

    const myPlayer = new Player(name)

    // בחירת קושי
    const level = await rl.question('Choose difficulty: easy / medium / hard: ');
    rl.close();

    const allRiddles = await getAllRiddlesApi()
    const riddleList = allRiddles.filter(Vriddle => Vriddle.level === level);

    // רץ על החידות
    for (const myRiddle of riddleList) {
        // יוצר אוביקט של חידה
        const newriddle = new Riddle(myRiddle.id, myRiddle.level, myRiddle.name, myRiddle.taskDescription, myRiddle.correctAnswer, myRiddle.hint);
        // מפעיל חידה
        newriddle.ask(myPlayer)
    }
    // סיום המשחק
    console.log("You have successfully completed the game!\n");
    // הצגת סיכום
    myPlayer.showStats()
}

export default play