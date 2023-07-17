import {getLoginData, getLoginFetchData, saveUserProfilData} from "./API-data";
    
/* Get Login */
export const getLogin = async (identifiants) => {
const URL_API = "http://localhost:3001/api/v1/user/login";
    
const loginResponse = await fetch(URL_API, {
    body: JSON.stringify(identifiants),
    headers: {
        'Content-Type': "application/json",
    },
    method: 'POST',
    }).then((response) => response.json());
    
    console.clear();
    return await getLoginData(loginResponse);
    };
    
    /* if user is connected */
    export const getLoginFetch = async (token) => {
        const URL_API = "http://localhost:3001/api/v1/user/profile";
        const loginFetchResponse = await fetch(URL_API, {
        headers: {
            'Content-Type': "application/json",
            Authorization: 'Bearer ' + token,
        },
        method: 'POST',
        }).then((response) => response.json());
    
        console.clear();
        return await getLoginFetchData(loginFetchResponse);
    };
    
    /* Save the new name */
    export const saveUserProfil = async (token, username) => {
        const URL_API = "http://localhost:3001/api/v1/user/profile";
        const saveUserProfilResponse = await fetch(URL_API, {
            body: JSON.stringify({ username }),
            headers: {
                'Content-Type': "application/json",
                Authorization: 'Bearer ' + token,
            },
            method: 'PUT',
        }).then((response) => response.json());
    console.clear();
    return await saveUserProfilData(saveUserProfilResponse);
};