import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatTable } from '@angular/material/table';
import { NewStudentComponent } from '../new-student/new-studentcomponent';
import { MatDialog } from '@angular/material/dialog';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { ViewStudentComponent } from '../view-student/view-student.component';
import { DeleteStudentComponent } from '../delete-student/delete-student.component';
import { Student } from 'src/app/student/student';
import { StudentService } from 'src/app/student/student.service';

@Component({
  selector: 'student-table',
  templateUrl: './student-table.component.html',
  providers: [StudentService],
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit{
  information: Student[] = [];
  displayedColumns: string[] = [
    'lastname',
    'firstname',
    'age',
    'email',
    'actions',
  ];

  // information: Student[] = [
  //   new Student('jj', 'papas', 55, 'e'),
  //   new Student('jose', 'manzanas', 53, 'm'),
  //   new Student('juan', 'naranjas', 25, 'aa'),
  // ];

  // @ViewChild(MatTable) tabla1!: MatTable<Student>;

  constructor(private studentService: StudentService, public dialog: MatDialog) {}

  getAllStudents(): void {
    this.studentService.getStudents().subscribe(result => {
      this.information = result;
    });
  }

  newStudent(): void {
    this.openCreateDialog(new Student);
  }

  openCreateDialog(student: Student): void {
    const dialogRef = this.dialog.open(NewStudentComponent, {data: student});

    dialogRef.afterClosed().subscribe(result => {
      this.getAllStudents();
      this.refresh();
    });
  }

  seeStudent(student: Student): void {
    const dialogRef = this.dialog.open(ViewStudentComponent, {
      data: student,
    });
  }

  openSeeDialog(index: number): void {
    // const dialogRef = this.dialog.open(EditStudentComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   this.getTravelTickets();
    // });
  }

  editStudent(student: Student): void {
    const dialogRef = this.dialog.open(EditStudentComponent, {
      data: student,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllStudents();
      this.refresh();
    });
    
  }

  // openEditDialog(): void {
  //   const dialogRef = this.dialog.open(EditStudentComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.getStudents();
  //   });
  // }

  deleteStudent(student: Student): void {
    const dialogRef = this.dialog.open(DeleteStudentComponent, {
      data: student,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllStudents();
      this.refresh();
    });
  }
  ngOnInit(): void {
    this.getAllStudents();
  }
  refresh(): void {
    window.location.reload();
}
}
