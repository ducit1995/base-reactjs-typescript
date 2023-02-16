import { userConstants } from './../../_constants';
import type { AnyAction } from 'redux';
import { IAuthenticationData } from './types';

var initialState: IAuthenticationData = {
    isLogin: false,
    token: ''
};
let authorizationSessionStorage: string | null = sessionStorage.getItem('Authorization');
let authorizationLocalStorage: string | null = localStorage.getItem('Authorization');

if (authorizationSessionStorage || authorizationLocalStorage) {
    if (authorizationSessionStorage && !authorizationLocalStorage) {
        localStorage.setItem("Authorization", authorizationSessionStorage);
    }
    initialState = {
        isLogin: true,
        token: authorizationSessionStorage || authorizationLocalStorage
    }
}
const authentication = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case userConstants.LOGIN:
            return action.user;
        case userConstants.LOGOUT:
            return {
                ...state,
                isLogin: false,
            };
        default: return state;
    }
};

export { authentication };