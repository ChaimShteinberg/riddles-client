export default class Player{
    constructor(name){
        this.name = name;
        this.times = [];
    }
    recordTime(start, end, penalty){
        this.times.push((end - start) / 1000 + penalty);
    }
    showStats(){
        let sum = 0;
        for (const time of this.times){
            sum += time;
        }
        console.log(`Amount: \n\n` + 
            `Game duration: ${sum} seconds \n` + 
            `Average time per question: ${sum / this.times.length} seconds\n`);        
    }
}
