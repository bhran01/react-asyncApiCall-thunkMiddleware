import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from 'redux-thunk'

let initialUserData = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    }
]


let rootReducer = (initialUserData, action) => {
    let newState = initialUserData
    switch (action.type) {
        case 'GET_USER_DATA':
            return [newState];
        case 'ADD_USER_DATA':
            return [
                ...newState,
                ...action.payload
            ];
        default:
            return newState;
    }
}
export const stateObj = legacy_createStore(rootReducer,initialUserData, applyMiddleware(thunk))