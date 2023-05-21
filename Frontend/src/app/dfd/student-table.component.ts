// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { Student } from '../student/Student';
// import { StudentService } from '../student/Student.Service';
// import { NewStudentComponent } from '../new-student/new-student.component';
// import { MatTable } from '@angular/material/table';


// @Component({
//   selector: 'student-table',
//   templateUrl: './student-table.component.html',
//   // providers: [StudentService],
//   styleUrls: ['./student-table.component.scss']
// })

// // export class StudentTableComponent implements OnInit {
//   export class StudentTableComponent {
//     data: Students[] = [new Students('Smith', 'John', 19, 'example')];
//     displayedColumns: string[] = ['lastname', 'firstname', 'age', 'email', 'actions'];

//     @ViewChild(MatTable) tabla1!: MatTable<Students>
  
//     constructor(private studentService: StudentService, public dialog: MatDialog) { }
  
    // getTravelTickets(): void {
    //   this.studentService.getStudents().subscribe(result => {
    //     this.dataSource = result;
    //   });
    // }
  
    // newStudent(): void {
    //   this.openCreateDialog(new Student());
    // }
  
    // openCreateDialog(row: Student): void {
    //   const dialogRef = this.dialog.open(NewStudentComponent);
  
    //   dialogRef.afterClosed().subscribe(result => {
    //     this.getTravelTickets();
    //   });
    // }
  
    // ngOnInit(): void {
    //   this.getTravelTickets();
    // }
// }

// export class Students{
//   constructor (public lastname: string, public firstname: string, public age: number, public email: string)
//   {

//   }
// }
