import { HttpClient } from '../src/http-client';

window.onload = () => {

  const httpClient = new HttpClient();

  httpClient.get('http://beta.json-generator.com/api/json/get/NJ9ssqYvz').then((res) => {
    console.log(res);
  });
}
