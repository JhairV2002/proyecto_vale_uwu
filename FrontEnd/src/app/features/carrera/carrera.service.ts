import { Injectable } from '@angular/core';
import { carrera } from './carrera';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class carreraService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url: string = 'http://localhost:8080/api/carrera';

  public save(carrera: carrera): Observable<carrera> {
    return this.http.post<carrera>(
      this.url + '/save',
      carrera,
      this.httpOptions
    );
  }

  public findById(id: number): Observable<carrera> {
    return this.http.get<carrera>(this.url + '/' + id, this.httpOptions);
  }

  public deleteById(id: number): Observable<carrera> {
    return this.http.delete<carrera>(
      this.url + '/deleteById/' + id,
      this.httpOptions
    );
  }

  public findAll(): Observable<carrera[]> {
    return this.http.get<carrera[]>(this.url + '/findAll', this.httpOptions);
  }

  public findByNombre(term: string): Observable<carrera[]> {
    return this.http.get<carrera[]>(
      this.url + '/findByNombre/' + term,
      this.httpOptions
    );
  }
}
