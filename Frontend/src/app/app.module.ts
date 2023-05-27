import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteStudentComponent } from './delete-student/delete-student.component';

// Personal Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { NewStudentComponent } from './new-student/new-studentcomponent';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';

// Material Components
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    NewStudentComponent,
    EditStudentComponent,
    ViewStudentComponent,
    DeleteStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatGridListModule,
    MatNativeDateModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then(success => console.log('Bootstrap success'))
//   .catch(err => console.error(err));
