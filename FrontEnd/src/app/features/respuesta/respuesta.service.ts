import { Injectable } from '@angular/core';
import { Respuesta } from './respuesta';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor( private http: HttpClient) { }


  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/respuesta";

  public save(respuesta: Respuesta): Observable<Respuesta>{
    return this.http.post<Respuesta>(this.url+"/save", respuesta, this.httpOptions);
  }

  public findById(id: number): Observable<Respuesta>{
    return this.http.get<Respuesta>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Respuesta>{
    return this.http.delete<Respuesta>(this.url+"/deleteById/"+id, this.httpOptions);
  }

}
