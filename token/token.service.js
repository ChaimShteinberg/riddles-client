import { readFile, writeFile } from "fs/promises";
import { signinByTokenApi } from "../api/auth.api.js";
import { mainMenu, menu } from "../client/menu.js";

export async function signinByToken() {
    try {
        const token = await getToken();
        if (!token) {
            throw new Error("token not found")
        }
        const result = await signinByTokenApi(token);
        if (result) {
            await menu();
        } else {
            throw new Error("token expired")
        }
    } catch {
        await mainMenu();
    }
}

export async function setToken(token) {
    await writeFile("C:/Users/Chaim0533197133/OneDrive/Documents/programming/projects/riddles-client/token/token.txt", token)
}

export async function getToken() {
    return await readFile("C:/Users/Chaim0533197133/OneDrive/Documents/programming/projects/riddles-client/token/token.txt", "utf-8")
}