import { Component, Inject } from '@angular/core';
import { StudentService } from '../student/Student.Service';
import { FormControl } from '@angular/forms';
import { Student } from '../student/Student';

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

  constructor() {
    this.student = new Student();
    this.lastnameControl = new FormControl(this.student.lastname);
    this.firstnameControl = new FormControl(this.student.firstname);
    this.ageControl = new FormControl(this.student.age);
    this.emailControl = new FormControl(this.student.email);
  }
}