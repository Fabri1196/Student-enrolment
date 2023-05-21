import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from './Student';

@Injectable({
    providedIn: 'root'
  })
export class StudentService {
    
    // Backend
    private url = 'http://localhost:5000/api';

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Host': 'http://localhost:4200',
        })
    };

    constructor(
      private http: HttpClient) {
    }

    getStudents(): Observable<Student[]> {
      return this.http.get<Student[]>(
        this.url + '/Tickets',
        this.httpOptions
      )
        // .pipe(catchError(this.handleError));
    }

}