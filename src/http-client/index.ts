interface IRequestOptions {
    method: any;
}
export class HttpClient {

    constructor() { }

    private handleResponse(response: Response): Promise<any> {
        return response.json();
    }

    private handleError() { }

    private handleServerError(error) {
        console.log('server error', error)
    }

    private handleSuccess() { }

    private requestOptions(url: string, method, options?: RequestInit): Request {
        return new Request(url, Object.assign({}, options, { method: method }));
    }

    private requestHeaders(options): Headers {
        return new Headers();
    }

    get(url: string, requestOptions?: RequestInit): Promise<any> {
        let request = this.requestOptions(url, 'GET', requestOptions);
        console.log(request);
        return fetch(request)
            .then(this.handleResponse)
            .catch(this.handleServerError);
    }

    post(url: string, requestOptions?: RequestInit): Promise<any> {
        let request = this.requestOptions(url, 'POST', requestOptions);
        return fetch(request)
            .then(this.handleResponse)
            .catch(this.handleServerError);
    }

}