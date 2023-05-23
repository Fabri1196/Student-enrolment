import { Component, Inject } from '@angular/core';
import { StudentService } from '../student/Student.Service';
import { FormControl } from '@angular/forms';
import { Student } from '../student/Student';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'edit-student',
  templateUrl: './edit-student.component.html',
  providers: [StudentService],
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent {
  protected student: Student;
  lastnameControl: FormControl;
  firstnameControl: FormControl;
  ageControl: FormControl;
  emailControl: FormControl;

  constructor(
    @Inject(MAT_DIALOG_DATA) private input: Student
  ) {
    this.student = JSON.parse(JSON.stringify(input));
    this.student = new Student();
    this.lastnameControl = new FormControl(input.lastname);
    this.firstnameControl = new FormControl(input.firstname);
    this.ageControl = new FormControl(input.age);
    this.emailControl = new FormControl(input.email);
  }
}