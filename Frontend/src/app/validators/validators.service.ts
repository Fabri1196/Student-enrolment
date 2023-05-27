import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Validator } from 'fluentvalidation-ts';
import { ValidationErrors } from 'fluentvalidation-ts/dist/ValidationErrors';
import { Student } from '../student/students';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  studentValidator: StudentValidator;

  constructor(private _snackBar: MatSnackBar) {
    this.studentValidator = new StudentValidator();

  }

  validateStudent(student: Student) {
    var result = this.studentValidator.validate(student);
    return result;
  }

//   validateReportItem(reportItem: ReportItem) {
//     var result = new ReportItemValidator().validate(reportItem);
//     return result;
//   }

  showStudentErrors(errors: ValidationErrors<Student>) {
    var message = 'Errors: ';
    Object.entries(errors).forEach(([key, value], index) => {
      message += `\n${key}: ${value}`
    });
    this._snackBar.open(message, '', { duration: 5000, panelClass: 'snackbar' })
  }

//   showReportItemErrors(errors: ValidationErrors<ReportItem>) {
//     var message = 'Errors: ';
//     Object.entries(errors).forEach(([key, value], index) => {
//       message += `\n${key}: ${value}`
//     });
//     this._snackBar.open(message, '', { duration: 5000, panelClass: 'snackbar' })
//   }
}

class StudentValidator extends Validator<Student> {

  constructor() {
    super();

    this.ruleFor('id')
      .notNull()
      .withMessage('ID null, item invalid.');

    this.ruleFor('lastname')
      .notNull()
      .length(3, 30)
      .withMessage('Please enter a valid last name.');

    this.ruleFor('firstname')
      .notNull()
      .length(3, 30)
      .withMessage('Please enter a valid first name.');

    this.ruleFor('age')
      .notNull()
      .inclusiveBetween(17, 150)
      .withMessage('The minimum age is 17.');

    this.ruleFor('email')
      .notNull()
      .length(3, 30)
      .emailAddress()
      .withMessage('Please enter a valid email value.');
  }
}

// class ReportItemValidator extends Validator<ReportItem> {

//   constructor() {
//     super();

//     this.ruleFor('reportDate')
//       .notEmpty()
//       .notNull()
//       .must(dateString => !Number.isNaN(Date.parse(dateString)))
//       .withMessage('Please enter a valid date.');

//     this.ruleFor('fireStartDate')
//       .notEmpty()
//       .notNull()
//       .must(dateString => !Number.isNaN(Date.parse(dateString)))
//       .withMessage('Please enter a valid date.');

//     this.ruleFor('fireEndDate')
//       .notEmpty()
//       .notNull()
//       .must(dateString => !Number.isNaN(Date.parse(dateString)))
//       .withMessage('Please enter a valid date.');

//     this.ruleFor('fireIndex')
//       .notNull()
//       .inclusiveBetween(0, 30)
//       .scalePrecision(0, 4)
//       .withMessage('Please enter a valid FWI value.');

//     this.ruleFor('hectares')
//       .notNull()
//       .greaterThan(0)
//       .scalePrecision(0, 8)
//       .withMessage('Please enter a valid number of hectares.');
//   }
// }

