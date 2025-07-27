const serverPath = process.env.SERVER_PATH;

export async function signupApi(user_pass) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(`${serverPath}/players/signup`, {
        method: 'POST',
        body: JSON.stringify(user_pass),
        headers: {
            "content-type": "application/json"
        }
    });
    const result = res.text(res)
    return result;
}

export async function signinApi(user_pass) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(`${serverPath}/players/signin`, {
        method: 'POST',
        body: JSON.stringify(user_pass),
        headers: {
            "content-type": "application/json"
        }
    });
    const result = res.json();
    return result;
}