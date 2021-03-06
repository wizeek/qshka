import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChampionService {
    constructor(private http: HttpClient) {
    }

    getChampionList(): Observable<string[]> {
        return this.http.get<string[]>('/api/champions');
    }
}
