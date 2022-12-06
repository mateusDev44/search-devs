import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repository } from '../utils/Interfaces/Repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  url = environment.api;

  constructor(private http: HttpClient) {}

  findRepositories(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.url}/${username}/repos
    `);
  }

}
