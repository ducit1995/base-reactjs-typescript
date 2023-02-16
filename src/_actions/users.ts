import { apiCaller } from './../_helpers';
import { alertActions } from './';
import { userConstants } from './../_constants';
import { history } from '../_helpers';
import { IDataLogin } from '../_containers/Auth/Login/type';

const login = (data: IDataLogin) => {
    return (dispatch: any) => {
        dispatch(alertActions.clear());
        let token = 'Basic ' + btoa(data.username + ':' + data.password);
        let headers = {
            'Authorization': token
        }
        return apiCaller('/validateLogin', 'POST', {}, headers, false).then(
            (data) => {
                let user = data;
                user.isLogin = true;
                user.token = token;
                sessionStorage.setItem('Authorization', token);
                localStorage.setItem('Authorization', token);
                dispatch({
                    type: userConstants.LOGIN,
                    user: data
                });
                history.push('/dashboard');
            },
            error => {
                dispatch(alertActions.error({ 'message': error.toString(), 'screen': [userConstants.SCREEN_LOGIN] }));
            }
        );
    };
}

export const userActions = {
    login,
};
