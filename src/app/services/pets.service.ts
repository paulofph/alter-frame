import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { error } from 'util';

@Injectable()
export class PetsService {

  constructor(
    private http: Http
  ) { }

  public getAllPets(): Observable<any> {
    return this.http.get("./assets/mock-data.json")
                    .map((res:any) => {
                      return res.json()
                    })
  }
}
