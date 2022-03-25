import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
	baseURL: "https://api.chucknorris.io/jokes",
});

export default instance;
