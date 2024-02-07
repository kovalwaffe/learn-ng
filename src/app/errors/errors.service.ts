import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor(private readonly httpClient:HttpClient) { }

  public getData(): any {
    this.httpClient.get('http://localhost:3000/error')
  }
}
