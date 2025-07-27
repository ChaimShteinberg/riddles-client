import { readFile, writeFile } from "fs/promises";

export async function setToken(token) {
    await writeFile("C:/Users/Chaim0533197133/OneDrive/Documents/programming/projects/riddles-client/token/token.txt", token)
}

export async function getToken(){
    return await readFile("C:/Users/Chaim0533197133/OneDrive/Documents/programming/projects/riddles-client/token/token.txt")
}