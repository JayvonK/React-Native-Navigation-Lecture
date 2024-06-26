import { IToken, IUserInfo } from "../Interfaces/Interfaces";

const url = 'https://blogapijd.azurewebsites.net/';

export const createAccount = async (createUser: IUserInfo) => {
    const res = await fetch(url + 'User/AddUser', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createUser)
    });
    if(!res.ok){
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export const login = async (userInfo: IUserInfo) => {
    const res = await fetch(url + 'User/Login', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(userInfo)
    });
    if(!res.ok){
        const message = `An error has occured ${res.status}`
        throw new Error(message);
    }

    const data: IToken = await res.json();
    return data;
}

export const narutoFetch = async () => {
    let randNum = Math.floor(Math.random() * 1400);
    const promise = await fetch('https://narutodb.xyz/api/character/' + randNum);
    const data = await promise.json();
    return data;
}