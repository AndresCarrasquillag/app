import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environments';
import { Dinosaurio } from './dinosaurio';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: "root"
})
export class DinosauriosService {

    private apiUrl: string = environment.baseUrl;

constructor(private http:HttpClient) { }

getDinos(): Observable<Dinosaurio[]> {
    return this.http.get<Dinosaurio[]>(this.apiUrl)
}

}
