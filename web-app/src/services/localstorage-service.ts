export class LocalStorageService {
    
    constructor() { }

    private _accessTokenKey: string = 'accessToken';

    public getAcessToken(): string | null {
        return localStorage.getItem(this._accessTokenKey);
    }

    public setAcessToken(newValue: string) {
        localStorage.setItem(this._accessTokenKey, newValue);
    }

    public removeAcessToken() {
        localStorage.removeItem(this._accessTokenKey);
    }
}