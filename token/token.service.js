import { readFile, writeFile } from "fs/promises";
import { signinByTokenApi } from "../api/auth.api.js";
import { mainMenu, menu } from "../client/menu.js";

export async function signinByToken() {
    try {
        const token = await getToken();
        signinByTokenApi(token);
        await menu();
    } catch {
        await mainMenu();
    }
}

export async function setToken(token) {
    await writeFile("C:/Users/Chaim0533197133/OneDrive/Documents/programming/projects/riddles-client/token/token.txt", token)
}

export async function getToken() {
    return await readFile("C:/Users/Chaim0533197133/OneDrive/Documents/programming/projects/riddles-client/token/token.txt")
}