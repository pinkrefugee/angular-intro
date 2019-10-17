import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoffButtonComponent } from './logoff-button/logoff-button.component';
import { SearchAndAddSectionComponent } from './search-and-add-section/search-and-add-section.component';
import { SearchCourseButtonComponent } from './search-course-button/search-course-button.component';
import { AddCourseButtonComponent } from './add-course-button/add-course-button.component';
import { SearchCourseInputComponent } from './search-course-input/search-course-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    CoursesListComponent,
    CourseItemComponent,
    LogoComponent,
    FooterComponent,
    LoginButtonComponent,
    LogoffButtonComponent,
    SearchAndAddSectionComponent,
    SearchCourseButtonComponent,
    AddCourseButtonComponent,
    SearchCourseInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
