export default class Player {
    constructor(username, created_at, best_time) {
        this.username = username;
        this.created_at = created_at || null;
        this.best_time = best_time || null;
    }

    showStats(times) {
        let sum = 0;
        for (const time of times) {
            sum += time;
        }
        const average = sum / times.length;
        console.log(`Amount: \n\n` +
            `Game duration: ${sum} seconds \n` +
            `Average time per question: ${average} seconds\n`);
        this.recordTime(average)
    }

    recordTime(time) {
        if (this.best_time === null || this.best_time > time) {
            console.log(`Your new record is ${time}`);
            this.best_time = time;
        }
    }
}
