import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from 'src/app/student/students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private url = 'http://localhost:5000/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Host': 'http://localhost:4200',
    })
  };

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('HTTP request error: ' + error.statusText)
    );
  }

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url + '/Student', this.httpOptions)
    .pipe(catchError(this.handleError));
    // return this.http.get<Student[]>(this.url + '/Student')
    // .pipe(catchError(this.handleError));
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(
      this.url + '/Student/' + id,
      this.httpOptions
    )
      .pipe(catchError(this.handleError));
  }

  createStudent(student: Student): Observable<Student> {
    return this.http
      .post<Student>(this.url + '/Student/', student, this.httpOptions)
      .pipe(catchError(this.handleError));
      // .post<Student>(this.url + '/Student/', student)
      // .pipe(catchError(this.handleError));
  }

  upsertStudent(student: Student): Observable<Student> {
    return this.http
      .put<Student>(this.url + '/Student/', student, this.httpOptions)
      .pipe(catchError(this.handleError));
      // .put<Student>(this.url + '/Student/', student)
      // .pipe(catchError(this.handleError));
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http
      .delete<Student>(this.url + '/Student/' + id, this.httpOptions)
      .pipe(catchError(this.handleError));
      // .delete<Student>(this.url + '/Student/' + id)
      // // .pipe(catchError(this.handleError));
  }
}

