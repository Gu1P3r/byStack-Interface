import { Injectable } from '@angular/core';

const NOME_KEY = 'AuthName';

@Injectable()
export class NomeStorageService {

    constructor() { }

    signOut() {
        window.sessionStorage.clear();
    }

    public saveNomeS(nome: string) {
        window.sessionStorage.removeItem(NOME_KEY);
        window.sessionStorage.setItem(NOME_KEY, nome);
    }

    public getNomeS(): string {
        return sessionStorage.getItem(NOME_KEY);
    }

    public removeToken(){
        window.sessionStorage.removeItem(NOME_KEY);
    }
}
