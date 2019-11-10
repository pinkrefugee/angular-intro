interface ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}

export class Course implements ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;

  constructor(courseId: string, courseTitle: string, courseCreationDate: Date, courseDuration: number, courseDescription: string) {
    this.id = courseId;
    this.title = courseTitle;
    this.creationDate = courseCreationDate;
    this.duration = courseDuration;
    this.description = courseDescription;
  }
}
