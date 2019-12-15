import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent implements OnInit {

  constructor(private courses: CoursesService) { }

  ngOnInit() {
  }

  onLoadMoreClick(): void {
    this.courses.loadNextChunk();
  }

}
