import { Component, Inject, Input } from '@angular/core';
import { StudentService } from 'src/app/student/student.service';
import { Student } from 'src/app/student/student';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'view-student',
  templateUrl: './view-student.component.html',
  providers: [StudentService],
  styleUrls: ['./view-student.component.scss'],
})
export class ViewStudentComponent {
  protected student: Student;

  constructor(
    public dialogRef: MatDialogRef<ViewStudentComponent>,
    @Inject(MAT_DIALOG_DATA) private input: Student
  ) {
    this.student = JSON.parse(JSON.stringify(input));
  }

  close(): void {
    this.dialogRef.close();
  }
}
