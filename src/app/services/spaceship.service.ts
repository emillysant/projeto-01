import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Spaceship } from '../models/spaceship.model';

@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {
    private url = 'http://localhost:3000/spaceships'
    constructor(private http:HttpClient) { }
    
    getSpaceships() :Observable<Spaceship[]>{
        return this.http.get<Spaceship[]>(this.url)
    }

    deleteSpaceship(id : number) :Observable<any>{
        return this.http.delete(`${this.url}/${id}`)
    }

    getSpaceshipById(id : number) :Observable<Spaceship>{
        return this.http.get<Spaceship>(`${this.url}/${id}`)
    }


    
    addSpaceship(spaceship : Spaceship) :Observable<Spaceship>{
        return this.http.post<Spaceship>(this.url, spaceship)
    }

    updateSpaceship(spaceship : Spaceship) :Observable<Spaceship>{
        return this.http.put<Spaceship>(`${this.url}/${spaceship.id}`, spaceship)
    }


}