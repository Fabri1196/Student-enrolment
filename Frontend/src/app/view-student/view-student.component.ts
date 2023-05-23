import { Component, Inject } from '@angular/core';
import { StudentService } from '../student/Student.Service';
import { FormControl } from '@angular/forms';
import { Student } from '../student/Student';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'view-student',
  templateUrl: './view-student.component.html',
  providers: [StudentService],
  styleUrls: ['./view-student.component.scss'],
})
export class ViewStudentComponent {
  protected student: Student;
  // lastnameControl: FormControl;
  // firstnameControl: FormControl;
  // ageControl: FormControl;
  // emailControl: FormControl;

  constructor(
    // public dialogRef: MatDialogRef<ViewStudentComponent>,
    // private StudentService: StudentService,
    @Inject(MAT_DIALOG_DATA) private input: Student,
    ) {
    this.student = JSON.parse(JSON.stringify(input));
    // this.lastnameControl = new FormControl(this.student.lastname);
    // this.firstnameControl = new FormControl(this.student.firstname);
    // this.ageControl = new FormControl(this.student.age);
    // this.emailControl = new FormControl(this.student.email);
  }
}