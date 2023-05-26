import { Component, Inject } from '@angular/core';
import { StudentService } from 'src/app/student/student.service';
import { FormControl } from '@angular/forms';
import { Student } from 'src/app/student/student';
import { MatDialogRef } from '@angular/material/dialog';
import { EditStudentComponent } from '../edit-student/edit-student.component';

@Component({
  selector: 'new-student',
  templateUrl: './new-student.component.html',
  providers: [StudentService],
  styleUrls: ['./new-student.component.scss'],
})
export class NewStudentComponent {
  protected student: Student;
  lastnameControl: FormControl;
  firstnameControl: FormControl;
  ageControl: FormControl;
  emailControl: FormControl;
  protected showModal: boolean = true;
  constructor(
    public dialogRef: MatDialogRef<NewStudentComponent>,
    private studentService: StudentService,
    // private validatorService: ValidatorsService,
  ) {
    this.student = new Student();
    this.lastnameControl = new FormControl(this.student.lastname);
    this.firstnameControl = new FormControl(this.student.firstname);
    this.ageControl = new FormControl(this.student.age);
    this.emailControl = new FormControl(this.student.email);
  }

  onSaveClicked(): void {
    // try {
      this.student.lastname = this.lastnameControl.value;
      this.student.firstname = this.firstnameControl.value;
      this.student.age = parseInt(this.ageControl.value);
      this.student.email = this.emailControl.value;

      // const validationResult = this.validatorService.validateReportAggregate(this.reportAggregate);
      // if (Object.keys(validationResult).length == 0) {
        this.studentService.upsertStudent(this.student).subscribe();
        this.dialogRef.close();
      }
      // else {
      //   this.validatorService.showReportAggregateErrors(validationResult);
      // }
    // }
    // catch { }
  // }
  close(): void{
    this.dialogRef.close(); 
  }
}
