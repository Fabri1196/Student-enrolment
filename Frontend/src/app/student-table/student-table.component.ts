import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../student/Student';
import { StudentService } from '../student/Student.Service';
import { NewStudentComponent } from '../new-student/new-student.component';


@Component({
  selector: 'student-table',
  templateUrl: './student-table.component.html',
  providers: [StudentService],
  styleUrls: ['./student-table.component.scss']
})

export class StudentTableComponent implements OnInit {
    dataSource: Student[] = [];
    displayedColumns: string[] = ['lastname', 'firstname', 'age', 'email'];
  
    constructor(private studentService: StudentService, public dialog: MatDialog) { }
  
    getTravelTickets(): void {
      this.studentService.getStudents().subscribe(result => {
        this.dataSource = result;
      });
    }
  
    lookForBuses(): void {
      this.openCreateDialog(new Student());
    }
  
    openCreateDialog(row: Student): void {
      const dialogRef = this.dialog.open(NewStudentComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        this.getTravelTickets();
      });
    }
  
    ngOnInit(): void {
      this.getTravelTickets();
    }
  }