import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

/* --------------- State initial ---------------*/

const initialState = {
    auth: {
        id: '',
        email: '',
        userName:'',
        firstName: '',
        lastName: '',
        token: ''
    },
    isLoggedIn: false,
    hasLoginFailed: false,
    nameEditionForm: false
};

/* --------------- Actions ---------------*/

export function loginAction(navigate) {
    return (dispatch) => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const body = JSON.stringify({ "email": email, "password": password });

        /*Method post  /user/login pour token*/
        fetch('http://localhost:3001/api/v1/user/login', {
            body: body,
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: "POST"
        })
        .then(response => {
            if (response.ok) {
            return response.json();
            }
        })
        .then(response => {
        const token = response.body.token;
        /*Method post  /user/profile pour obtenir les datas avec token*/
        fetch("http://localhost:3001/api/v1/user/profile", {
            headers: {
                'Authorization': 'Bearer' + response.body.token,
                'Content-Type': 'application/json'
            },
            method: "POST"
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(response => {
            dispatch(loginSuccessAction(response.body, token));
            navigate("/Account");
        })
        .catch(function(error) {
            dispatch(loginFailureAction(error));
        })
        })
        .catch(function(error) {
        dispatch(loginFailureAction(error));
        })
    }
}

export function loginSuccessAction(body, token) {
    localStorage.setItem('id', body.id);
    localStorage.setItem('token', token);
    return {
        type: "LOGIN_SUCCESS_ACTION",
        payload: { body, token }
    }
}
//console error
export function loginFailureAction(error) {
    console.log("Error at fetch:", error.message);
    return {
        type: "LOGIN_FAILURE_ACTION"
    }
}
//vide le localStorage
export function logoutAction() {
    localStorage.clear();
    return {
        type: "LOGOUT_ACTION"
    }
}
//affichage form mofif du userName
export function editNamesAction() {
    return {
        type: "EDIT_NAMES_ACTION"
    }
}
//modification du userName
export function changeNamesAction() {
    return (dispatch) => {
    const userName = document.getElementById('username').value;
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const body = JSON.stringify({userName: userName, firstName: firstName, lastName: lastName});
    const token = localStorage.getItem('token');

    /* Method put /user/profile pour modifier le nom*/
    fetch("http://localhost:3001/api/v1/user/profile", {
        body: body,
        headers: {
            'Authorization': 'Bearer' + token,
            'Content-Type': 'application/json'
        },
        method: "PUT"
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(data => {
        dispatch({
            type: "CHANGE_NAMES_ACTION",
            payload: { userName, firstName, lastName }
        })
    })
    .catch(function(error) {
        console.log("Error at fetch:" + error.message);
    })
    }
}

/*--------------- Reducer ---------------*/


function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS_ACTION": {
            return {
            ...state,
            auth: {
                ...state.auth,
                id: action.payload.body.id,
                email: action.payload.body.email,
                userName: action.payload.body.userName,
                firstName: action.payload.body.firstName,
                lastName: action.payload.body.lastName,
                token: action.payload.token,
            },
            isLoggedIn: true,
            hasLoginFailed: false
            }
        }
        //échec de la onnexion
        case "LOGIN_FAILURE_ACTION": {
            return {
            ...state,
            hasLoginFailed: true
            }
        }
        //déconnexion
        case "LOGOUT_ACTION": {
            return initialState
        }
        //édition du nom (affichage formulaire)
        case "EDIT_NAMES_ACTION": {
            return {
            ...state,
            nameEditionForm: !state.nameEditionForm
            }
        }
        //Modification du nom, préparation à une éventuelle demande d'affichage du userName dans la page account(message de bienvenue)
        case "CHANGE_NAMES_ACTION": {
            return {
                ...state,
                auth: {
                ...state.auth,
                userName: action.payload.userName,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
                }
            }
        }
        default:
        return state
    }
}

// Configuration de la persistance pour rester connecté au rafraichissement de la page: redux-persist
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
// configuration store: redux-toolkit
export const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store)
