interface ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;
}

export class Course implements ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;

  constructor(courseId: string, courseTitle: string, courseCreationDate: Date, courseDuration: number, courseDescription: string, courseTopRated: boolean) {
    this.id = courseId;
    this.title = courseTitle;
    this.creationDate = courseCreationDate;
    this.duration = courseDuration;
    this.description = courseDescription;
    this.topRated = courseTopRated;
  }
}
