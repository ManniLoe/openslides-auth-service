import Token from './token';

export default class Client implements IClient {
    private pClientId: string;
    private pClientSecret: string;
    private pUsername: string;
    private pPassword: string;
    private pSessionId: string;

    public get sessionId(): string {
        return this.pSessionId;
    }

    public get username(): string {
        return this.pUsername;
    }

    public get password(): string {
        return this.pPassword;
    }

    public get clientId(): string {
        return this.pClientId;
    }
    public get clientSecret(): string {
        return this.pClientSecret;
    }

    public constructor(username: string, password: string, clientId: string) {
        this.pUsername = username;
        this.pPassword = password;
        this.pClientId = clientId;
    }
    // private redirectUris: string[];
    // private scope: string;

    public setSession(sessionId: string, token: Token): void {
        this.pSessionId = sessionId;
    }
}

export interface IClient {
    sessionId: string;
}
