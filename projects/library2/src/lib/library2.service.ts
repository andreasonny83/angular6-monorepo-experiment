import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Library2Service {

  get version() {
    return 'dev';
  }

  get name() {
    return 'Library2';
  }

  constructor() { }
}
