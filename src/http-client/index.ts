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

  requestOptions(options): Request {
    return new Request(Object.assign({}, options));
  }

  requestHeader(options): Headers {
    return new Headers({
      'Content-Type': 'application/json'
    })
  }

  get(url: string, requestOptions?): Promise<any> {
    return fetch(url, {method: 'GET'})
      .then(this.handleResponse)
      .catch(this.handleServerError);
  }

  post() {

  }

}