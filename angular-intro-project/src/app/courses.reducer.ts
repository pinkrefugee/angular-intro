import { updateCourses, loadMoreCourses } from './courses.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState = '';

const _coursesReducer = createReducer(initialState,
  on(updateCourses, (state, { courseItems }) => {
    return courseItems;
  }),
  on(loadMoreCourses, (state, { courseItems }) => {
    return state.concat(courseItems);
  }),
);

export function coursesReducer(state, action) {
  return _coursesReducer(state, action);
}
