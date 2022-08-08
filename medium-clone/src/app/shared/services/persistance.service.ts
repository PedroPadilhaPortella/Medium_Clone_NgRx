import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {

  constructor() { }

  set(key: string, data: any): void {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error savint into localStorage');
    }
  }

  get(key: string): any {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        console.error('Error getting data from localStorage');
        return null;
    }
  }

  remove(key: string): any {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing data from localStorage');
        return null;
    }
  }
}
