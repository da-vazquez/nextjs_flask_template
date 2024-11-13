import axios, { AxiosResponse } from "axios";

const baseUrl = "http://localhost:5005"
const responseBody = <T>(response: AxiosResponse<T>) => response;

const request = {
  get: (url: string, p0: {
    headers: {
      Authorization: string; "Content-Type": string;
    };
  }) => axios.get(url).then(responseBody),
};

// Requests to API
const Requests = {
  getStatus: (): Promise<any> => 
    request.get(`${baseUrl}/api/v1/status`, {
      headers: {
        "Authorization": "",
        "Content-Type": ""
      }})
  // Add more requests here as needed
}


export default  { Requests }