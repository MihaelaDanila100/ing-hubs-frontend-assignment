import { LocalStorageService } from './localstorage-service.js';

export class AuthService {

    constructor() { }

    private _localStorageService: LocalStorageService = new LocalStorageService();

    public authUser(credentials: {email: string; password: string}): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(credentials.email === 'testuser@gmail.com' && credentials.password === 'Parola') {
                    const token = this.generateToken(credentials.email);
                    this._localStorageService.setAcessToken(token);
                    resolve(true);
                } else {
                    reject(new Error('Invalid credentials!'));
                }
            }, 2000);
        });
    }

    private generateToken(username: string): string {
        const token = 'dGVzdHVzZXJAZ21haWwuY29t';
        return token;
    }
}