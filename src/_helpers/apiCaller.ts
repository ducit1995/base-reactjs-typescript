import axios from 'axios';
import { configConstants, errorMessages } from '../_constants';
import { clearStorage } from './clearStorage';
import $ from 'jquery';
import { isEmpty } from 'lodash';
function apiCaller(endpoint: any, method = 'GET', body = {}, headers = {}, clearToken = true, showLoading = true, basUrl = configConstants.API_URL, checkDataResponse = true) {
    if (isEmpty(headers)) {
        if (sessionStorage.getItem('Authorization') || localStorage.getItem('Authorization')) {
            headers = {
                'Authorization': sessionStorage.getItem('Authorization') || localStorage.getItem('Authorization')
            }
        }
    }
    if (showLoading) {
        $('#loading').removeClass('hide');
    }
    return axios({
        method,
        timeout: configConstants.API_TIMEOUT,
        url: `${basUrl}${endpoint}`,
        data: body,
        headers: headers
    } as any).then(checkDataResponse ? handleResponse : noHandleResponse).catch((error) => {
        $('#loading').addClass('hide');
        if (error && error.response) {
            // handle auto remove token + logout when token expired
            if (clearToken && error.response.status === 401) {
                clearStorage();
            } else {
                let msg = 'Server Error';
                if (error?.response?.data?.errorCode && errorMessages[error.response.data.errorCode]) {
                    return Promise.reject(errorMessages[error.response.data.errorCode]);
                }
                if (error.response.data.msg || error.response.data.error) {
                    msg = error.response.data.msg ? error.response.data.msg : error.response.data.error;
                }
                return Promise.reject(msg);
            }
            let msg = 'Server Error';
            if (error.response.data.msg || error.response.data.error) {
                msg = error.response.data.msg ? error.response.data.msg : error.response.data.error;
            }
            return Promise.reject(msg);
        } else {
            if (typeof error === 'string' || error instanceof String) {
                return Promise.reject(error);
            } else {
                return Promise.reject('Server Error');
            }

        }
    });
}


function noHandleResponse(response: any) {
    $('#loading').addClass('hide');
    return response.data;
}

function handleResponse(response: any) {
    $('#loading').addClass('hide');
    if (!response.data.result || response.data.result !== 'ok') {
        let msg = response.data.msg ? response.data.msg : response.data.error
        return Promise.reject(msg);
    } else {
        return response.data;
    }
}

export {
    apiCaller
}