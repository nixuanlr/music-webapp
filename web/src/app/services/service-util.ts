import { environment } from '../../environments/environment';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
export class ServiceUtil {
    static urlPrefix(url: string) {
        //return `${environment.apiUrl}${url}`;
    }

    static extractData(result: any) {
        if (result.errorCode === '-403') {
            sessionStorage.clear();
            //window.location.href = environment.loginUrl;
            return {};
        }
        if (result.errorCode === '403403') {
            sessionStorage.clear();
            //window.location.href = environment.loginUrl4Tool;
            return {};
        }
        if (result.data) {
            return result.data;
        }
        return {};
    }

    static extractDataWithCode(result: any) {
        if (result.errorCode === '-403') {
            sessionStorage.clear();
            //window.location.href = environment.loginUrl;
            return {};
        }
        if (result.errorCode === '403403') {
            sessionStorage.clear();
            //window.location.href = environment.loginUrl4Tool;
            return {};
        }
        return result;
    }

    static handleError(errResponse: HttpErrorResponse) {
        if (errResponse.status && errResponse.status === 403) {
            sessionStorage.clear();
            //window.location.href = environment.loginUrl;
            return Promise.reject('');
        }

        if (errResponse.error) {
            return Promise.reject(errResponse.error.message);
        } else {
            return Promise.reject('请求出错！');
        }
    }

    static handleErrorWidthCode(errResponse: HttpErrorResponse) {
        if (errResponse.status && errResponse.status === 403) {
            sessionStorage.clear();
            //window.location.href = environment.loginUrl;
            return Promise.reject('');
        }
        if (errResponse.error) {
            return Promise.reject(errResponse.error);
        } else {
            return Promise.reject('请求出错！');
        }
    }

    static initHttpParams(): HttpParams {
        return new HttpParams().set('_', new Date().getTime().toString());
    }

    static initHttpOptions() {
        return { withCredentials: true };
    }
}
