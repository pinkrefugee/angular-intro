import { createAction, props } from '@ngrx/store';

export const updateCourses = createAction('[Courses Component] UpdateCourses', props<{ courseItems }>());
export const loadMoreCourses = createAction('[Courses Component] LoadMoreCourses', props<{ courseItems }>());
