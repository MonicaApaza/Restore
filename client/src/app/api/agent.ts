import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

axios.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
        console.log('caught by axios interceptor');
        return Promise.reject(error.response);
    }
);

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(response => responseBody(response)),
    post: (url: string, body: {}) => axios.post(url, body).then(response => responseBody(response)),
    put: (url: string, body: {}) => axios.put(url, body).then(response => responseBody(response)),
    delete: (url: string) => axios.delete(url).then(response => responseBody(response))
}

const Catalog = {
    list: () => requests.get('products'),
    details: (id: number) => requests.get(`products/${id}`)
}

const TestErrors = {
    get400Error: () => requests.get('buggy/bad-request'),
    get401Error: () => requests.get('buggy/unautorized'),
    get404Error: () => requests.get('buggy/not-found'),
    get500Error: () => requests.get('buggy/server-error'),
    getValidationError: () => requests.get('buggy/validation-error')
}

const agent = {
    Catalog,
    TestErrors
}

export default agent;