import { Course } from './course';
import { createAction, props } from '@ngrx/store';

export const getCourse = createAction('[Add Course Component] GetCourse', props<{ course: Course }>());
