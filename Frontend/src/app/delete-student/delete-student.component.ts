import { Component, Inject } from '@angular/core';
import { StudentService } from 'src/app/student/student.service';
import { FormControl } from '@angular/forms';
import { Student } from 'src/app/student/student';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'delete-student',
  templateUrl: './delete-student.component.html',
  providers: [StudentService],
  styleUrls: ['./delete-student.component.scss'],
})
export class DeleteStudentComponent {
  student: Student;
  lastnameControl: FormControl;
  firstnameControl: FormControl;
  ageControl: FormControl;
  emailControl: FormControl;

  constructor(
    public dialogRef: MatDialogRef<DeleteStudentComponent>,
    private studentService: StudentService,
    @Inject(MAT_DIALOG_DATA) private input: Student
  ) {
    this.student = JSON.parse(JSON.stringify(input));
    this.lastnameControl = new FormControl(this.student.lastname);
    this.firstnameControl = new FormControl(this.student.firstname);
    this.ageControl = new FormControl(this.student.age);
    this.emailControl = new FormControl(this.student.email);
  }

  deleteStudent(): void {
    this.studentService.deleteStudent(this.student.id).subscribe();
    this.dialogRef.close();
  }

  close(): void{
    this.dialogRef.close(); 
  }
}
