import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NewStudentComponent } from '../new-student/new-student.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent {
  displayedColumns: string[] = ['lastname', 'firstname', 'age', 'email', 'actions'];

  datos: Student[] = [new Student('jj', 'papas', 55, 'e'),
  new Student('jose', 'manzanas', 53, 'm'),
  new Student('juan', 'naranjas', 25, 'aa'),
  ];

  @ViewChild(MatTable) tabla1!: MatTable<Student>;

  constructor(public dialog: MatDialog) { }

  newStudent(): void {
      this.openCreateDialog();
    }
  
    openCreateDialog(): void {
      const dialogRef = this.dialog.open(NewStudentComponent);
  
      // dialogRef.afterClosed().subscribe(result => {
      //   this.getTravelTickets();
      // });
    }
}


export class Student {
  constructor(public lastname: string, public firstname: string, public age: number, public email: string) {
  }
}