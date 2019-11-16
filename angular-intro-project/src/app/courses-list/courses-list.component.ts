import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { InputService } from '../input.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  readonly DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  items: Array<Course>;
  inputText: string;

  constructor(private inputService: InputService) {}


  ngOnInit() {
    this.items = [new Course('Id1', 'Title1', new Date('2019, 12, 9'), 120, this.DESCRIPTION, false),
    new Course('Id2', 'Title2', new Date('2019, 11, 9'), 130, this.DESCRIPTION, false),
    new Course('Id3', 'Title3', new Date('2019, 10, 9'), 59, this.DESCRIPTION, true)];
    this.inputService.input$.subscribe((data) => {
      this.inputText = data;
    });
  }

  onDeleted(id: string): void {
    console.log(id);
  }

}
