import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {
  @Input() id: number;
  @Output() selected = new EventEmitter<string>();
  student: Student;

  constructor(private studentService: StudentService) {
    // this.student = {
    //   id: 1,
    //   name: 'student 1',
    //   age: 18,
    // };
  }
  ngOnInit(): void {
    this.student = this.studentService.getStudent(this.id);
  }

  select():void {
    this.selected.emit(this.student.name);
  }
}
