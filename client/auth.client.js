import readline from 'readline/promises';

const rl = readline.createInterface({
        input: process.stdin, 
        output: process.stdout
    });

export async function signup(){
    const username = await rl.question("enter your username: ");
    const password = await rl.question("enter your password: ");
    rl.close();
    const result = await signupApi({username, password});
    return result;
}