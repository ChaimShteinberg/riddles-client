import readline from 'readline-sync';

// מבנה חידה

export default class Riddle{
    constructor(id, level, name, taskDescription, correctAnswer, hint){
        this.id = id,
        this.level = level,
        this.name = name, 
        this.taskDescription = taskDescription, 
        this.correctAnswer = correctAnswer, 
        this.hint = hint
    }

    // פעילות החידה
    ask(player){
        let penalty = 0

        // מציג את החידה
        console.log(`Riddle number ${this.id}: \n\n` +
            `The riddle is: ${this.taskDescription}\n`);
        // מפעיל טיימר
        let start = Date.now();
        
        let test = true;
        while (test){
            // ממתין לקלט מהמשתמש
            const Answer = readline.question("Answer the riddle: ");
            // בודק את התשובה ומגיב בהתאם
            if (Answer === this.correctAnswer){
                test = false;
                console.log("\ncorrect Answer \n");   
            } else if (Answer === "hint"){
                // אפשרות לרמז
                console.log(this.hint);
                penalty += 10;
            } else {
                console.log("\nWrong, Try again\n");                
            }
        }
        // סוגר טיימר
        const end = Date.now();
        if (end - start > 5000){
            console.log("Too slow! 5 seconds penalty applied.");
            penalty += 5;
        }
        // שומר את משך זמן החידה
        player.recordTime(start, end, penalty);
    }
}   
