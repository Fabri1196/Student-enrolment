import { Component, Inject } from '@angular/core';
import { StudentService } from 'src/app/student/student.service';
import { FormControl } from '@angular/forms';
import { Address, Student } from 'src/app/student/student';
import { MatDialogRef } from '@angular/material/dialog';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { ValidatorsService } from '../validators/validators.service';

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
  protected address: Address;
  streetControl: FormControl;
  postalCodeControl: FormControl;
  cityControl: FormControl;
  countryControl: FormControl;
  constructor(
    public dialogRef: MatDialogRef<NewStudentComponent>,
    private studentService: StudentService,
    private validatorService: ValidatorsService,
  ) {
    this.student = new Student();
    this.lastnameControl = new FormControl(this.student.lastname);
    this.firstnameControl = new FormControl(this.student.firstname);
    this.ageControl = new FormControl(this.student.age);
    this.emailControl = new FormControl(this.student.email);
    this.address = new Address();
    this.streetControl = new FormControl(this.address.street);
    this.postalCodeControl = new FormControl(this.address.postalCode);
    this.cityControl = new FormControl(this.address.city);
    this.countryControl = new FormControl(this.address.country);
  }

  onSaveClicked(): void {
    try {
      this.student.lastname = this.lastnameControl.value;
      this.student.firstname = this.firstnameControl.value;
      this.student.age = parseInt(this.ageControl.value);
      this.student.email = this.emailControl.value;
      this.address.street = this.streetControl.value;
      this.address.postalCode = this.postalCodeControl.value;
      this.address.city = this.cityControl.value;
      this.address.country = this.countryControl.value;
      this.student.address.push(this.address)

      const validationResult = this.validatorService.validateStudent(this.student);
      if (Object.keys(validationResult).length == 0) {
        this.studentService.upsertStudent(this.student).subscribe();
        this.dialogRef.close();
      }
      else {
        this.validatorService.showStudentErrors(validationResult);
      }
    }
    catch { }
  }
  close(): void{
    this.dialogRef.close(); 
  }
}
