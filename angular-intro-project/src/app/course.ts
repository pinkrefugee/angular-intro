interface ICourse {
  id: any;
  title: any;
  creationDate: any;
  duration: any;
  description: any;
}

class Course implements ICourse {
  id: any;
  title: any;
  creationDate: any;
  duration: any;
  description: any;

  constructor(courseId: any, courseTitle: any, courseCreationDate: any, courseDuration: any, courseDescription: any) {
    this.id = courseId;
    this.title = courseTitle;
    this.creationDate = courseCreationDate;
    this.duration = courseDuration;
    this.description = courseDescription;
  }
}
