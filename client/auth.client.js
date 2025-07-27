import { signupApi } from '../api/players.api.js';
import { rl } from './menu.js';

export async function signup() {
    const username = await rl.question("enter your username: ");
    const password = await rl.question("enter your password: ");
    rl.close();
    const result = await signupApi({ username, password });
    console.log(result);
}