interface ICourse {
  id: string;
  title: string;
  creationDate: string;
  duration: string;
  description: string;
}

export class Course implements ICourse {
  id: string;
  title: string;
  creationDate: string;
  duration: string;
  description: string;

  constructor(courseId: string, courseTitle: string, courseCreationDate: string, courseDuration: string, courseDescription: string) {
    this.id = courseId;
    this.title = courseTitle;
    this.creationDate = courseCreationDate;
    this.duration = courseDuration;
    this.description = courseDescription;
  }
}
