import { Component, Inject, Input } from '@angular/core';
import { StudentService } from '../student/student.service';
import { FormControl } from '@angular/forms';
import { Student } from 'src/app/student/student';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'edit-student',
  templateUrl: './edit-student.component.html',
  providers: [StudentService],
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent {
  student!: Student
  // @Input() input!: Student;
  // lastnameControl: FormControl;
  // firstnameControl: FormControl;
  // ageControl: FormControl;
  // emailControl: FormControl;
  lastnameControl: FormControl;
  firstnameControl: FormControl;
  ageControl: FormControl;
  emailControl: FormControl;

  constructor(
    @Inject(MAT_DIALOG_DATA) private input: Student,
    private studentService: StudentService,
    public dialogRef: MatDialogRef<EditStudentComponent>,
  ) {
    this.student = JSON.parse(JSON.stringify(input));
    this.lastnameControl = new FormControl(this.student.lastname);
    this.firstnameControl = new FormControl(this.student.firstname);
    this.ageControl = new FormControl(this.student.age);
    this.emailControl = new FormControl(this.student.email);
  }

  onStartEdit(): void {
    // this.newReportItem = JSON.parse(JSON.stringify(this.reportItem));
    
    // this.student = JSON.parse(JSON.stringify(this.input));
    // this.lastnameControl.setValue(this.student?.lastname);
    // this.firstnameControl.setValue(this.student?.firstname);
    // this.ageControl.setValue(this.student?.age);
    // this.emailControl.setValue(this.student?.email);
    // this.studentService.upsertStudent(this.student).subscribe();
    // this.dialogRef.close();

    this.student.lastname = this.lastnameControl.value;
      this.student.firstname = this.firstnameControl.value;
      this.student.age = parseInt(this.ageControl.value);
      this.student.email = this.emailControl.value;

      // const validationResult = this.validatorService.validateReportAggregate(this.reportAggregate);
      // if (Object.keys(validationResult).length == 0) {
        this.studentService.upsertStudent(this.student).subscribe();
        this.dialogRef.close();
  }

  close(): void{
    this.dialogRef.close(); 
  }
}