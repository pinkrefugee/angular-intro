import { getCourse } from './add-course.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState = null;

const _addCourseReducer = createReducer(initialState,
  on(getCourse, (state, { course }) => {
    return course;
  }),
);

export function addCourseReducer(state, action) {
  return _addCourseReducer(state, action);
}
