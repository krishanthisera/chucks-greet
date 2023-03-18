import axios from 'axios';

export class ChuckNorrisAPI {
    private baseURL: string;
    private client: any;

    constructor() {
        this.baseURL = 'https://api.chucknorris.io/jokes';
        this.client = axios.create({
            baseURL: this.baseURL,
        });
    }

    public async getRandomJoke(): Promise<string> {
        try {
            const response = await this.client.get('/random');
            const joke = response.data.value;
            return joke;
        } catch (error) {
            console.error(error);
            return '';
        }
    }

    public async getCategoryJoke(category: string): Promise<string> {
        try {
            const response = await this.client.get(`/random?category=${category}`);
            const joke = response.data.value;
            return joke;
        } catch (error) {
            console.error(error);
            return '';
        }
    }

    public async getCategories(): Promise<string[]> {
        try {
            const response = await this.client.get('/categories');
            const categories = response.data;
            return categories;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}


