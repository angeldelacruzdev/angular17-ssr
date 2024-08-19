import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EndpointSimulationService {
  http: HttpClient = inject(HttpClient);

  constructor() {}

  hitEndPoint() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
