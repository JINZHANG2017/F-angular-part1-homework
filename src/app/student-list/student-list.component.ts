import { Component } from '@angular/core';
import { Student } from '../student/student';
import { StudentService } from '../student/student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
})
export class StudentListComponent {
  students: Student[];
  selected: string;

  constructor(studentService: StudentService) {
    this.students = studentService.getStudents();
  }
}
