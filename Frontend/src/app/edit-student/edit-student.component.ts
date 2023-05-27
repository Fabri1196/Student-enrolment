import { Component, Inject, Input } from '@angular/core';
import { StudentService } from '../student/student.service';
import { FormControl } from '@angular/forms';
import { Address, Student } from 'src/app/student/student';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { ValidatorsService } from '../validators/validators.service';

@Component({
  selector: 'edit-student',
  templateUrl: './edit-student.component.html',
  providers: [StudentService],
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent {
  student!: Student;
  // @Input() input!: Student;
  // lastnameControl: FormControl;
  // firstnameControl: FormControl;
  // ageControl: FormControl;
  // emailControl: FormControl;
  lastnameControl: FormControl;
  firstnameControl: FormControl;
  birthdateControl: FormControl;
  emailControl: FormControl;
  address!: Address;
  streetControl: FormControl;
  postalCodeControl: FormControl;
  cityControl: FormControl;
  countryControl: FormControl;

  constructor(
    @Inject(MAT_DIALOG_DATA) private input: Student,
    private studentService: StudentService,
    private validatorService: ValidatorsService,
    public dialogRef: MatDialogRef<EditStudentComponent>
  ) {
    this.student = JSON.parse(JSON.stringify(input));
    this.address = this.student.address[0]
    this.lastnameControl = new FormControl(this.student.lastname);
    this.firstnameControl = new FormControl(this.student.firstname);
    this.birthdateControl = new FormControl(this.student.birthdate);
    this.emailControl = new FormControl(this.student.email);
    this.streetControl = new FormControl(this.address.street);
    this.postalCodeControl = new FormControl(this.address.postalCode);
    this.cityControl = new FormControl(this.address.city);
    this.countryControl = new FormControl(this.address.country);
  }

  onStartEdit(): void {
    try {
      this.student.lastname = this.lastnameControl.value;
      this.student.firstname = this.firstnameControl.value;
      this.student.birthdate = new Date(this.birthdateControl.value);
      this.student.email = this.emailControl.value;
      this.address.street = this.streetControl.value;
      this.address.postalCode = this.postalCodeControl.value;
      this.address.city = this.cityControl.value;
      this.address.country = this.countryControl.value;
      this.student.address.push(this.address)

      const validationResultStudent = this.validatorService.validateStudent(this.student);
      const validationResultAddress = this.validatorService.validateAddress(this.address);
      if (Object.keys(validationResultStudent).length == 0) {
        if (Object.keys(validationResultAddress).length == 0){
          this.studentService.upsertStudent(this.student).subscribe();
          this.dialogRef.close();
        }
        else{
          this.validatorService.showAddressErrors(validationResultAddress);
        }
      }
      else {
        this.validatorService.showStudentErrors(validationResultStudent);
      }
    }
    catch { }
  }
  close(): void{
    this.dialogRef.close(); 
  }
}
