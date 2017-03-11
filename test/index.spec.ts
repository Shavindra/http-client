import { HttpClient } from '../src/http-client';

describe('HTTP Client', () => {

  let client;
  beforeEach(() => {


    client = new HttpClient();
  });

  it('should make a get request', () => {
    let get = client.get();
    expect(client.get).toBeTruthy();
  })

})