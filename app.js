import { signinByToken } from "./token/token.service.js";

async function main() {
    await signinByToken();
}

await main();