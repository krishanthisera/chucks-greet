import { ChuckNorrisAPI } from './ChuckNorrisAPI';

export class HelloWorld {
    private message: string;
    private chuckNorrisAPI: ChuckNorrisAPI;

    constructor() {
        this.message = 'Hello, ';
        this.chuckNorrisAPI = new ChuckNorrisAPI();
    }

    public async greet(name: string): Promise<string> {
        const joke = await this.chuckNorrisAPI.getCategoryJoke('dev');
        return this.message + name + '! ' + joke;
    }
}
