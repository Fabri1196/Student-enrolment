import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Validator } from 'fluentvalidation-ts';
import { ValidationErrors } from 'fluentvalidation-ts/dist/ValidationErrors';
import { Address, Student, University } from '../student/student';

@Injectable({
  providedIn: 'root',
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

  validateAddress(address: Address) {
    var result = new AddressValidator().validate(address);
    return result;
  }

  validateUniversity(university: University) {
    var result = new UniversityValidator().validate(university);
    return result;
  }

  showStudentErrors(errors: ValidationErrors<Student>) {
    var message = 'Errors: ';
    Object.entries(errors).forEach(([key, value], index) => {
      message += `\n${key}: ${value}`;
    });
    this._snackBar.open(message, '', {
      duration: 5000,
      panelClass: 'snackbar',
    });
  }

  showAddressErrors(errors: ValidationErrors<Address>) {
    var message = 'Errors: ';
    Object.entries(errors).forEach(([key, value], index) => {
      message += `\n${key}: ${value}`;
    });
    this._snackBar.open(message, '', {
      duration: 5000,
      panelClass: 'snackbar',
    });
  }

  showUniversityErrors(errors: ValidationErrors<University>) {
    var message = 'Errors: ';
    Object.entries(errors).forEach(([key, value], index) => {
      message += `\n${key}: ${value}`;
    });
    this._snackBar.open(message, '', {
      duration: 5000,
      panelClass: 'snackbar',
    });
  }
}

class StudentValidator extends Validator<Student> {
  constructor() {
    super();

    this.ruleFor('id').notNull().withMessage('ID null, item invalid.');

    this.ruleFor('lastname')
      .notEmpty()
      .withMessage('The field last name cannot be empty')
      .length(3, 50)
      .withMessage('The field last name must be between 3 and 50 characters')
      .matches(/^[A-Za-z\s]+$/)
      .withMessage('The field last name can only contain letters and spaces');

    this.ruleFor('firstname')
      .notEmpty()
      .withMessage('The field first name cannot be empty')
      .length(3, 50)
      .withMessage('The field first name must be between 3 and 50 characters')
      .matches(/^[A-Za-z\s]+$/)
      .withMessage('The field first name can only contain letters and spaces');

    this.ruleFor('birthdate')
      .notNull()
      .withMessage('The field birthdate cannot be empty')
      .must((value: string | number | Date, obj: any) => {
        const birthdate = new Date(value);
        const minumeAge = new Date();
        minumeAge.setFullYear(minumeAge.getFullYear() - 18);
        return birthdate <= minumeAge;
      })
      .withMessage('The minimum age is 18.');

    this.ruleFor('email')
      .notNull()
      .withMessage('The field email cannot be empty')
      .maxLength(50)
      .withMessage(
        'The field email must have a maximum length of 50 characters'
      )
      .emailAddress()
      .withMessage('Please enter a valid email value.');
  }
}

class AddressValidator extends Validator<Address> {
  constructor() {
    super();

    this.ruleFor('street')
      .notEmpty()
      .withMessage('The field street cannot be empty')
      .length(5, 50)
      .withMessage('The field street must be between 5 and 50 characters');

    this.ruleFor('postalCode')
      .notEmpty()
      .withMessage('The field postal code cannot be empty')
      .length(5, 50)
      .withMessage('The field postal code must be between 5 and 50 characters');

    this.ruleFor('city')
      .notEmpty()
      .withMessage('The field city cannot be empty')
      .length(3, 50)
      .withMessage('The field city must be between 3 and 50 characters')
      .matches(/^[A-Za-z\s]+$/)
      .withMessage('The field city can only contain letters and spaces');

    this.ruleFor('country')
      .notEmpty()
      .withMessage('The field country cannot be empty')
      .length(3, 50)
      .withMessage('The field country must be between 3 and 50 characters')
      .matches(/^[A-Za-z\s]+$/)
      .withMessage('The field country can only contain letters and spaces');
  }
}

class UniversityValidator extends Validator<University> {
  constructor() {
    super();

    this.ruleFor('name')
      .notEmpty()
      .withMessage('The name of the university cannot be empty')
      .length(2, 50)
      .withMessage(
        'The name of the university must be between 2 and 50 characters'
      );

    this.ruleFor('city')
      .notEmpty()
      .withMessage('The field city cannot be empty')
      .length(3, 50)
      .withMessage('The field city must be between 3 and 50 characters')
      .matches(/^[A-Za-z\s]+$/)
      .withMessage('The field city can only contain letters and spaces');
  }
}
