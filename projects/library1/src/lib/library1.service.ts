import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Library1Service {

  get version() {
    return 'version: dev';
  }

  constructor() { }
}
