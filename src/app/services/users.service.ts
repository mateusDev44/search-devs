import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { User } from '../utils/Interfaces/User'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = environment.api;

  constructor(private http: HttpClient) {}

  findUsers(username: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${username}`);
  }

}
