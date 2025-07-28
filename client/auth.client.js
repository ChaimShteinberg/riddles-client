import { signinApi, signupApi } from '../api/auth.api.js';
import { mainMenu, menu, rl } from './menu.js';
import { setToken } from "../token/token.service.js";

export async function signup() {
    const username = await rl.question("enter your username: ");
    const password = await rl.question("enter your password: ");
    const result = await signupApi({ username, password });
    console.log(result);
    return mainMenu()
}

export async function signin() {
    const username = await rl.question("enter your username: ");
    const password = await rl.question("enter your password: ");
    const result = await signinApi({ username, password });
    console.log(result.message)
    if (result.token) {
        await setToken(result.token)
        await menu();
    } else {
        return mainMenu()
    }
}